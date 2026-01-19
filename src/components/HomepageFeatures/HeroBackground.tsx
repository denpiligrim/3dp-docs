import React, { useEffect, useRef } from 'react';

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Инициализация размеров
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    resizeCanvas();

    const gl = canvas.getContext('webgl2');
    if (!gl) {
      console.error('require webgl 2.0');
      return;
    }

    // --- Шейдеры ---
    const vss = `#version 300 es
      in vec2 p;
      void main() {
        gl_Position = vec4(p, 0.0, 1.0);
      }
    `;

    const fss = `#version 300 es
      precision mediump float;
      out vec4 o;
      uniform vec4 c;
      void main() {
        o = c;
      }
    `;

    // --- Компиляция шейдеров ---
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vss);
    const fs = createShader(gl.FRAGMENT_SHADER, fss);
    const prg = gl.createProgram();

    if (!vs || !fs || !prg) return;

    gl.attachShader(prg, vs);
    gl.attachShader(prg, fs);
    gl.linkProgram(prg);

    if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prg));
      return;
    }

    // Очистка шейдеров после линковки (хорошая практика, как и было у вас)
    gl.detachShader(prg, vs);
    gl.deleteShader(vs);
    gl.detachShader(prg, fs);
    gl.deleteShader(fs);

    // --- Данные ---
    const $p = gl.getAttribLocation(prg, 'p');
    const $c = gl.getUniformLocation(prg, 'c');

    const va = gl.createVertexArray();
    gl.bindVertexArray(va);

    const N = 300; // кол-во треугольников
    let ps = new Float32Array(2 + N * 2 * 2);
    ps[0] = 0; 
    ps[1] = 0;
    
    // Заполняем случайными данными
    let j = 2;
    for (let i = 0; i < N; ++i) {
        ps[j++] = Math.random() * 2 - 1; 
        ps[j++] = Math.random() * 2 - 1; 
        ps[j++] = Math.random() * 2 - 1; 
        ps[j++] = Math.random() * 2 - 1; 
    }

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, ps, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray($p);
    gl.vertexAttribPointer($p, 2, gl.FLOAT, false, 0, 0);

    let idxs = new Uint16Array(3 * N);
    j = 0;
    for (let i = 0; i < N; ++i) {
        idxs[j++] = 0;
        idxs[j++] = 1 + i * 2;
        idxs[j++] = 2 + i * 2;
    }

    const ibuf = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idxs, gl.STATIC_DRAW);

    gl.bindVertexArray(null);

    // --- Рендер ---
    gl.useProgram(prg);
    gl.bindVertexArray(va);
    
    // Настройки смешивания
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.BLEND);
    gl.disable(gl.CULL_FACE);

    const draw = () => {
      // Обновляем viewport при ресайзе
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      
      // Цвет фона (важно для перекрытия стандартного фона)
      gl.clearColor(0.1058, 0.1058, 0.1058, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      
      gl.uniform4fv($c, [0.2, 0.2, 0.2, 0.02]);
      gl.drawElements(gl.TRIANGLES, idxs.length, gl.UNSIGNED_SHORT, 0);
    };

    // Первый отрисовка
    draw();

    // --- Обработчики событий ---
    
    const handleMouseMove = (e: MouseEvent) => {
       // Привязка буфера для обновления данных
       gl.bindBuffer(gl.ARRAY_BUFFER, buf);
       
       // Вычисляем координаты относительно окна (как в оригинале)
       // или относительно канваса (если хедер не во весь экран)
       const rect = canvas.getBoundingClientRect();
       
       // Вариант 1: Как в оригинале (на все окно)
       // ps[0] = e.clientX / window.innerWidth * 2 - 1;
       // ps[1] = -1 * (e.clientY / window.innerHeight * 2 - 1);

       // Вариант 2: Локально внутри хедера (более точно для компонента)
       const x = (e.clientX - rect.left) / rect.width * 2 - 1;
       const y = -1 * ((e.clientY - rect.top) / rect.height * 2 - 1);
       
       ps[0] = x;
       ps[1] = y;

       gl.bufferSubData(gl.ARRAY_BUFFER, 0, ps.slice(0, 2));
       draw();
    };

    const handleResize = () => {
      resizeCanvas();
      draw();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup при размонтировании компонента
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      gl.deleteProgram(prg);
      // Можно добавить удаление буферов, если нужно
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 0, // Позади контента
        pointerEvents: 'none' // Пропускать клики сквозь канвас
      }} 
    />
  );
};

export default HeroBackground;