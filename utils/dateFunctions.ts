import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export const getFormatDistanceToNow = (date: Date) => {
  const fromNow = formatDistanceToNow(date, { addSuffix: true, locale: es });
  return fromNow;
};
