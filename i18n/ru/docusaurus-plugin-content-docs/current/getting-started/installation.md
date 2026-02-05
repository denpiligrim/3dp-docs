---
sidebar_position: 1
---

# Установка

:::warning

Утилита работает на основном сервере.

:::

## Быстрая установка

На вашем сервере должна быть установлена панель `3x-ui`, которую можно поставить с помощью команды: `bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)`
Установите утилиту на сервере с помощью команды:

```bash title="bash"
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/install.sh)
```

<small>Запускает скрипт установщика и развертывает контейнеры и службы.</small>

## Проблема с установкой Docker

Если при запуске скрипта возникли проблемы с установкой Docker, установите его самостоятельно, следуя [официальной документации Docker](https://docs.docker.com/engine/install/).