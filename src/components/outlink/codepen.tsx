import React, { FC, useEffect, useRef } from 'react'
import { OutlinkProps } from './type'

const Codepen: FC<OutlinkProps> = ({
  html,
  css,
  originJs,
  bindSubmit,
  options,
  type,
}) => {
  const el = useRef<HTMLButtonElement>(null)

  const jsLib = options.libSilenceImport?.js || []
  const cssLib = options.libSilenceImport?.css || []

  if (type === 'react') {
    jsLib.push(options.reactLib)
    jsLib.push(options.reactDOMLib)
  } else if (type === 'vue') {
    jsLib.push(options.vueLib)
  }

  const value = JSON.stringify({
    css,
    html,
    js: originJs,
    js_external: jsLib.join(';'),
    css_external: cssLib.join(';'),
    js_pre_processor: 'babel',
  })

  useEffect(() => {
    if (el.current) {
      bindSubmit(() => {
        el.current.click()
      })
    }
  }, [])

  return (
    <form action="https://codepen.io/pen/define" target="_blank" method="post">
      <input type="hidden" name="data" value={value} />
      <button ref={el} type="submit" style={{ display: 'none' }}></button>
    </form>
  )
}

export { Codepen }
