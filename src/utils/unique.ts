function unique(arr: string[]) {
  const result: string[] = []
  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item)
    }
  })
  return result
}

export { unique }
