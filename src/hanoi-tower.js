module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let countTurns = Math.pow(2, disksNumber) - 1;
    return { turns:countTurns, seconds:countTurns / (turnsSpeed / 3600) };
    // remove line with error and write your code here
}