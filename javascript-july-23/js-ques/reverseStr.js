let str = "my name is amrit pal";

// it reverses complete string
const reverseStr = (str) => {
  let newStr = "";

  if (typeof str === "string") {
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  } else {
    console.log("Please enter a string");
  }
};

// console.log(reverseStr(str));

const reverseStrWithWordAtSamePlace = (str) => {
  let newArr = str.split(" ");

  let myArr = newArr.map((item) => {
    let newStr = "";
    for (let i = item.length - 1; i >= 0; i--) {
      newStr += item[i];
    }
    return newStr;
  });

  return myArr;
};

// console.log(reverseStrWithWordAtSamePlace(str));
