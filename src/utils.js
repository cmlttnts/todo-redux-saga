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

  return [
    formatDuration(
      {
        days,
        hours,
        minutes
      },
      { delimiter: "," }
    ),
    diffInMs < 0
  ];
}

function getDivisionAndRemainder(num, divider) {
  const division = num >= 0 ? Math.floor(num / divider) : Math.ceil(num / divider);
  const remainder = num % divider;
  return [division, remainder];
}

export const SORT_OPTIONS = {
  alphabetical: "Alphabetical",
  createdAt: "Creation Time",
  untilDeadline: "Until Deadline"
};

export const DEFAULT_SORT = SORT_OPTIONS.createdAt;

export const SORT_FUNCS = {
  [SORT_OPTIONS.alphabetical]: (todoA, todoB) => {
    return todoA.content[0].toLowerCase().localeCompare(todoB.content[0].toLowerCase());
  },
  [SORT_OPTIONS.createdAt]: (todoA, todoB) => todoA.createdAt - todoB.createdAt,
  [SORT_OPTIONS.untilDeadline]: (todoA, todoB) => {
    if (todoA.isComplete) return 1;
    if (todoB.isComplete) return -1;
    return todoA.deadline - todoB.deadline;
  }
};
