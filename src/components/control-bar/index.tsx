import React, { FC, useRef } from 'react'
import { Options } from '../../types/option-type'
import {
  IconCode,
  IconCodepen,
  IconCodesandbox,
  IconCopy,
  IconJsfiddle,
} from '../../icons'
import copy from 'copy-to-clipboard'

import './index.css'
import { Codepen } from '../outlink/codepen'
import { TransformReturnValue } from '../../types'
import { Jsfiddle } from '../outlink/jsfiddle'
import { Codesandbox } from '../outlink/codesandbox'

interface ControlBarProps extends TransformReturnValue {
  options: Options
  code: string
  codeVisible: boolean
  onToggleCode: (visible: boolean) => void
}

const ControlBar: FC<ControlBarProps> = ({
  options,
  code,
  onToggleCode,
  codeVisible,
  html,
  css,
  js,
  type,
  libs,
  originJs,
}) => {
  const {
    layout,
    showCodepenLink,
    showCodesandboxLink,
    showJsfiddleLink,
    showToggleButton,
    showCopyCodeButton,
  } = options
  const outlinkHandler = useRef({
    codepen: null,
    codesandbox: null,
    jsfiddle: null,
  })

  if (
    !showToggleButton &&
    !showCopyCodeButton &&
    !showCodepenLink &&
    !showJsfiddleLink &&
    !showCodesandboxLink
  ) {
    return <></>
  }

  return (
    <div className={`dpdb__control-bar dpdb__control-bar-${layout}`}>
      {showToggleButton && options.showCode && (
        <div
          className="dpdb__tip"
          data-tip={`${codeVisible ? 'hide' : 'show'} code`}
          onClick={() => {
            onToggleCode(!codeVisible)
          }}
        >
          <IconCode />
        </div>
      )}
      {showCopyCodeButton && (
        <div
          className="dpdb__tip"
          data-tip="copy code"
          onClick={() => {
            copy(code)
          }}
        >
          <IconCopy />
        </div>
      )}
      {showCodepenLink && (
        <div
          className="dpdb__tip"
          data-tip="open in codepen"
          onClick={() => {
            outlinkHandler.current.codepen()
          }}
        >
          <IconCodepen />
        </div>
      )}
      {showJsfiddleLink && (
        <div
          className="dpdb__tip"
          data-tip="open in jsfiddle"
          onClick={() => {
            outlinkHandler.current.jsfiddle()
          }}
        >
          <IconJsfiddle />
        </div>
      )}
      {/* {showCodesandboxLink && (
        <div
          className="dpdb__tip"
          data-tip="open in codesandbox"
          onClick={() => {
            outlinkHandler.current.codesandbox()
          }}
        >
          <IconCodesandbox />
        </div>
      )} */}
      <Codepen
        html={html}
        css={css}
        js={js}
        type={type}
        options={options}
        libs={libs}
        originJs={originJs}
        bindSubmit={(cb) => {
          outlinkHandler.current.codepen = cb
        }}
      />
      <Jsfiddle
        html={html}
        css={css}
        js={js}
        type={type}
        options={options}
        libs={libs}
        originJs={originJs}
        bindSubmit={(cb) => {
          outlinkHandler.current.jsfiddle = cb
        }}
      />
      <Codesandbox
        html={html}
        css={css}
        js={js}
        type={type}
        options={options}
        libs={libs}
        originJs={originJs}
        bindSubmit={(cb) => {
          outlinkHandler.current.codesandbox = cb
        }}
      />
    </div>
  )
}

export { ControlBar }
