const { hours } = require('../data/zoo_data');

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayError = 'The day must be valid. Example: Monday';

const isStringRepresentNumber = (string, what) => {
  if (!/^\d+$/.test(string)) {
    throw new Error(`The ${what} should represent a number`);
  }
};

const validateAbbreviation = (abbreviation) => {
  if (!['AM', 'PM'].includes(abbreviation)) {
    throw new Error('The abbreviation must be \'AM\' or \'PM\'');
  }
};

const validateHour = (hour) => {
  const [number, abbreviation] = hour.toUpperCase().split('-');
  const [dataHours, dataMinutes] = number.split(':');
  isStringRepresentNumber(dataHours, 'hour');
  isStringRepresentNumber(dataMinutes, 'minutes');
  validateAbbreviation(abbreviation);
  switch (false) {
  case Number(dataHours) >= 0 && Number(dataHours) <= 12:
    throw new Error('The hour must be between 0 and 12');
  case Number(dataMinutes) >= 0 && Number(dataMinutes) <= 59:
    throw new Error('The minutes must be between 0 and 59');
  default:
    return null;
  }
};

const validateDay = (day) => {
  if (!weekDays.includes(day)) {
    throw new Error(dayError);
  }
};

const empty = (one, two) => !one && !two;

const fix12 = (hour, open, close) => ({
  h: (hour === 12) ? 0 : hour,
  o: (open === 12) ? 0 : open,
  c: (close === 12) ? 0 : close,
});

const openOrClosed = (period, hour, open, close) => {
  const { o, c, h } = fix12(hour, open, close);
  // console.log(`FIX 12 o = ${o} c = ${c} h = ${h}`);
  // console.log(fix12);
  return (period === 'AM' && h >= o) || (period === 'PM' && h < c);
};

const getOpeningHours = (day, dataHour) => {
  if (empty(day, dataHour)) return hours;
  const adjustedDay = `${day[0].toUpperCase()}${day.slice(1).toLowerCase()}`;
   // console.log(adjustedDay);
  validateDay(adjustedDay);
  validateHour(dataHour);
  const { open, close } = hours[adjustedDay];
  if (empty(close, open)) {
    // console.log("entrei nesse if empty");
    return 'The zoo is closed';
  }
  const period = dataHour.split('-')[1].toUpperCase();
  const hour = Number(dataHour.split(':')[0]);
  let message = 'The zoo is ';
  //   console.log(period, hour, open, close);
  //   console.log(typeof openOrClosed(period, hour, open, close));
  message += openOrClosed(period, hour, open, close) ? 'open' : 'closed';
  return message;
};
// let avalia = openOrClosed('PM', 12, 12, 12);
// console.log(avalia);
// avalia = openOrClosed('AM', 12, 12, 12);
// console.log(avalia);
// console.log(getOpeningHours('Saturday', '9:00-AM'));

module.exports = getOpeningHours;
// module.exports = openOrClosed;
