import type babel from '@babel/standalone'
import { CodeType, TransformReturnValue } from '../types'
import { Options } from '../types/option-type'

const BABEL_PRESETS = ['env', 'react']

async function getCodeFromVanilla(code: string): Promise<TransformReturnValue> {
  const Babel = await getBabel()
  const html = getTagContent(code, 'template')
  const css = getTagContent(code, 'style')
  const js = getTagContent(code, 'script')

  const transformedScript = Babel.transform(js, {
    presets: BABEL_PRESETS,
  }).code

  return { html, css, js: transformedScript, originJs: js, type: 'vanilla' }
}

async function getCodeFromVue(code: string): Promise<TransformReturnValue> {
  const template = getTagContent(code, 'template')
  const css = getTagContent(code, 'style')
  const js = getTagContent(code, 'script')

  const Babel = await getBabel()
  const transformedScript = Babel.transform(js, {
    presets: ['env'],
  }).code

  const runtimeJs = `
    var CONTAINER = document.getElementById('app');
    ${transformedScript};
  `

  const originJs = `
    const CONTAINER = document.getElementById('app');
${js}
  `.trim()

  return {
    html: `<div id="app">${template}</div>`,
    css,
    js: runtimeJs,
    originJs,
    type: 'vue',
  }
}

async function getCodeFromReact(code: string): Promise<TransformReturnValue> {
  const Babel = await getBabel()
  const transformedScript = Babel.transform(code, {
    presets: BABEL_PRESETS,
  }).code

  const js = `
    var CONTAINER = document.getElementById('app');
    ${transformedScript}
  `

  const originJs = `
    const CONTAINER = document.getElementById('app');
${code.trim()}
  `.trim()

  return { html: `<div id="app"></div>`, css: '', js, originJs, type: 'react' }
}

function getTagContent(code: string, tag: string) {
  const matchResult = code.match(
    new RegExp(`<${tag}>([\\s\\S]+)</${tag}>`, 'gim')
  )
  let result = ''
  if (matchResult) {
    result = matchResult[0].replace(`<${tag}>`, '').replace(`</${tag}>`, '')
  }
  return result
}

let babelPromise: Promise<typeof babel> = null
function getBabel() {
  if (babelPromise) return babelPromise
  babelPromise = import('@babel/standalone').catch((err) => {
    babelPromise = null
    throw err
  })
  return babelPromise
}

function getType(metastring: string) {
  return metastring.split(' ')[0] as CodeType
}

function getLocalOptions(metastring: string) {
  const localConfigStr = metastring.split(' ')[1]
  if (!localConfigStr) return {}
  return localConfigStr
    .split('&')
    .reduce<Record<string, unknown>>((acc, curr) => {
      const [key, value] = curr.split('=')
      // eslint-disable-next-line no-new-func
      acc[key] = new Function(`return ${value}`)()
      return acc
    }, {}) as Options
}

export {
  getCodeFromVanilla,
  getCodeFromVue,
  getCodeFromReact,
  getType,
  getLocalOptions,
}
