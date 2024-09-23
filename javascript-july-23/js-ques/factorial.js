function factorial(num = 5) {
  if (num === 1) {
    return 1;
  } else if (num > 0) {
    if (Number.isInteger(num)) {
      return num * factorial(num - 1);
    } else {
      return "Enter an integer only";
    }
  } else {
    return "Enter a valid number";
  }
}

console.log(factorial(3));
