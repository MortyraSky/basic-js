module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }
  else if (date.getTime()) {
    let season = '';
    let month = date.getMonth();
    if (month === 0 || month === 1 || month === 11) {
      season = "winter";
    }
    if (month === 2 || month === 3 || month === 4) {
      season = "spring";
    }
    if (month === 5 || month === 6 || month === 7) {
      season = "summer";
    }
    if (month === 8 || month === 9 || month === 10) {
      season = "autumn";
    }
    return season;
  }
};
