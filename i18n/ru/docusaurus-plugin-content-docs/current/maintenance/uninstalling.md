---
sidebar_position: 2
---

# Удаление

## Удаление 3DP-MANAGER

Перед удалением скопируйте нужные резервные копии БД за пределы `/opt/3dp-manager`. Выполните от root:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/delete.sh)
```

Команда удаляет контейнеры проекта, том БД и `/opt/3dp-manager`, **включая резервные копии внутри этого каталога**.

## Удаление relay-перенаправления

До удаления менеджера удалите перенаправление на промежуточном сервере через веб-интерфейс либо выполните на этом сервере:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/forwarding_delete.sh)
```

Скрипт перезагружает UFW и планирует перезагрузку системы. См. [Настройка перенаправления](../getting-started/forwarding-setup.md).
