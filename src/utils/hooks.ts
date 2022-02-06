import { useCallback, useRef } from 'react'

function useDebounceFn<CallbackArgs extends unknown[]>(
  callback: (...args: CallbackArgs) => void,
  wait = 300
) {
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  return useCallback((...currArgs: CallbackArgs) => {
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      timeout.current = null
      // eslint-disable-next-line node/no-callback-literal
      callback(...currArgs)
    }, wait)
  }, [])
}

export { useDebounceFn }
