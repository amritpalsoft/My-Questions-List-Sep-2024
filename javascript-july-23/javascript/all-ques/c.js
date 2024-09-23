function findAllPairs(arr, target) {
    const numMap = new Map();
    const pairs = [];

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        if (numMap.has(complement)) {
            console.log(complement);
            pairs.push([complement, arr[i]]);
        }

        numMap.set(arr[i], i);

    }

    return pairs;
}


// Example usage
const arr = [2, 7, 11, 15, -2, 4, 3, 6];
const target = 9;
const result = findAllPairs(arr, target);

console.log(result); 
