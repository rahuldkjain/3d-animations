import { MONTHS } from "../constants";

export const formatDate = (date: Date) => {
  const hour = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return {
    year: date.getFullYear(),
    month: MONTHS[date.getMonth()],
    date: date.getDate(),
    hour: `${hour < 10 ? 0 : ""}${hour}`,
    minutes: `${minutes < 10 ? 0 : ""}${minutes}`,
    seconds: `${seconds < 10 ? 0 : ""}${seconds}`,
    period: date.getHours() > 12 ? "pm" : "am",
  };
};
