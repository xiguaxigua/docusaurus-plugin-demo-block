export type Options = {
  /**
   * whether to use babel by default [default: true]
   * this is useful if your code is vanilla or vue and your code is es5, if set
   * to false, big babel standalone modules will not be loaded
   */
  babel?: boolean
  /**
   * whether to use iframe to render code [default: true]
   * if use iframe, the rendering containers are isolated, they do not affect
   * each other
   */
  iframe?: boolean
  /**
   * the scope variable declaration [default: { Vue, React, ReactDOM, [...ReactHooks] }]
   */
  scope?: Record<string, unknown>
  /**
   * whether to show jsfiddle in control bar [default: false]
   */
  showJsfiddleLink?: boolean
  /**
   * whether to show codepen in control bar [default: false]
   */
  showCodepenLink?: boolean
  /**
   * whether to show codesandbox in control bar [default: false]
   */
  showCodesandboxLink?: boolean
  /**
   * whether to show the interactive code editor [default: true]
   * if set to false, the code section will only readable
   */
  live?: boolean
  /**
   * the layout of code and renderer [default: row]
   * display:
   *   - row:  [ code | render ]
   *   - row-reverse:  [ renderer | code ]
   *   - column:  [ render ]
   *              [  code  ]
   *   - column-reverse:  [  code  ]
   *                      [ render ]
   */
  layout?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  /**
   * whether show code section by default [default: true]
   * if you only want show renderer of code, set it to true
   */
  showCode?: boolean
  /**
   * whether to show toggle button in control bar [default: false]
   */
  showToggleButton?: boolean
  /**
   * whether to show copy code button in control bar [default: false]
   */
  showCopyCodeButton?: boolean
  /**
   * whether to show code by default [default: false]
   */
  showCodeByDefault?: boolean
  /**
   * declare global variables corresponding to the base library [default: {}]
   * if you want to import not all or default module, such as:
   *   import { bar, baz } from 'foo'
   * write config as following:
   *   libGlobalName: { 'foo': { globalName: 'foo', link: 'https://foo.js' } }
   * and it will be convert to:
   *   const { bar, baz } = window.foo
   */
  libGlobalName?: Record<string, { globalName: string; link: string }>
  /**
   * the lib which you want to import in codepen / jsfiddle and don't want to
   * display in code section
   */
  libSilenceImport?: { js?: string[]; css?: string[] }
}
