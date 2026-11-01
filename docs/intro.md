---
sidebar_position: 1
---

# Introduction

**3DP-MANAGER v3.0.0** is a web application for managing connections and subscriptions through the [3x-ui](https://github.com/MHSanaei/3x-ui) API. It combines inbounds from multiple nodes into subscriptions with permanent URLs and updates them manually or on a schedule.

## About the project

Configure nodes, relay servers, SNI domains, and subscriptions in the Web UI. The subscription wizard can bind an existing 3x-ui client or create one automatically, with traffic statistics, limits, and expiration information. Add up to 20 items per subscription, including external links and Happ or INCY routing profiles.

Supported protocols include VLESS, VMess, Shadowsocks, Trojan, and Hysteria2. Choose the node, relay, port, flag, and name per inbound. Generation and deletion run as background tasks with progress and results in the Journal. Rotation prepares new inbounds before removing old ones.

Start with [Installation](getting-started/installation.md), then follow [Usage](getting-started/usage.md). See [Features](features-requirements/features.md) for the overview and [Updating](maintenance/updating.md) when upgrading an existing installation.

Check out the full review of the utility on YouTube.

<div class="container-youtube"><iframe src="https://www.youtube.com/embed/pEYpKhH_Q6Y?si=wPcRUy3G0_UPx0QI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Recommendations

- Use HTTPS for subscription access.
- Set the rotation interval to at least 10 minutes; daily rotation (1440 minutes) is recommended for stability.
- Refresh subscriptions in your client more frequently, for example hourly.

## Support the Project

- Donation / payment details:
  - MIR card: `2204320436318077`
  - MasterCard: `5395452209474530`
  - PayPal: `vasiljevdenisx@gmail.com`
  - USDT | ETH (ERC20 | BEP20): `0x6fe140040f6Cdc1E1Ff2136cd1d60C0165809463`
  - USDT | TRX (TRC20): `TEWxXmJxvkAmhshp7E61XJGHB3VyM9hNAb`
  - Bitcoin: `bc1qctntwncsv2yn02x2vgnkrqm00c4h04c0afkgpl`
  - TON: `UQCZ3MiwyYHXftPItMMzJRYRiKHugr16jFMq2nfOQOOoemLy`
  - Bybit ID: `165292278`