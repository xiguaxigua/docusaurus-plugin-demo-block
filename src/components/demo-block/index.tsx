import React, { useEffect, useState } from 'react'
import {
  getCodeFromVanilla,
  getCodeFromVue,
  getCodeFromReact,
  getType,
  getLocalOptions,
} from '../../utils/transform'
import { Runner } from '../runner'
import { Playground } from '../playground'
import { CodeBlockPropsType, CodeType, TransformReturnValue } from '../../types'
import { DEFAULT_SCOPE } from '../../utils/scope'
import { useDebounceFn } from '../../utils/hooks'
import { usePluginData } from '@docusaurus/useGlobalData'
import { useColorMode } from '@docusaurus/theme-common'
import { Options } from '../../types/option-type'
import { DEFAULT_OPTIONS, VUE_LIB } from '../../utils/constants'
import CodeBlock from '@theme-init/CodeBlock'
import { ControlBar } from '../control-bar'

import './index.css'

const GET_CODE_FUNCTION: Record<
  CodeType,
  (code: string, options: Options) => Promise<TransformReturnValue>
> = {
  vanilla: getCodeFromVanilla,
  vue: getCodeFromVue,
  react: getCodeFromReact,
}

function DemoBlock(props: CodeBlockPropsType) {
  const { children, metastring } = props
  const [code, setCode] = useState(children)
  const [scope, setScope] = useState(null)
  const [runtimeCode, setRuntimeCode] = useState<TransformReturnValue>({
    html: '',
    css: '',
    js: '',
    originJs: '',
    type: 'vanilla',
  })

  const { isDarkTheme } = useColorMode()
  const customOptions: Options = usePluginData('docusaurus-plugin-demo-block')
  const localOptions = getLocalOptions(metastring)

  const vueVersion =
    customOptions.vueVersion ||
    localOptions.vueVersion ||
    DEFAULT_OPTIONS.vueVersion
  const vueLib = VUE_LIB[vueVersion as 2 | 3]

  const options: Options = {
    ...DEFAULT_OPTIONS,
    vueLib,
    ...customOptions,
    ...localOptions,
  }
  const { layout, live, showCode, scope: optionsScope = {} } = options

  const [codeVisible, setCodeVisible] = useState(options.showCodeByDefault)

  const handleCodeChange = useDebounceFn<[string]>((v) => {
    setCode(v)
  })

  useEffect(() => {
    if (code !== children) {
      setCode(children)
    }
  }, [children])

  useEffect(() => {
    ;(async () => {
      const scope = { ...DEFAULT_SCOPE, ...optionsScope }
      setScope(scope)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const runtimeCode = await GET_CODE_FUNCTION[getType(metastring)](
        code,
        options
      )
      setRuntimeCode(runtimeCode)
    })()
  }, [code])

  const direction = layout.split('-')[0]

  const controlBar = (
    <ControlBar
      html={runtimeCode.html}
      css={runtimeCode.css}
      js={runtimeCode.js}
      type={runtimeCode.type}
      originJs={runtimeCode.originJs}
      options={options}
      code={children}
      codeVisible={codeVisible}
      onToggleCode={(visible) => {
        setCodeVisible(visible)
      }}
    />
  )

  return (
    <div className="dpdb">
      <div
        className={`dpdb__container dpdb__container-${layout} dpdb__display-${
          layout.split('-')[0]
        }`}
      >
        {showCode && (
          <div
            className={`dpdb__playground-wrapper ${
              codeVisible ? '' : `dpdb__hidden`
            }`}
          >
            {live ? (
              <Playground
                isDarkTheme={isDarkTheme}
                type={getType(metastring)}
                value={code}
                onChange={(value) => handleCodeChange(value)}
              />
            ) : (
              <CodeBlock {...props} />
            )}
          </div>
        )}
        {direction === 'column' && controlBar}
        <div className="dpdb__runner-wrapper">
          <Runner
            {...runtimeCode}
            isDarkTheme={isDarkTheme}
            scope={scope}
            options={options}
          />
        </div>
      </div>
      {direction === 'row' && controlBar}
    </div>
  )
}

export { DemoBlock }
