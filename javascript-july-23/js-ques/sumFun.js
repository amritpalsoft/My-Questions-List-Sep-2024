let num1 = "1";
let num2 = 2;

function sum(...param) {
  let mySum = 0
  param.map(i => {
    mySum += +i
  })
  return mySum
  console.log(allParam);

}

console.log(sum(num1, num2));
