---
sidebar_position: 3
---

# Forwarding Setup

The forwarding service allows you to redirect traffic to the main server and is used in a VPN cascade scheme. The tool redirects all `TCP` and `UDP` packets on the following ports: `443`, `8443`, `10000:60000`. In addition, automatic redirection of the subscription URL is performed.

:::warning
The forwarding service runs on the intermediate server

:::

## Install forwarding service

The forwarding service allows proxying incoming ports from the intermediate server to the primary server.

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/forwarding_install.sh)
```

<small>Summary: adds forwarding rules and creates a service to update the subscription.</small>

## Remove forwarding service

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/forwarding_delete.sh)
```

<small>Summary: removes the rules and disables the forwarding service.</small>

## Show subscription URL

Command to print the current subscription URL from the container environment:

```bash
cd /opt/3dp-manager && docker compose exec node env | grep SUB_URL | cut -d'=' -f2
```

<small>Summary: prints the static subscription URL that can be used by clients. Works on both primary and intermediate servers.</small>