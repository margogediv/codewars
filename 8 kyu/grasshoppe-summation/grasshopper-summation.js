// Summation
// Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
//
// For example (Input -> Output):
//
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const summation = function (num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

const res = summation(2);
console.log(res);

// Метод Гаусса.
// Он заметил, что сумму чисел от 1 до n можно посчитать по формуле:
// sum = n * (n + 1) / 2

const summation2 = function (num) {
    return num * (num + 1) / 2
}

const res2 = summation2(2);
console.log('options2:', res2);