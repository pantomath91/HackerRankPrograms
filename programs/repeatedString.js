// Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
// Given an integer, n, find and print the number of letter a's in the first  letters of Lilah's infinite string.
// For example, if the string s = 'abcac' and n = 10, the substring we consider is abcacabcac, the first  characters of her infinite string.There are 4 occurrences of a in the substring.

// Complete the repeatedString function below.
function repeatedString(s, n) {
    let newStr = ""
    if (s === 'a') {
        return n
    }
    while (newStr.length <= n) {
        newStr = newStr + s;
    }
    return newStr.substring(0, n).split("a").length - 1;
}

console.log(repeatedString('a', 1000000000000))


// My soluttions failed for some of the test cases although it passed for first 8 test cases.
// I need to do the google and i found below solutions which worked for all the test cases
// function repeatedString(s, n) {
//     let c = 0,
//         ca = 0,
//         r = n % s.length

//     for (let i = s.length; i-- > 0;) {
//         if (s.charAt(i) == 'a') {
//             ++c

//             if (i < r)
//                 ++ca
//         }
//     }

//     return ((n - r) / s.length * c) + ca
// }