import React, { FC, useEffect, useRef } from 'react'
import { OutlinkProps } from './type'

const Jsfiddle: FC<OutlinkProps> = ({
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

  const resources = jsLib.concat(cssLib).join(',')

  useEffect(() => {
    if (el.current) {
      bindSubmit(() => {
        el.current.click()
      })
    }
  }, [])

  return (
    <form
      action="https://jsfiddle.net/api/post/library/pure/"
      target="_blank"
      method="post"
    >
      <input type="hidden" name="css" value={css} />
      <input type="hidden" name="html" value={html} />
      <input type="hidden" name="js" value={originJs} />
      <input type="hidden" name="panel_js" value="3" />
      <input type="hidden" name="wrap" value="1" />
      <input type="hidden" name="css" value={css} />
      <input type="hidden" name="resources" value={resources} />
      <button ref={el} type="submit" style={{ display: 'none' }}></button>
    </form>
  )
}

export { Jsfiddle }
