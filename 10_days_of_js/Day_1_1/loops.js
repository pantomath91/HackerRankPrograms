'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let consonants = s;
    consonants = consonants.replace(/[aeiou]/gi, '');
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < s.length - 1; i++) {
        if (vowels.indexOf(s[i].toLowerCase()) >= 0) {
            console.log(s[i]);
        }
    }
    consonants.split("").map(e => console.log(e))
}

vowelsAndConsonants('learnjavascriptloopsinhackerrankweekofcode');


// My second test case for above program get failed in hackerrank, below program passes which i find somewhere
// but this is also not too goo
// function vowelsAndConsonants(s) {
//     let vowels = ["a", "e", "i", "o", "u"];

//     for (let v of s) {
//         if (vowels.includes(v))
//             console.log(v);
//     }

//     for (let v of s) {
//         if (!vowels.includes(v))
//             console.log(v);
//     }
// }