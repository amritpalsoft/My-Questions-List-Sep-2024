let str = "my name is amrit pal";

// let newarr = str.split(" ").map((item) => {
//   return item.slice(0, 1).toUpperCase() + item.slice(1);
// });

// console.log(newarr.join(" "));

function capitalise(str) {
  let arr = str.split(" ");

  arr = arr.map((item, index) => {
    return item.slice(0, 1).toUpperCase() + item.slice(1);
  });

  return arr.join(" ");
}

console.log(capitalise(str));
