let arr = [14, 3, [3, 114, [9, 898], 5], 6, 55, 4];

let max = -Infinity;

/// 1st Method
// arr.flat().map((item) => {
//   if (item > max) {
//     max = item;
//   }
// });

// console.log(max);

let arr2 = [10, 0, 9, 6, 22, 44, 0, -1, 199, -2];

// Max in array
// first way

const maxIterate = (arr) => {
  let max = -Infinity;

  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });

  return max;
};

// console.log(maxIterate(arr));

// Second way

const maxApply = (arr) => {
  return Math.max.apply(undefined, arr);
};

console.log(maxApply(arr2));
