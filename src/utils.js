import formatDuration from "date-fns/formatDuration";

const MS_TO_SECOND = 1_000;

const MS_TO_MINUTE = 60 * MS_TO_SECOND;

export const MS_TO_HOUR = 60 * MS_TO_MINUTE;

export const MS_TO_DAY = 24 * MS_TO_HOUR;

export function getTimeUntilDeadline(deadline) {
  const diffInMs = deadline - Date.now();

  const [days, daysLeftover] = getDivisionAndRemainder(diffInMs, MS_TO_DAY);
  const [hours, hoursLeftover] = getDivisionAndRemainder(daysLeftover, MS_TO_HOUR);
  const minutes = Math.floor(hoursLeftover / MS_TO_MINUTE);

  return formatDuration(
    {
      days,
      hours,
      minutes
    },
    { delimiter: "," }
  );
}

function getDivisionAndRemainder(num, divider) {
  const division = Math.floor(num / divider);
  const remainder = num % divider;
  return [division, remainder];
}
