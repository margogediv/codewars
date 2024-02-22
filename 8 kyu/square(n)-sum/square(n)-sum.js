// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because

function squareSum(numbers){
    const squares = numbers.map(number => number ** 2);
    const sum = squares.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}

let numbers = [0, 3, 4, 5];
console.log(squareSum(numbers)); // 50