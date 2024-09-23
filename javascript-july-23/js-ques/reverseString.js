let str = "My name is amrit pal";


// function reverseEachWord(string) {
//   return string.split(' ').map(i => {
//     return i.split('').reverse().join('')
//   }).join(' ')

// }


function reverseWithoutInbuilt(input) {
  let str = ''
  input.split(' ').forEach(element => {
    for (let i = element.length - 1; i >= 0; i--) {
      str += element[i]
    }
  });

  return str
}

console.log(reverseWithoutInbuilt(str));
