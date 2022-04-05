function dateOfToday() {
  d = new Date(); //When called as a constructor, returns a new Date object.

  nameDay = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  currentNumDay = d.getDay(); //get day by number (2 for tuesday. days number 0-6)
  currentDay = nameDay[currentNumDay];

  currentMonthDay = d.getDate(); //get the number of day of the month 1-31

  nameMonth = [
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

  currentNumMonth = d.getMonth(); //get month by number (0-11)
  currentMonth = nameMonth[currentNumMonth];

  currentYear = d.getFullYear(); //get current year

  console.log(
    `Today is ${currentDay} the ${currentMonthDay} of ${currentMonth}, ${currentYear}`
  );
}

dateOfToday(); //calling function
