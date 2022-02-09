import type babel from '@babel/standalone'
import { CodeType } from '../types'
import { Options } from '../types/option-type'

async function getCodeFromVanilla(code: string) {
  const html = getTagContent(code, 'template')
  const css = getTagContent(code, 'style')
  const js = getTagContent(code, 'script')
  return { html, css, js }
}

async function getCodeFromVue(code: string) {
  const template = getTagContent(code, 'template')
  const css = getTagContent(code, 'style')
  const js = getTagContent(code, 'script')

  const Babel = await getBabel()
  const transformedScript = Babel.transform(js, {
    presets: [Babel.availablePresets.env],
  }).code

  const runtimeJs = `
    var comp = (function(exports){
      var module={};
      module.exports=exports;
      ${transformedScript};
      return module.exports.__esModule?module.exports.default:module.exports;
    })({});
    Vue.createApp(comp).mount(document.getElementById('app'))
  `

  return { html: `<div id="app">${template}</div>`, css, js: runtimeJs }
}

async function getCodeFromReact(code: string) {
  const Babel = await getBabel()
  const transformedScript = Babel.transform(code, {
    presets: ['es2015', 'react'],
  }).code

  const runtimeJs = `
    var { App, style } = (function(exports){
      var module={};
      module.exports=exports;
      ${transformedScript};
      return module.exports;
    })({});
    document.body.innerHTML += "<style>" + style + "</style>";
    ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
  `

  return { html: `<div id="app"></div>`, css: '', js: runtimeJs }
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
