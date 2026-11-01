---
sidebar_position: 2
---

# Usage

Manage v3.0.0 through the Web UI. Copy subscription URLs and start generation in the interface.

## Nodes and domains

1. Under **Nodes**, add the 3x-ui panel URL, credentials, IP address, and flag. IP and country are detected automatically and can be corrected manually. The main node supplies defaults.
2. If needed, configure an intermediate server under **Relay servers** and select its destination node. See [Forwarding Setup](forwarding-setup.md).
3. Under **Domains**, configure the SNI list for Reality connections using import, export, or automatic discovery. Node and relay domains are added automatically when those servers are created; IP addresses are skipped.

Import your own domain list here to customize SNI selection.

## Create a subscription

1. Open **Subscriptions** and use the creation wizard to enter the basic details.
2. Enter an existing 3x-ui client's ID, email, or name in **Client ID**, or leave it empty to create a client automatically. An existing client must be available on every selected node. The identifier appears below the subscription name.
3. Add inbounds and optionally Happ or INCY routing profiles. A subscription supports up to **20 items in total**. Routing is available for both direct and relay subscriptions.
4. Choose a node, relay, flag, name, port, and connection type for each inbound. Use `custom` to include an external connection link.
5. Save and start generation, then copy the subscription URL into your client application. Its path is `/bus/<UUID>` and remains unchanged during rotation.

Subscriptions can include notes, support and website links, traffic statistics, limits, and expiration information.

## Connection types

| Type | Transport and security |
| --- | --- |
| `vless-tcp-reality` | VLESS TCP + Reality |
| `vless-xhttp-reality` | VLESS XHTTP + Reality |
| `vless-xhttp-get` | VLESS XHTTP, `packet-up`, GET uplink, no TLS |
| `vless-grpc-reality` | VLESS gRPC + Reality |
| `vless-ws` | VLESS WebSocket + TLS, path `/ws` |
| `vmess-tcp` | VMess TCP |
| `shadowsocks-tcp` | Shadowsocks TCP |
| `trojan-tcp-reality` | Trojan TCP + Reality |
| `hysteria2-udp` | Hysteria2 UDP + TLS, Salamander |
| `custom` | An external connection link |

Set a port from `1` to `65535`, or use `random` to select from `10000–59999`. The port must be reachable on the node and relay. The standard forwarding script covers `443`, `8443`, and `10000–60000`; other fixed ports require corresponding forwarding rules.

Reality uses a selected SNI domain or `random` from **Domains**. WebSocket and Hysteria2 use the node's domain or IP as SNI. WebSocket also uses it as Host; these values remain the node's address when a relay changes the connection destination. Reality and VLESS WebSocket support fingerprint selection, with `firefox` as the default.

## TLS certificates

WebSocket and Hysteria2 require files on the corresponding node:

| Node address | Default certificate | Default private key |
| --- | --- | --- |
| Domain, for example `example.com` | `/root/cert/example.com/fullchain.pem` | `/root/cert/example.com/privkey.pem` |
| IPv4 or IPv6 | `/root/cert/ip/fullchain.pem` | `/root/cert/ip/privkey.pem` |

Override the paths in the inbound settings if necessary. The application passes these paths to 3x-ui; the files must already exist on that node.

## Generation and journal

Enable auto-rotation on the required subscriptions and set a shared interval of at least **10 minutes**. For stability, consider daily rotation (1440 minutes) and hourly subscription refreshes in your client. Manual generation is available for one subscription or all active subscriptions with auto-rotation enabled.

Generation, subscription and node deletion, relay deletion, and forwarding installation or removal run in the background. Follow progress and results under **Journal**. Temporary inbound creation and deletion failures have up to three attempts; one subscription's failure does not stop the batch. New inbounds are prepared before old ones are removed, and unsuccessful replacement preserves working connections.

The journal refreshes automatically, supports process and status filters, and displays 20 entries per page. Completed entries are retained for up to 30 days, with a limit of 50,000 events.

The queue survives application restarts. A task running at shutdown is marked interrupted and does not restart automatically. Check the journal and node before launching it again.
