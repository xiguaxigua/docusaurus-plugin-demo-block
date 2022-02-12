function genId() {
  return (
    'id_' +
    Number(`${Date.now()}${(Math.random() * 1e4).toFixed(0)}`).toString(32)
  )
}

export { genId }
