---
sidebar_position: 2
---

# System Requirements

- An Ubuntu or Debian server and root access for the installer.
- Docker and Docker Compose; the installer installs them if necessary.
- One or more 3x-ui panels with working inbound and Clients APIs. Protocol and token support depends on the panel version.
- SSH access to the intermediate server for relay setup.
- A certificate and private key on the corresponding node for TLS inbounds.
- A domain if you choose domain-based HTTPS for the Web UI. HTTP and self-signed HTTPS are also available.

The Web UI certificate and TLS inbound certificates are configured separately. See [Installation](../getting-started/installation.md) and [Usage](../getting-started/usage.md).
