let array = [0, 2, 34, 4, 7, 88.225, 76, 54, 5, 6, 7, 8, 3, 1];

function EvenEle(array) {
  return array.filter((item) => item % 2 === 0);
  ;
}
console.log(EvenEle(array));
