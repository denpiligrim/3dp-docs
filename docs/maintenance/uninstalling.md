---
sidebar_position: 2
---

# Uninstalling

## Remove 3DP-MANAGER

Copy any database backups you need outside `/opt/3dp-manager` before removal. Run as root:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/delete.sh)
```

This removes the project containers, database volume, and `/opt/3dp-manager`, **including backups inside that directory**.

## Remove relay forwarding

Remove forwarding separately on the intermediate server through the Web UI before uninstalling the manager, or run on that server:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/forwarding_delete.sh)
```

The script reloads UFW and schedules a reboot. See [Forwarding Setup](../getting-started/forwarding-setup.md).
