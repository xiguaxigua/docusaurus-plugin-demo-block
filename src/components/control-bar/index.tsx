import React, { FC } from 'react'
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

interface ControlBarProps {
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
}) => {
  console.log('options', options)
  const {
    layout,
    showCodepenLink,
    showCodesandboxLink,
    showJsfiddleLink,
    showToggleButton,
    showCopyCodeButton,
  } = options

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
      {showToggleButton && (
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
        <div className="dpdb__tip" data-tip="open in codepen">
          <IconCodepen />
        </div>
      )}
      {showJsfiddleLink && (
        <div className="dpdb__tip" data-tip="open in jsfiddle">
          <IconJsfiddle />
        </div>
      )}
      {showCodesandboxLink && (
        <div className="dpdb__tip" data-tip="open in codesandbox">
          <IconCodesandbox />
        </div>
      )}
    </div>
  )
}

export { ControlBar }
