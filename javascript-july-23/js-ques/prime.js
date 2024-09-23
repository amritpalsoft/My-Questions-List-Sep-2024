const isPrime = (num = 0) => {
  if (typeof num !== "number") {
    return "Please enter a valid number";
  } else if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (i % 2 === 0) {
        return false;
      }
    }
  }
  return true;
};

const prime = (num) => {
  if (typeof num === "number") {
    if (Number.isInteger(num)) {
      if (num === 0) {
        return 'Not prime'
      }
      if (num === 1) {
        return 'Prime'
      }
      if (num === 2) {
        return 'Prime'
      }
      for (let i = 2; i < Math.sqrt(num); i++) {
        if (i % num === 0) {
          return 'Not prime'
        } else {
          return 'Prime'
        }
      }
    } else {
      return "Please enter an integer only"
    }
  } else {
    return "Please enter a valid number"
  }
}

console.log(isPrime(7778));


console.log(prime(3));