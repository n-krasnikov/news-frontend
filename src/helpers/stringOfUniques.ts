export const stringOfUniques = (value: string) => {
  return value
    .split(',')
    .reduce((acc: string[], item: string) => {
      const trimmedTag = item.trim();
      if (acc.includes(trimmedTag) || trimmedTag.length === 0) return acc;
      return [...acc, trimmedTag]
    }, [])
    .join()
}