// Two to One
// Take 2 strings s1 and s2 including only letters from a to z.Return a new sorted string,
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    const mergedString = s1 + s2;
    const sortedString = mergedString.split('').sort().join('');
    const uniqueChars = new Set(sortedString);
    const result = [...uniqueChars].join('');
    return result;
}

console.log(longest("aretheyhere", "yestheyarehere")); // aehrsty