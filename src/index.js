
module.exports = function towelSort (matrix) {
  let arr = [];
  let countArr = 0;
  if(matrix == undefined) return arr;
  if(matrix.length == 0) return matrix;
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 == 0){
      for(let j = 0; j < matrix[i].length; j++) {
        arr[countArr] = matrix[i][j];
        countArr++;
      }
    }
    else {
      for(let j = matrix[i].length - 1; j >= 0; j--) {
        arr[countArr] = matrix[i][j];
        countArr++;
      }

    }
  }
    
    
    
  
  return arr;
}