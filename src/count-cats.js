module.exports = function countCats(matrix) {
  matrix = matrix || [];
  let countCat = 0;
  if(matrix.length != 0) {    
    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === "^^") {
          countCat ++;
        }
      }
    }    
  }
  return countCat;
};