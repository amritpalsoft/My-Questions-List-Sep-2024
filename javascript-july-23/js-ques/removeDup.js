let arr = [2, 4, 2, 3, 5, 4, 3, 2, 5, 6, 4];

const removeDup = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    if (newArr.includes(element)) {
      return;
    } else {
      newArr.push(element);
    }
  });
  return newArr;
};

console.log(removeDup(arr));
