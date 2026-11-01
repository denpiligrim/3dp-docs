---
sidebar_position: 1
---

# Введение

**3DP-MANAGER v3.0.0** — веб-приложение для управления подключениями и подписками через API [3x-ui](https://github.com/MHSanaei/3x-ui). Объединяет инбаунды нескольких нод в подписки с постоянными URL и обновляет их вручную или по расписанию.

## О проекте

Настраивайте ноды, relay-серверы, SNI-домены и подписки в веб-интерфейсе. Мастер подписок позволяет привязать существующего клиента 3x-ui или создать нового, со статистикой трафика, лимитами и сведениями о сроке действия. Добавляйте до 20 элементов на подписку, включая внешние ссылки и профили маршрутизации Happ или INCY.

Поддерживаются VLESS, VMess, Shadowsocks, Trojan и Hysteria2. Для каждого инбаунда доступны отдельные настройки ноды, relay, порта, флага и названия. Генерация и удаление выполняются в фоне, прогресс и результаты доступны в Журнале. При ротации новые инбаунды подготавливаются до удаления старых.

Начните с раздела [Установка](getting-started/installation.md), затем перейдите к [Использованию](getting-started/usage.md). Обзор возможностей — в разделе [Возможности](features-requirements/features.md), порядок обновления существующей установки — в разделе [Обновление](maintenance/updating.md).

Посмотрите полный обзор утилиты на YouTube.

<div class="container-youtube"><iframe src="https://www.youtube.com/embed/pEYpKhH_Q6Y?si=wPcRUy3G0_UPx0QI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Рекомендации

- Используйте HTTPS для доступа к подпискам.
- Задайте интервал ротации от 10 минут; для стабильности рекомендуется раз в сутки (1440 минут).
- Обновляйте подписки в клиенте чаще, например каждый час.

## Поддержка проекта

- Детали пожертвований/платежей:
  - Карта MIR: `2204320436318077`
  - MasterCard: `5395452209474530`
  - PayPal: `vasiljevdenisx@gmail.com`
  - USDT | ETH (ERC20 | BEP20): `0x6fe140040f6Cdc1E1Ff2136cd1d60C0165809463`
  - USDT | TRX (TRC20): `TEWxXmJxvkAmhshp7E61XJGHB3VyM9hNAb`
  - Bitcoin: `bc1qctntwncsv2yn02x2vgnkrqm00c4h04c0afkgpl`
  - TON: `UQCZ3MiwyYHXftPItMMzJRYRiKHugr16jFMq2nfOQOOoemLy`
  - Bybit ID: `165292278`
