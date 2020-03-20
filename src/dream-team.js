module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = [];
    let re = /,/g;
    for (var i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string' && members[i].includes(' ')) {
        arr.push(members[i].trim().substring(0, 1).toUpperCase());
      } else if (typeof members[i] === 'string' && !members[i].includes(' ')) {
        arr.push(members[i].substring(0, 1).toUpperCase());
      }
    }
    return arr.sort().toString().replace(re, "");
  }
  return false;
  }