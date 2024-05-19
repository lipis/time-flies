const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const leadingZero = (n: number) => {
  return n < 10 ? `0${n}` : n;
};

export const formatUTCDate = (date: Date) => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  return `${MONTHS[month]} ${day}, ${year}`;
};

export const formatLocalDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${MONTHS[month]} ${day}, ${year}`;
};

export const formatUTCTime = (date: Date) => {
  return `${leadingZero(date.getUTCHours())}:${leadingZero(
    date.getUTCMinutes()
  )}`;
};

export const formatLocalTime = (date: Date) => {
  return `${leadingZero(date.getHours())}:${leadingZero(date.getMinutes())}`;
};
