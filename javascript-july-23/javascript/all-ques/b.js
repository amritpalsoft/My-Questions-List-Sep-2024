let arr = [{ name: 'amrit', roll: 20, isExist: true, totalHours: 100 }, { name: 'amrit', roll: 50, isExist: false, totalHours: 200 }, { name: 'saurabh', roll: 220, isExist: false, totalHours: 350 }, { name: 'amit', roll: 2, isExist: true, totalHours: 500 }, { name: 'zebra', roll: 24, isExist: true, totalHours: 160 }]

// let total = arr.reduce((initial, item) => {
//     if (item.isExist) {
//         console.log(item.totalHours, initial);
//         return initial + item.totalHours
//     } else {
//         return 0 + initial
//     }
// }, 0)

// console.log(total);


// function sortArr(arr) {
//     arr = arr.sort((a, b) => a.totalHours > b.totalHours ? -1 : b.totalHours > a.totalHours ? 1 : 0)
//     return arr
// }

// console.log(sortArr(arr));


// function removeDup(arr) {
//     let obj = {}
//     arr = arr.map(i => {
//         if (obj[i.name]) {
//             return
//         } else {
//             obj[i.name] = 1
//             return i
//         }
//     }).filter(i => i != undefined)
//     return arr
// }


// console.log(removeDup(arr));

// function groupItems(arr) {
//     let obj = {}
//     let newArr = []
//     obj['totalGreaterThan200'] = []
//     obj['lessThan200'] = []
//     arr.forEach(element => {
//         if (element.totalHours > 200) {
//             obj['totalGreaterThan200'] = [...obj['totalGreaterThan200'], element]
//         } else {
//             obj['lessThan200'] = [...obj['lessThan200'], element]
//         }
//     });
//     return obj
// }

// console.log(groupItems(arr));


// const groupItemOnExist = (arr) => {
//     let obj = {}
//     obj['isExist'] = []
//     obj['nonExist'] = []

//     arr.forEach(element => {
//         if (element.isExist) {
//             obj['isExist'] = [...obj['isExist'], element]
//         } else {
//             obj['nonExist'] = [...obj['nonExist'], element]
//         }
//     });
//     return obj
// }

// console.log(groupItemOnExist(arr));



// function calculateTotalofExist(arr) {
//     let obj = {}
//     obj['isExistTotal'] = 0
//     obj['notExistTotal'] = 0

//     arr.forEach(element => {
//         if (element.isExist) {
//             obj['isExistTotal'] = obj['isExistTotal'] + element.totalHours
//         } else {
//             obj['notExistTotal'] = obj['notExistTotal'] + element.totalHours
//         }
//     });
//     return obj

// }

// console.log(calculateTotalofExist(arr));


// const findBasedOnParam = (arr, search) => {
//     let result = []
//     arr.forEach(element => {
//         if (element.name.includes(search)) {
//             result.push(element)
//         }
//     });

//     return result
// }

// console.log(findBasedOnParam(arr, 'am'));

// general sort

for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
        if (arr[j].roll > arr[j + 1]?.roll) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp

        }
    }
}

console.log(arr);