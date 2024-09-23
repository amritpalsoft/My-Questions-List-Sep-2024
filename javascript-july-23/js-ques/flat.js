let arr = [1, 4, 3, 2, [55, 44, 9], 0, -1, [88, [9, 0, [9]]], 97, 55, [9, 1]];

console.log(arr.flat());

// let arr = [1, 3, 2, 4, [4, 3, 4, [9, 7], 3], 9, 0, [8]];

const flatten = (arr) => {
  let newArr = [];
  arr.map((element) => {
    if (typeof element === "object") {
      newArr.push(...element);
    } else {
      newArr.push(element);
    }
  });
  return newArr;
};

console.log(arr.flat(4));

// console.log(flatten(arr));

const arrFlat = (arr) => {
  let newArr = []
  if (Array.isArray(arr)) {
    arr.map(item => {
      if (Array.isArray(item)) {
        newArr.push(...arrFlat(item))
      } else {
        newArr.push(item)
      }
    })
    return newArr
  } else {
    return 'Please pass an array to flatten'
  }
}


console.log(arrFlat(arr), 'flatten')