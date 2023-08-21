const talkingCalendar = function (date) {
  let year = date.slice(0, 4);
  let day = parseInt(date.slice(8));
  let month = date.slice(5, 7);
  let months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }

  let suffix = "";

  if (day[day.length - 1] === "1" && day !== "11") {
    suffix = "st";
  } else if (day[day.length - 1] === "2" && day !== "12") {
    suffix = "nd";
  } else if (day[day.length - 1] === "3" && day !== "13") {
    suffix = "nd";
  } else {
    suffix = "th"
  }

  return months[parseInt(month)] + " " + day + suffix + ", " + year

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));