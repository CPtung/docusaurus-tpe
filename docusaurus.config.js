const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ThingsPro',
  tagline: 'Oh. So. Pro',
  url: 'https://tpe-document-demo.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MOXA-ISD', // Usually your GitHub org/user name.
  projectName: 'tpe-website', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      'en': {
        label: 'English',
      },
      'zh': {
        label: '中文-台灣🇹🇼',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: path.resolve(__dirname, './sidebars.json'),
          // Please change this to your repo.
          editUrl: 'https://github.com/CPtung/docusaurus-tpe/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/CPtung/docusaurus-tpe/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            spec: 'openapi/core/index.yaml',
            // This becomes the Download URL in this case
            specUrl: '/openapi/core/index.yaml',
            routePath: '/core-api/',
          },
          {
            spec: 'openapi/cloud/index.yaml',
            // This becomes the Download URL in this case
            specUrl: '/openapi/cloud/index.yaml',
            routePath: '/cloud-api/',
          },
          {
            spec: 'openapi/taghub/index.yaml',
            // This becomes the Download URL in this case
            specUrl: '/openapi/taghub/index.yaml',
            routePath: '/taghub-api/',
          },
          {
            spec: 'openapi/thingspro-agent/swagger.yaml',
            // This becomes the Download URL in this case
            specUrl: '/openapi/thingspro-agent/swagger.yaml',
            routePath: '/agent-api/',
          },
          {
            spec: 'openapi/device/index.yaml',
            // This becomes the Download URL in this case
            specUrl: '/openapi/device/index.yaml',
            routePath: '/device-api/',
          },
        ],
        theme: {
          primaryColor: '#008787',
          redocOptions: { hideDownloadButton: false },
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexPages: false,
        indexBlog: true,
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ThingsPro Edge',
        logo: {
          src: 'img/thingspro2.png',
        },
        items: [
          {to: 'release-notes', label: 'Release Note', position: 'left'},
          {to: 'blog', label: 'Blog', position: 'left'},
          {
            type: 'dropdown',
            label: 'OpenAPI',
            position: 'left',
            items: [
              {
                to: '/core-api/',
                label: 'Core',
              },
              {
                to: '/cloud-api/',
                label: 'Cloud',
              },
              {
                to: '/taghub-api/',
                label: 'TagHub',
              },
              {
                to: '/device-api/',
                label: 'Device',
              },
              {
                to: '/agent-api/',
                label: 'agent-api',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'intro/what-is-TPE',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [],
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'localeDropdown',
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
                label: 'Tutorial',
                to: '/docs/intro/what-is-TPE',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
