---
sidebar_position: 1
---

# Установка

:::warning

Утилита работает на главном сервере.

:::

## Быстрая установка

На вашем сервере должны быть установлены следующие пакеты: `curl`, `jq` с помощью команды: `apt install curl jq` control  `3x-ui`, который можно установить с помощью команды: `bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)`
Установите проект на сервере с помощью команды:

```bash title="bash"
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/install.sh)
```

<small>Запускает скрипт установщика и развертывает контейнеры и службы.</small>

## Если панель находится в контейнере Docker

Если панель 3x-ui находится в контейнере Docker, установите ее с помощью команды:

```bash title="bash"
REMOTE_PANEL=true bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/install.sh)
```

<small>Эта команда устанавливает утилиту для панели, расположенной в контейнере Docker.</small>

## Проблема с установкой Docker

Если при запуске скрипта возникли проблемы с установкой Docker, установите его самостоятельно, следуя [официальной документации Docker](https://docs.docker.com/engine/install/).