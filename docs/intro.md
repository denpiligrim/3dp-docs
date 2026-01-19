---
sidebar_position: 1
---

# Introduction

Inbound generator for **3x-ui**.

## About the Project

### Overview

A utility for auto-generating inbound connections for the [3x-ui](https://github.com/MHSanaei/3x-ui) panel, creating a single subscription URL, and configuring traffic forwarding from an intermediate server to the main server.

Check out the full review of the utility on YouTube.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ErAD0Kr3lS4?si=0nEvD_InrCoCcC_r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Key Goals

The main goal of the utility is to make your traffic appear non-uniform. The bot generates 10 connection entries at a configured interval with varying parameters:

- Protocols: `vless`, `vmess`, `shadowsocks`, `trojan`;
- Ports: `443`, `8443` (fixed) and random ports from the range `10000-60000`;
- Transport: `tcp`, `websocket`, `grpc`, `xhttp`;
- SNI values are taken from a whitelist of domains (`whitelist`); you can use your own list.

All generated connections are combined into a single subscription with a static URL. The bot works with the `3x-ui` panel using its public API and does not directly modify the panel internals.

The secondary goal is connection stability: the client receives 10 alternate connection options and can choose any of them.

Additionally, the bot can be used in a cascading setup. The forwarding service will automatically configure the subscription and traffic redirection to the main server.

## Recommendations

- Use HTTPS for the subscription (domain + SSL certificate).
- Set the generation interval to ≥ 10 minutes; for stability, once per day (1440 minutes) is recommended.
- Configure the client to check for updates more frequently (for example, hourly) to stay synchronized with the server.

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