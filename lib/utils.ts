export const leadingZero = (n: number) => {
  return n < 10 ? `0${n}` : n;
};

export const formatUTCDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

export const formatLocalDate = (date: Date) => {
  return `${date.getFullYear()}-${leadingZero(
    date.getMonth() + 1
  )}-${leadingZero(date.getDate())}`;
};

export const formatUTCTime = (date: Date) => {
  return `${leadingZero(date.getUTCHours())}:${leadingZero(
    date.getUTCMinutes()
  )}`;
};

export const formatLocalTime = (date: Date) => {
  return `${leadingZero(date.getHours())}:${leadingZero(date.getMinutes())}`;
};
