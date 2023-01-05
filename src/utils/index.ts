export const randomUUID = (length = 6) =>
  `${Math.floor(Math.random() * Math.pow(10, length))}`;
export function formatDate(date: Date | string) {
  if (typeof date === "string") date = new Date(date);
  const p = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    // hour12: true
  })
    .formatToParts(date)
    .reduce((acc: Record<string, any>, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});

  // return `${p.month}/${p.day}/${p.year}, ${p.hour}:${p.minute} ${p.dayPeriod}`;
  return `${p.day}/${p.month}/${p.year}, ${p.hour}:${p.minute}`;
}
