---
sidebar_position: 3
---

# Forwarding Setup

A relay forwards traffic from an intermediate server to a selected 3x-ui node. Forwarding runs on the **intermediate server**, which requires SSH access for setup through the Web UI.

## Setup through the interface

Under **Relay servers**, add the intermediate server by domain or IP, select its destination node, and install forwarding. The backend attempts to resolve a domain to an IP automatically. Assign the relay to the desired inbounds in **Subscriptions**.

Installation and removal run in the background; track results under **Journal**. Copy subscription URLs from **Subscriptions**.

## Manual installation

On the intermediate server, replace `IP_ADDRESS` with the destination node's IP:

```bash
sudo ORIGIN_IP="IP_ADDRESS" bash -c "$(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/forwarding_install.sh)"
```

The script configures UFW/NAT forwarding for TCP and UDP ports `443`, `8443`, and `10000–60000`. For other fixed inbound ports, configure the corresponding firewall and forwarding rules separately.

## Remove forwarding

Use the Web UI or run as root on the intermediate server:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/forwarding_delete.sh)
```

The script restores UFW rules from its backup when available, removes forwarding rules, disables IP forwarding, reloads UFW, and schedules a reboot. Plan for the intermediate server to disconnect.
