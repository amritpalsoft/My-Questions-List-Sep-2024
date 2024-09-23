let arr = [{ name: 'amrit', roll: 20, isExist: true }, { name: 'amrit', roll: 50, isExist: false }, { name: 'saurabh', roll: 220, isExist: false }, { name: 'amit', roll: 2, isExist: true }, { name: 'zebra', roll: 24, isExist: false }]


// console.log(arr.sort((a, b) => a.name > b.name ? 1 : (a.name < b.name ? -1 : 0)));

// console.log(arr.sort((a, b) => a.roll > b.roll ? 1 : (a.roll < b.roll ? -1 : 0)));


// console.log(arr.sort((a, b) => a.isExist > b.isExist ? -1 : (a.isExist < b.isExist ? 1 : 0)));


// console.log(arr.filter(item => !item.isExist && item.roll > 100));


// console.log(arr.find(item => item.isExist && item.roll));


// let obj = {}

// arr.forEach(item => {
//     if (obj[item.name]) {
//         obj[item.name] = [...obj[item.name], item]
//     } else {
//         obj[item.name] = [item]

//     }
// })

// console.log(obj);

let myObj = { name: 'amrit', roll: 20, isExist: undefined }

// for (const key in myObj) {
//     if (key) {
//         console.log(key, myObj[key]);
//     }
// }

// for (const iterator of Object.entries(myObj)) {
//     const [key, values] = iterator
//     console.log(key, values);
// }

// console.log();


// let str = 'amrit pal'

// function fun(str) {
//     return str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
// }

// console.log(fun(str));



let str = '     aaaamrit pal   '

let str2 = 'amrit Pal'

// function capitalise(str) {
//     return str.split(' ').map((item, index) => index === 0 ? item.slice(0, 1).toUpperCase() + item.slice(1) : item).join(' ')
// }



// console.log(capitalise(str));


// const checkPrime = (num) => {
//     if (typeof num !== 'number') {
//         return 'please enter a valid number'
//     }
//     if (num < 0) {
//         return 'please enter a positive number'
//     }
//     if (num === 0) {
//         return 'not prime'
//     }

//     if (num === 1) {
//         return 'prime'
//     }

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return 'not prime'
//         } else {
//             return 'prime'
//         }
//     }

// }

// console.log(checkPrime(771));

// const factorial = (num) => {
//     if (typeof num !== "number") {
//         return 'please enter a valid number'
//     }
//     if (num < 0) {
//         return 'please eneter a positive number'
//     }
//     if (num === 0 || num === 1) {
//         return 1
//     }
//     return num * factorial(num - 1)
// }

// console.log(factorial(5));

// const fib = (num) => {
//     function fibo(num) {
//         if (typeof num !== "number") {
//             return 'please enter a valide number'
//         } else if (num <= 1) {
//             return num
//         } else {
//             return fibo(num - 1) + fibo(num - 2)
//         }
//     }
//     let result = []
//     for (let i = 0; i < num; i++) {
//         result.push(fibo(i))
//     }

//     return result
// }

// console.log(fib(10));

// let sum = [1, 7, 2, 3, 4, 6, 5, 5, 2, 2, 1, 6, 5, 3, 0]
// let arr2 = []
// const checkSum = (arr, total) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr.length; j++) {
//             for (let k = 1; k < arr.length; k++) {
//                 if (arr[i] + arr[j] + arr[k] === total) {
//                     if (arr2.includes([arr[i], arr[j], arr[k]])) {
//                         //
//                     } else {

//                         arr2.push([arr[i], arr[j], arr[k]])
//                     }
//                 }
//             }
//         }
//     }
// }

// checkSum(sum, 5)
// console.log(arr2);


// let aarr = [1, 2, 3, 4, 5, 7, 2, 1, 3, 3, 4, 1, 23, 4]

// const removeDup = (arr) => {
//     let obj = {}
//     arr = arr.map(i => {
//         if (obj[i]) {

//         } else {
//             obj[i] = 1
//             return i
//         }
//     })
//     return arr.filter(i => i !== undefined)


// }

// console.log(removeDup(aarr));

// let objArr = [{ name: 'amrit' }, { name: 'amrit pal' }, { name: 'amrit' }]

// let obj = {}
// let newObj = objArr.filter((i) => {
//     if (obj[i.name]) {
//         obj[i.name] += 1
//     } else {
//         obj[i.name] = 1
//         return i
//     }
// }).filter(i => i !== undefined)

// console.log(newObj);

// let miss = [1, 2, 3, 5, 6, 7, 8]

// const missnumber = (arr) => {
//     let num = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//             num = arr[i] + 1
//         }
//     }

//     return num
// }

// console.log(missnumber(miss));

// let arrArr = [[1, 2], [3, 2], [2, 1], [4, 2], [2, 3]]

// const removedup = (arr) => {
//     let dupArr = []
//     arr = arr.map((item) => {
//         if (dupArr.includes(item.sort().join(''))) {
//             return
//         } else {
//             dupArr.push(item.sort().join(''))
//             return item
//         }
//     }).filter(item => item != undefined)
//     return arr
// }

// console.log(removedup(arrArr));

// let newArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 35, 3, 22, 3, 4, 53, 1, 2, 3, 4, 233, 4, 5, 32, 1, 22, 22]


// const removeDupArr = (arr) => {
//     let obj = {}
//     arr = arr.map(item => {
//         if (obj[item]) {
//             obj[item] += 1
//             return
//         } else {
//             obj[item] = 1
//             return item
//         }
//     }).filter(i => i != undefined)
//     return { arr, obj }
// }

