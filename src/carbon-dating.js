const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string')
  {
    let temp = parseFloat(sampleActivity);
    if (temp > 0) {
      let a = MODERN_ACTIVITY / temp;
      let b = 0.693 / HALF_LIFE_PERIOD;
      let loge = Math.log(a);
      let result = Math.ceil(loge / b);
      if (result > 0) {
        return result;
      }
      else {
        return false;
      }
    }    
  }
  return false;
  // remove line with error and write your code here
};