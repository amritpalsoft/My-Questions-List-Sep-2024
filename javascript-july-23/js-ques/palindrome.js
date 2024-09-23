let str = "A man , A plan , a canal,@@ Panama";

const isPalindrome = (str) => {
  if (typeof str !== "string") {
    return "Please provide a string";
  }
  let isPalindrome = false;

  let reversedString = "";

  reversedString = str.split("").reverse().join("");

  if (str === reversedString) {
    isPalindrome = true;
  }

  return isPalindrome;
};

// console.log(isPalindrome(str));

const checkPalindrome = (str) => {
  if (typeof str !== "string") return "Not a string";
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
};

console.log(checkPalindrome(str));
