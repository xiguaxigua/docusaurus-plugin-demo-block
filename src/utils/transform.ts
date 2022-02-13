import type babel from '@babel/standalone'
import { CodeType, TransformReturnValue } from '../types'
import { Options } from '../types/option-type'
import { genId } from './id'

const BABEL_PRESETS = ['env', 'react']

async function getCodeFromVanilla(
  code: string,
  options: Options
): Promise<TransformReturnValue> {
  let html = ''
  let css = ''
  let js = ''
  let originJs = ''
  let libs: string[] = []
  const containerId = options.iframe ? 'app' : genId()
  try {
    html = getTagContent(code, 'template')
    css = getTagContent(code, 'style')
    originJs = getTagContent(code, 'script')
    const handleImportResult = handleImport(originJs, options)
    originJs = handleImportResult.formattedScript
    libs = handleImportResult.libs
    originJs = `
    var CONTAINER = document.getElementById('${containerId}');
    ${originJs}
    `
    const Babel = await getBabel()
    if (options.babel) {
      js = Babel.transform(originJs, {
        presets: BABEL_PRESETS,
      }).code
    } else {
      js = originJs
    }
  } catch (e) {
    html = `<pre style="color: red">${e}</pre>`
    console.error(e)
  }

  return { html, css, js, originJs, type: 'vanilla', libs }
}

async function getCodeFromVue(
  code: string,
  options: Options
): Promise<TransformReturnValue> {
  let html = ''
  let css = ''
  let js = ''
  let originJs = ''
  let libs: string[] = []
  const containerId = options.iframe ? 'app' : genId()

  try {
    const template = getTagContent(code, 'template')
    css = getTagContent(code, 'style')
    const script = getTagContent(code, 'script')

    const handleImportResult = handleImport(script, options)
    let scriptTemp = handleImportResult.formattedScript
    libs = handleImportResult.libs

    scriptTemp = scriptTemp.replace('export default', 'var App =')
    let scriptResult = ''
    if (options.babel) {
      const Babel = await getBabel()
      scriptResult = Babel.transform(scriptTemp, {
        presets: ['env'],
      }).code
    } else {
      scriptResult = scriptTemp
    }
    const mountScript =
      options.vueVersion === 3
        ? 'Vue.createApp(App).mount(CONTAINER);'
        : 'new (Vue.default || Vue)(App).$mount(CONTAINER);'

    js = `
    var CONTAINER = document.getElementById('${containerId}');
    ${scriptResult}
    ${mountScript}
  `
    originJs = `
    const CONTAINER = document.getElementById('${containerId}');
${scriptTemp}
${mountScript}
  `.trim()
    html = `<div id="${containerId}">${template}</div>`
  } catch (e) {
    html = `<pre style="color: red">${e}</pre>`
    console.error(e)
  }

  return { html, css, js, originJs, type: 'vue', libs }
}

async function getCodeFromReact(
  code: string,
  options: Options
): Promise<TransformReturnValue> {
  let html = ''
  let js = ''
  let originJs = ''
  let libs: string[] = []
  const containerId = options.iframe ? 'app' : genId()

  try {
    let scriptResult = ''

    const handleImportResult = handleImport(code, options)
    scriptResult = handleImportResult.formattedScript
    libs = handleImportResult.libs

    if (options.babel) {
      const Babel = await getBabel()
      scriptResult = Babel.transform(scriptResult, {
        presets: BABEL_PRESETS,
      }).code
    }

    js = `
    var CONTAINER = document.getElementById('${containerId}');
    ${scriptResult}
  `

    originJs = `
    const CONTAINER = document.getElementById('${containerId}');
${code.trim()}
  `.trim()
    html = `<div id="${containerId}"></div>`
  } catch (e) {
    html = `<pre style="color: red">${e}</pre>`
    console.error(e)
  }

  return { html, css: '', js, originJs, type: 'react', libs }
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

function handleImport(script: string, options: Options) {
  const result = {
    origin: script,
    libs: [] as string[],
    formattedScript: script,
  }
  const regexp = /\s*import\s+([\s|\S]+?)\s*from\s+['|"]([\S]+)['|"]/gm
  if (!regexp.test(script)) {
    return result
  }
  const matchResult = script.match(regexp)
  matchResult.forEach((item: string) => {
    result.formattedScript = result.formattedScript.replace(item, '')
    const itemName = item.match(/['|"]([\S]+)['|"]/)[1]
    const { globalName, link } = options.libGlobalName[itemName]

    result.libs.push(link)

    if (item.includes('{')) {
      const insertScript = item
        .replace('import', 'var')
        .replace('from', '=')
        .replace(/['|"]([\S]+)['|"]/, globalName)
      result.formattedScript = `${insertScript}\n${result.formattedScript}`
    }
  })

  return result
}

export {
  getCodeFromVanilla,
  getCodeFromVue,
  getCodeFromReact,
  getType,
  getLocalOptions,
}
