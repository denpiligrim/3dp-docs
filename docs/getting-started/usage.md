---
sidebar_position: 2
---

# Usage

## Show subscription URL

Command to print the current subscription URL from the container environment:

```bash
cd /opt/3dp-manager && docker compose exec node env | grep SUB_URL | cut -d'=' -f2
```

<small>Summary: prints the static subscription URL that can be used by clients. Works on both primary and intermediate servers.</small>

## Collect domains from multi-subscriptions

This utility extracts domains from subscriptions and generates a `whitelist` for the generator.

```bash
node get_domains.js
```

<small>Summary: add a multi-subscription URL into the script and run the command — it outputs a list of domains. `Node.js` is required.</small>

## Using a custom whitelist

1. Prepare a file in `whitelist.txt` format.
```text title="my_whitelist.txt"
refersion.com
vk.com
miro.com
cloudflare.com
google.com
```
2. Rename it to `my_whitelist.txt` and copy it to `/opt/3dp-manager/app`.

```bash
cd /opt/3dp-manager && docker cp ./app/my_whitelist.txt node:/app/my_whitelist.txt
```

<small>Summary: adds your domain file into the application container. To immediately generate inbounds with the new list, run `docker exec -it node sh` and then `node rotate.js`.</small>

## Manual generation run

To create new inbounds, run the following commands in sequence:

```bash
cd /opt/3dp-manager
docker exec -it node sh
node rotate.js
```

<small>Summary: performs an immediate generation of inbounds without affecting the scheduled rotation interval.</small>