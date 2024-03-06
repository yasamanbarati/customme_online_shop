export function findLastIndex<T>(array: T[], pred: (value: T) => boolean) {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (pred(array[i])) return i
  }

  return -1
}

export function findLast<T>(array: T[], pred: (value: T) => boolean) {
  const lastIndex = findLastIndex(array, pred)
  return lastIndex === -1 ? undefined : array[lastIndex]
}
