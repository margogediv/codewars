// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//  Return your answer as a number.

function sumMix(x) {
    const numbers = x.map(item => Number(item));
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumMix([3, '7', 15, 20]));