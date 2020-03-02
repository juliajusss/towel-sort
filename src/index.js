
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == undefined) {
    return [];
  }
  let myArr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2) {
      myArr = myArr.concat(matrix[i].reverse());
    } else {
      myArr = myArr.concat(matrix[i]);
    }
  }
  return myArr;
}
