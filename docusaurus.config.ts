import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '3DP-MANAGER',
  tagline: 'Inbound generator for 3x-ui',
  favicon: 'img/favicon.png',
  future: {
    v4: true,
  },
  url: 'https://3dp-manager.com',
  baseUrl: '/',
  organizationName: 'denpiligrim',
  projectName: '3dp-manager',
  onBrokenLinks: 'throw',
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: '3DP-MANAGER',
        url: 'https://3dp-manager.com/',
        logo: 'https://3dp-manager.com/img/logo.png',
      }),
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/denpiligrim/3dp-docs/blob/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/denpiligrim/3dp-docs/blob/main',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/3dpmanager-social-card.png',
    metadata: [
      {name: 'keywords', content: '3dpmanager, xray, 3x-ui, vless, vmess, shadowsocks, trojan, vpn'},
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '3DP-MANAGER',
      logo: {
        alt: '3DP-MANAGER Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/denpiligrim/3dp-manager',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Contributing',
              to: '/docs/contributing',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/denpiligrim_web',
            },
            {
              label: 'YouTube',
              href: 'https://t.me/denpiligrim_web',
            },
            {
              label: "Author's website",
              href: 'https://denpiligrim.ru',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/denpiligrim/3dp-manager',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/u/22850947',
            },
          ],
        },
      ],
      logo: {
        alt: '3DP-MANAGER Logo',
        src: 'img/logo.png',
        width: 70,
        height: 70,
      },
      copyright: `Copyright © ${new Date().getFullYear()} 3DP-MANAGER by DenPiligrim.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
