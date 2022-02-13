import React, { useEffect, useRef, memo, FC, useState } from 'react'
import { genId } from '../../utils/id'
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
  const runner = useRef<HTMLIFrameElement | HTMLDivElement>(null)
  const [height, setHeight] = useState(1)
  const [runnerVisible, setRunnerVisible] = useState(false)
  const id = useRef(genId())

  const setIframeRunner = () => {
    const { contentDocument, contentWindow } =
      runner.current as HTMLIFrameElement
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
      console.error(e)
    }
    `

    const script = contentDocument.createElement('script')
    script.innerHTML = js
    contentDocument.body.appendChild(script)

    setHeight(contentDocument.body.scrollHeight)
  }

  const setDivRunner = () => {
    if (scope) {
      Object.keys(scope).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!(window as any)[key]) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(window as any)[key] = scope[key]
        }
      })
    }

    const style = document.createElement('style')
    style.innerHTML = css
    document.head.appendChild(style)

    runner.current.innerHTML = html

    js = `
    try {
      ${js}
    } catch (e) {
      document.getElementById('${id.current}').innerHTML = '<pre style="color: red">' + e + '</pre>'
      console.error(e)
    }
    `

    const script = document.createElement('script')
    script.innerHTML = js
    document.head.appendChild(script)
  }

  useEffect(() => {
    if (!html && !css && !js) return
    ;(async () => {
      setRunnerVisible(false)
      await sleep(0)
      setRunnerVisible(true)
      if (options.iframe) {
        setIframeRunner()
      } else {
        setDivRunner()
      }
    })()
  }, [html, css, js, scope, isDarkTheme])

  return (
    <>
      {runnerVisible &&
        (options.iframe ? (
          <iframe
            height={height}
            className="dpdb__runner"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={runner as any}
          />
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <div
            id={id.current}
            style={{ padding: 20 }}
            className="dpdb__runner"
            ref={runner as any}
          />
        ))}
    </>
  )
}

const Runner = memo(RunnerComp)

export { Runner }
