import React, { useEffect, useRef, memo, FC, useState } from 'react'
import { Options } from '../../types/option-type'
import { sleep } from '../../utils/sleep'

import './index.css'

interface RunnerCompProps {
  html: string
  css: string
  js: string
  scope: Record<string, unknown>
  isDarkTheme: boolean
  options: Options
}

const RunnerComp: FC<RunnerCompProps> = ({
  html,
  css,
  js,
  scope,
  isDarkTheme,
  options,
}) => {
  const iframe = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(1)
  const [iframeVisible, setIframeVisible] = useState(false)

  useEffect(() => {
    if (!html && !css && !js) return
    ;(async () => {
      setIframeVisible(false)
      await sleep(0)
      setIframeVisible(true)
      const { contentDocument, contentWindow } = iframe.current
      if (scope) {
        Object.keys(scope).forEach((key) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(contentWindow as any)[key] = scope[key]
        })
      }
      const style = contentDocument.createElement('style')
      style.innerHTML = `
        * { margin: 0; padding: 0; } html { padding: 20px; }
        ${css}
      `
      contentDocument.head.appendChild(style)
      contentDocument.body.innerHTML = html

      contentDocument.querySelector('html').dataset.theme = isDarkTheme
        ? 'dark'
        : 'light'

      contentDocument.body.style.color = isDarkTheme
        ? 'rgb(245, 246, 247)'
        : 'rgb(28, 30, 33)'
      js = `
      try {
        ${js}
      } catch (e) {
        document.body.innerHTML = '<pre style="color: red">' + e + '</pre>'
      }
      `
      if (options.showVConsole) {
        const vconsoleScript = contentDocument.createElement('script')
        vconsoleScript.src =
          'https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js'
        vconsoleScript.onload = () => {
          const script = contentDocument.createElement('script')
          script.innerHTML = `var vConsole = new window.VConsole();${js}`
          contentDocument.body.appendChild(script)
        }
        contentDocument.head.appendChild(vconsoleScript)
      } else {
        const script = contentDocument.createElement('script')
        script.innerHTML = js
        contentDocument.body.appendChild(script)
      }

      setHeight(contentDocument.body.scrollHeight)
    })()
  }, [html, css, js, scope, isDarkTheme])

  return (
    <>
      {iframeVisible && (
        <iframe height={height} className="dpdb__runner" ref={iframe} />
      )}
    </>
  )
}

const Runner = memo(RunnerComp)

export { Runner }
