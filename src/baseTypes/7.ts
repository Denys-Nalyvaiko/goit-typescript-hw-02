/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wedneday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: Day): boolean => {
  return day === Day.Saturday || day === Day.Sunday;
};

isWeekend(Day.Monday);
isWeekend(Day.Sunday);
