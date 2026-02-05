---
sidebar_position: 3
---

# Uninstalling

## Remove utility

Remove the service completely:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/delete.sh)
```

<small>Short description: removes containers and configuration files, restoring the system to the pre-install state.</small>

## Remove forwarding service

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/forwarding_delete.sh)
```

<small>Short description: removes rules and disables the forwarding service.</small>