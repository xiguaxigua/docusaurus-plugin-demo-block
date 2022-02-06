import React, { useEffect, useRef, memo, FC, useState } from 'react'
import { sleep } from '../../utils/sleep'

import './index.css'

interface RunnerCompProps {
  html: string
  css: string
  js: string
  scope: Record<string, unknown>
  isDarkTheme: boolean
}

const RunnerComp: FC<RunnerCompProps> = ({
  html,
  css,
  js,
  scope,
  isDarkTheme,
}) => {
  const iframe = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(1)
  const [key, setKey] = useState(1)

  useEffect(() => {
    ;(async () => {
      setKey((key) => ++key)
      await sleep(200)
      const { contentDocument, contentWindow } = iframe.current
      if (scope) {
        Object.keys(scope).forEach((key) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(contentWindow as any)[key] = scope[key]
        })
      }
      contentDocument.body.innerHTML = `${html}<style>* { margin: 0; padding: 0; } html { padding: 20px; } ${css}</style>`
      const script = contentDocument.createElement('script')
      script.innerHTML = js
      contentDocument.body.appendChild(script)
      contentDocument.querySelector('html').dataset.theme = isDarkTheme
        ? 'dark'
        : 'light'

      contentDocument.body.style.color = isDarkTheme
        ? 'rgb(245, 246, 247)'
        : 'rgb(28, 30, 33)'
      setHeight(contentDocument.body.scrollHeight)
    })()
  }, [html, css, js, scope, isDarkTheme])

  return (
    <iframe height={height} className="dpdb__runner" key={key} ref={iframe} />
  )
}

const Runner = memo(RunnerComp)

export { Runner }
