const findLowestCommonAncestor = (filepaths: string[]) => {
  if (filepaths.length <= 1) return ''
  const [first, ...rest] = filepaths
  let ancestor = first.split('/')
  for (const filepath of rest) {
    const directories = filepath.split('/', ancestor.length)
    let index = 0
    for (const directory of directories) {
      if (directory === ancestor[index]) {
        index += 1
      } else {
        ancestor = ancestor.slice(0, index)
        break
      }
    }
    ancestor = ancestor.slice(0, index)
  }

  return ancestor.length <= 1 && ancestor[0] === ''
    ? '/' + ancestor[0]
    : ancestor.join('/')
}

export default findLowestCommonAncestor