// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// option-1
function getGrade (s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3;
    if (90 <= average &&  average <= 100) return 'A'
    if (80 <= average &&  average < 90) return 'B'
    if (70 <= average && average < 80) return 'C'
    if (60 <= average && average < 70) return 'D'
    if (0 <= average && average < 60) return 'F'
}
const result = getGrade(95, 90, 93);
console.log('Результат:', result);

// option-2
function getGrade2(s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3;
    const score = Math.floor(average / 10);

    switch (score) {
        case 10:
        case 9:
            return 'A';
        case 8:
            return 'B';
        case 7:
            return 'C';
        case 6:
            return 'D';
        default:
            return 'F';
    }
}

const result2 = getGrade2(70, 70, 70);
console.log('Результат:', result2);