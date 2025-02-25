// Complete the function which returns the weekday according to the input number:
//
// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

// 1
const whatdayData = [
    {id: 1, day: "Sunday"},
    {id: 2, day: "Monday"},
    {id: 3, day: "Tuesday"},
    {id: 4, day: "Wednesday"},
    {id: 5, day: "Thursday"},
    {id: 6, day: "Friday"},
    {id: 7, day: "Saturday"},
]

const whatday1 = (num) => {
    const result = whatdayData.find(el => el.id === num);
    return result ? result.day : 'Wrong, please enter a number between 1 and 7';
}
console.log(whatday1(3));

// 2
const whatday2 = (num) => {
    const daysOfWeek = [
        "Sunday",    // 1
        "Monday",    // 2
        "Tuesday",   // 3
        "Wednesday", // 4
        "Thursday",  // 5
        "Friday",    // 6
        "Saturday"   // 7
    ];

    return (num >= 1 && num <= 7) ? daysOfWeek[num - 1] : 'Wrong, please enter a number between 1 and 7';
}

console.log(whatday2(3));  // "Tuesday"
console.log(whatday2(10)); // "Wrong, please enter a number between 1 and 7"
