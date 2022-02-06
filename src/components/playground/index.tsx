import React, { useRef, useEffect, FC } from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import { CodeType } from '../../types'
import type CodeMirrorType from 'codemirror'
import './index.css'

let CodeMirror: typeof CodeMirrorType = null
if (ExecutionEnvironment.canUseDOM) {
  CodeMirror = require('codemirror')
  require('codemirror/lib/codemirror.css')
  require('codemirror/theme/seti.css')
  require('codemirror/addon/mode/overlay')
  require('codemirror/addon/mode/simple')
  require('codemirror/mode/css/css')
  require('codemirror/mode/htmlmixed/htmlmixed')
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/vue/vue')
  require('codemirror/mode/xml/xml')
  require('codemirror/mode/jsx/jsx')
}

const TYPED_OPTIONS = {
  vanilla: {
    mode: 'htmlmixed',
    htmlMode: true,
  },
  react: {
    mode: 'jsx',
  },
  vue: {
    mode: 'text/x-vue',
  },
}

interface PlaygroundProps {
  value: string
  onChange: (value: string) => void
  type: CodeType
  isDarkTheme: boolean
}

const Playground: FC<PlaygroundProps> = ({
  value,
  onChange,
  type,
  isDarkTheme,
}) => {
  const el = useRef(null)
  const editor = useRef<CodeMirrorType.Editor>(null)

  useEffect(() => {
    if (!CodeMirror) return
    editor.current = CodeMirror(el.current, {
      value,
      lineNumbers: true,
      mode: 'htmlmixed',
      htmlMode: true,
      tabSize: 2,
      ...TYPED_OPTIONS[type],
    } as unknown)
    editor.current.on('change', () => {
      onChange(editor.current.getValue())
    })
  }, [])

  useEffect(() => {
    editor.current.setOption('theme', isDarkTheme ? 'seti' : 'default')
  }, [isDarkTheme])

  return <div className="dpdb__playground" ref={el} />
}

export { Playground }
