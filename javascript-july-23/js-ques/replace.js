let str = "my name is amrit pal";

// replace even characters of a word with * symbol

str = str.split(' ').map(i => {
  return i.split('').map((j, index) => {
    if (index % 2 === 0) {
      return j.replace(j, '*')
    } else {
      return j
    }
  }).join('')
}).join(' ')

console.log(str);


// 2 sum

let arr = [1, 2, 4, 2, 5, 6, 7, 4, 9, 1, 3]
let result = []
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 5) {
      result.push([arr[i], arr[j]])
    }
  }
}

let obj = {}
let resp = []
result.forEach(element => {
  if (obj[element.sort((a, b) => a - b).join('')]) {
    obj[element.sort((a, b) => a - b).join('')]++
  } else {
    resp.push(element)
    obj[element.sort((a, b) => a - b).join('')] = 1
  }
});

console.log(resp);
