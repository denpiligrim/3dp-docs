---
sidebar_position: 1
---

# Updating

## Standard installation

For an installation created by the installer, run as root:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/update.sh)
```

The script backs up the database to `/opt/3dp-manager/backups`, enables migrations, and updates the containers. Keep `.env` and `docker-compose.yml`, which contain existing installation settings. Keep a separate copy of important backups outside the installation directory.

After updating to **v3.0.0**, check nodes and subscriptions in the Web UI. Follow generation results under **Journal**. If an operation was interrupted by a restart, check its outcome on the node before starting it again.

## Custom deployment

Update the database schema together with the backend. The background queue requires migration `1793300000000-add-operations`, which adds the `operation` table and `inbound.isPending` field.

The standard Compose configuration uses `DB_SYNCHRONIZE=true`. If synchronization is disabled, apply migrations with `DB_MIGRATIONS_RUN=true` when updating the backend. Do not run the new backend against an outdated schema.

See the [v3.0.0 background operations documentation](https://github.com/denpiligrim/3dp-manager/blob/v3.0.0/docs/background-operations.md) for queue behavior and configuration.
