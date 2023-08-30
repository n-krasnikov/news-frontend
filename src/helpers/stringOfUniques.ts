export const stringOfUniques = (value: string) => {
  return value
    .split(',')
    .reduce((acc: string[], item: string) => {
      const trimmedTag = item.trim();
      if (!trimmedTag || acc.includes(trimmedTag)) return acc;
      return [...acc, trimmedTag];
    }, [])
    .join();
};
