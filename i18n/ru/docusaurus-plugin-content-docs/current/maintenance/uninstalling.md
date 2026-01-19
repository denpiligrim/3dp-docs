---
sidebar_position: 2
---

# Удаление

## Удаление утилиты

Полностью удалите службу:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/delete.sh)
```

<small>Краткое описание: удаляет контейнеры и файлы конфигурации, восстанавливая систему до состояния, предшествующего установке.</small>

## Удаление службы переадресации

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/forwarding_delete.sh)
```

<small>Краткое описание: удаляет правила и отключает службу переадресации.</small>