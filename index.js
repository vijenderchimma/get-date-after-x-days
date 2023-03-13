const ys = require("date-fns/addDays");
function getDate(days) {
  let newDate = ys(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
}
const result = getDate(days);
module.exports = result;
