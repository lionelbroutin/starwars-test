export const showDate = (date: string): string => {
  return new Date(date).toLocaleDateString("fr");
};

export const multipleStringsToArr = (str: string): string[] => {
  return str.split(",");
};
