// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const path = require('path')
const scope = require('./scope')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'docusaurus-plugin-demo-block',
  tagline: 'Enhance the functionality of code blocks',
  url: 'https://xiguaxigua.com',
  baseUrl: '/docusaurus-plugin-demo-block/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xiguaxigua', // Usually your GitHub org/user name.
  projectName: 'docusaurus-plugin-demo-block', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'G-5SZDYFXNML',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    [
      path.resolve(__dirname, './lib/index.js'),
      /** @type {import('./lib/option-type').Options} */
      ({}),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'docusaurus-plugin-demo-block',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/xiguaxigua/docusaurus-plugin-demo-block',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} . Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