// let { arr2, obj } = removeDupArr(newArr)

// console.log(arr2, obj);

// let arrObj = [{ name: 'amrit', roll: 1 }, { name: 'amrit', roll: 1 }, { name: 'amrit', roll: 3 }]

// function removeDupArr(arr) {
//     let obj = {}
//     arr = arr.map((item) => {
//         if (obj[item.roll]) {
//             return
//         } else {
//             obj[item.roll] = 1
//             return item
//         }
//     }).filter(i => i != undefined)
//     return arr
// }

// console.log(removeDupArr(arrObj));

// let arrObj = [{ name: 'amrit', roll: 3 }, { name: 'new amrit', roll: 44 }, { name: 'amrit', roll: 43 }]

// console.log(arrObj.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0));



// let arrObj = [{ name: 'new amrit', roll: 20 }, { name: 'amrit', roll: 30 }, { name: 'amrit pal', roll: 20 }, { name: 'amrit', roll: 30 }]




// const removeDup = (arr) => {
//     let obj = {}

//     arr = arr.map(item => {
//         if (obj[JSON.stringify(item)]) {
//             return
//         } else {
//             obj[JSON.stringify(item)] = 1
//             return item
//         }
//     }).filter(i => i != undefined)
//     return arr
// }


// console.log(removeDup(arrObj));

console.log('amrit'.includes('ri'));
console.log('amritA'.replace(/A/ig, 'b'));
console.log(/[a-zA-Z0-9]/.test('popo'));




// const strin = "The quick brown fox jumps over the lazy dog.";
// const regex = /quick/;

// // Using .test()
// if (regex.test(strin)) {
//   console.log("The string contains 'quick'.");
// }

// // Using .match()
// const matches = strin.match(regex);
// if (matches) {
//   console.log("Matches found:", matches);
// }


// const sort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr.length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let trmp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = trmp
//             }
//         }
//     }
//     return arr
// }

// console.log(sort([1, 2, 3, 4, 2, 1, 2, 4, 2, 1, 2]));


// let reverse = [1, 2, 3, 4, 5, 6]

// const reverseArr = (arr) => {
//     let newArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// console.log(reverseArr(reverse));


// const largest = (arr) => {
//     let largest = -Infinity

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     return largest
// }

// console.log(largest([1, 4, 3, 1, 5, 33, 4, 1]))

// const removeDuplica = (arr) => {
//     let obj = {}
//     arr = arr.map((item) => {
//         if (obj[item]) {
//             return
//         } else {
//             obj[item] = 1
//             return item
//         }
//     }).filter(i => i != undefined)
//     return arr
// }

// console.log(removeDuplica([1, 2, 3, 4, 34, 2, 1, 3, 4, 6]));

// const givenSum = (arr, sum) => {
//     let sumArr = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === sum) {
//                 sumArr.push([arr[i], arr[j]])
//             }
//         }
//     }
//     let obj = {}
//     return sumArr.map(i => {
//         if (obj[i.sort().join('')]) {
//             return
//         } else {
//             obj[i.sort().join('')] = 1
//             return i
//         }
//     }).filter(i => i != undefined)
// }

// console.log(givenSum([1, 3, 4, 2, 1, 5, 7, 4, 3, 7, 8, 5, 4, 3, 5, 4, 3, 52, 2], 6));

// const palindrome = (str) => {
//     return str.replace(/[^a-zA-Z0-9]/, '').toLowerCase().split('').reverse().join('') === str.replace(/[^a-zA-Z0-9]/, '').toLowerCase()
// }

// console.log(palindrome('ama'));

// const countVowel = (str) => {
//     let count = 0
//     let obj = {}
//     str.toLowerCase().split('').map(i => {
//         if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//             if (obj[i]) {

//             } else {
//                 obj[i] = 1
//                 count++
//             }
//         } else {

//         }
//     })
//     return count
// }

// console.log(countVowel('amrit pal'))


// function longestWord(str) {
//     // Your code here
//     let longest = ''

//     for (let i = 0; i < str.split(' ').length; i++) {
//         if (str.split(' ')[i].length > longest.length) {
//             longest = str.split(' ')[i]
//         }
//     }
//     return longest

// }

// console.log(longestWord('amrit pal software engineer'));

// function capitalizeWords(str) {
//     // Your code here
//     str = str.split(' ').map(i => {
//         return i.slice(0, 1).toUpperCase() + i.slice(1)
//     })

//     return str.join(' ')
// }
// console.log(capitalizeWords("hello world")); // Output: "Hello World"


// function removeDuplicates(str) {
//     // Your code here
//     let obj = {}
//     return str.split('').map((i) => {
//         if (obj[i]) {
//             return
//         } else {
//             obj[i] = 1
//             return i

//         }
//     }).filter(i => i != undefined).join('')
// }
// console.log(removeDuplicates("hello")); // Output: "helo"
// console.log(removeDuplicates("aabbcc")); // Output: "abc"


function firstNonRepeatingChar(str) {
    // Your code here
    let obj = {}
    let char = ''
    str.split('').map(i => {
        if (obj[i]) {
            if (obj[i] === char) {

                char = ''
            } else {
                // char = obj[i]
            }
            return
        } else {
            char = i
            obj[i] = i
        }
    })
    return char
}
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("aabbwccq")); // Output: ""
