const array = [1, 2, 3, 4, 5, 7, 6, 12, 2, 7, 0, -9];

function checkmax(arr) {
  let min = -Infinity;
  arr.forEach((element) => {
    if (min < element) {
      min = element;
    }
  });
  return min;
}

function checkmin(arr) {
  let max = +Infinity;
  arr.forEach((element) => {
    if (max > element) {
      max = element;
    }
  });
  return max;
}


console.log(checkmax(array));

console.log(checkmin(array));
