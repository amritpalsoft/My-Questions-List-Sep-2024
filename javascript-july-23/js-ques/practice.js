let arr = [1, 1, 1, 2, 4, 3, 2, 2, 1, 2, 4, 6, 5, 4, 4, 4, 7, 8, 9, 7, 8, 0];

const check = (arr) => {
  let newArr = [];
  let dupArr = [];
  arr.map((item) => {
    if (newArr.includes(item)) {
      dupArr.push(item);
    } else {
      newArr.push(item);
    }
  });
  return newArr;
};


const removeDup = (arr) => {
  let newArr = []
  let dupArr = []

  arr.forEach(element => {
    if (newArr.includes(element)) {
      if (dupArr.includes(element)) {

      } else {
        dupArr.push(element)

      }
    } else {
      newArr.push(element)
    }
  });
  return { newArr, dupArr };
}
console.log(check(arr));
const { newArr, dupArr } = removeDup(arr);
console.log(newArr, dupArr, 'dup');
