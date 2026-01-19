---
sidebar_position: 1
---

# Installation

:::warning

The utility runs on the main server

:::

## Quick installation

You must have the following packages installed on your server `curl`, `jq` using the command: `apt install curl jq` control  `3x-ui`, which can be installed using the command: `bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)`
Install the project on the server using the command:

```bash title="bash"
bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/install.sh)
```

<small>Runs the installer script and deploys containers and services.</small>

## If the panel is in a Docker container

If the 3x-ui panel is located in a Docker container, install it with the command:

```bash title="bash"
REMOTE_PANEL=true bash <(curl -fsSL https://raw.githubusercontent.com/denpiligrim/3dp-manager/main/install.sh)
```

<small>The command installs a utility for the panel located in the Docker container.</small>

## Problem with installing Docker

If you encounter problems with installing Docker while running the script, install it yourself by following the [official Docker documentation](https://docs.docker.com/engine/install/).