let str = "The quick brown fox jumps over the lazy dog";

const longestWord = (str) => {
  let length = 0;
  let longest = "";
  str.split(" ").map((item) => {
    if (item.length > length) {
      length = item.length;
      longest = item;
    } else {
      return;
    }
  });
  return longest;
};


const longest = (str) => {
  let longest = 0

  str.split(' ').forEach((i) => {
    if (i.length > longest) {
      longest = i.length
      return i
    }
  })
}
console.log(longestWord(str));

console.log(longest(str));
