import React, { FC, useEffect, useRef } from 'react'
import { OutlinkProps } from './type'
import { getParameters } from 'codesandbox/lib/api/define'

const Codesandbox: FC<OutlinkProps> = ({
  html,
  css,
  originJs,
  bindSubmit,
  type,
  options,
}) => {
  const el = useRef<HTMLButtonElement>(null)

  const jsLib = options.libSilenceImport?.js || []
  const cssLib = options.libSilenceImport?.css || []

  html += jsLib.map((url) => `<script src="${url}"></script>\n`).join('')
  html += cssLib
    .map((url) => `<link href="${url}" real="stylesheet"></link>\n`)
    .join('')

  const dependencies: Record<string, string> = {}
  let js = originJs

  js = `
import "./index.css";

${js}  
  `.trim()

  if (type === 'react') {
    dependencies.react = 'latest'
    dependencies['react-dom'] = 'latest'
    js = `
import React from 'react';
import ReactDOM from 'react-dom';
${js}
    `.trim()
  } else if (type === 'vue') {
    dependencies.vue = '3.2.30'
    js = `
import * as Vue from 'vue';
${js}
    `.trim()
  }

  const parameters = getParameters({
    files: {
      'package.json': {
        content: JSON.stringify(
          {
            dependencies,
          },
          null,
          2
        ),
        isBinary: false,
      },
      'index.js': {
        content: js,
        isBinary: false,
      },
      'index.html': {
        content: html,
        isBinary: false,
      },
      'index.css': {
        content: css,
        isBinary: false,
      },
    },
  })

  useEffect(() => {
    if (el.current) {
      bindSubmit(() => {
        el.current.click()
      })
    }
  }, [])

  return (
    <form
      action="https://codesandbox.io/api/v1/sandboxes/define"
      target="_blank"
      method="post"
    >
      <input type="hidden" name="parameters" value={parameters} />
      <button ref={el} type="submit" style={{ display: 'none' }}></button>
    </form>
  )
}

export { Codesandbox }
