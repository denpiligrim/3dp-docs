---
sidebar_position: 1
---

# Installation

These instructions cover **3DP-MANAGER v3.0.0**. Prepare an Ubuntu or Debian server with root access and one or more reachable 3x-ui panels. See [System Requirements](../features-requirements/requirements.md).

## Quick installation

Run as root on the server hosting 3DP-MANAGER:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/install.sh)
```

The interactive installer installs Docker and Docker Compose if necessary, then deploys PostgreSQL, the backend, and the frontend in `/opt/3dp-manager`.

Choose HTTP or HTTPS with Let's Encrypt, your own certificate, or a self-signed certificate. The installer prints the interface URL, port, administrator username, and password. Sign in at that URL and change the password under **Settings**.

## Connect your panels

Add your 3x-ui panels under **Nodes** after installation. Enter the panel URL and token or username/password credentials. A panel may run on another server or in Docker as long as its API is reachable.

Continue with [Usage](usage.md) to configure nodes, domains, and subscriptions. For an intermediate server, follow [Forwarding Setup](forwarding-setup.md).

## Docker installation problems

If automatic Docker installation fails, follow the [official Docker installation instructions](https://docs.docker.com/engine/install/) for your distribution, then rerun the installer.
