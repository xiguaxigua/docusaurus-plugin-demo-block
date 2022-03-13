import path from 'path'
import webpack from 'webpack'
import { readDefaultCodeTranslationMessages } from '@docusaurus/theme-translations'
import { Options } from './types/option-type'
import type { DocusaurusContext, Plugin } from '@docusaurus/types'

export default function demoBlock(
  context: DocusaurusContext,
  options: Options
): Plugin {
  const {
    i18n: { currentLocale },
  } = context

  return {
    name: 'docusaurus-plugin-demo-block',

    getThemePath() {
      return path.resolve(__dirname, './theme')
    },

    async contentLoaded({ actions }) {
      const { setGlobalData } = actions
      setGlobalData(options)
    },

    getDefaultCodeTranslationMessages() {
      return readDefaultCodeTranslationMessages({
        locale: currentLocale,
        name: 'plugin-demo-block',
      })
    },
  }
}
