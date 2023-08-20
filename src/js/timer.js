function updateClock() {
  const now = new Date();
  let dayName = now.getDay();
  let mo = now.getMonth();
  let dayNumber = now.getDate();
  let year = now.getFullYear();
  let hours = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let period = 'AM';

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours -= 12;
    period = 'PM';
  }

  // дописати

  // Number.prototype.pad = function (number) {
  //   for (let n = this.toString(); n.length < number; n = 0 + n) {
  //     return n;
  //   }
  // };

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Augest',
    'September',
    'October',
    'November',
    'December',
  ];

  const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const ids = [
    'month',
    'dayname',
    'daynum',
    'year',
    'hour',
    'minutes',
    'second',
    'period',
  ];

  const values = [
    week[dayName],
    month[mo],
    dayNumber,
    year,
    hours,
    min,
    sec,
    period,
  ];

  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
}

function start() {
  updateClock();
  setInterval(updateClock, 1000);
}

addEventListener('load', start());
