let vuePromise: null | Promise<unknown> = null

function getVue(vueLib: string) {
  if (vuePromise) return vuePromise
  vuePromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = vueLib
    script.onload = () => {
      resolve()
    }
    script.onerror = () => {
      vuePromise = null
      reject(Error('load vue failed'))
    }
    document.head.appendChild(script)
  })
  return vuePromise
}

export { getVue }
