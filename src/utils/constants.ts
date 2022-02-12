import { Options } from '../types/option-type'

const DEFAULT_OPTIONS: Options = {
  babel: true,
  iframe: true,
  scope: {},
  showCodeByDefault: true,
  live: true,
  layout: 'row',
  showCode: true,
  libGlobalName: {},
  showJsfiddleLink: true,
  showCodepenLink: true,
  showCodesandboxLink: true,
  showCopyCodeButton: true,
  showVConsole: false,
  showToggleButton: true,
  vueLib: 'https://cdn.jsdelivr.net/npm/vue@3.2.30/dist/vue.global.prod.js',
  reactLib:
    'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js',
  reactDOMLib:
    'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js',
}

export { DEFAULT_OPTIONS }
