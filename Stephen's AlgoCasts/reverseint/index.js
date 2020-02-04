// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const l = n.toString().split("").reverse().join("");
    debugger;
    return parseInt(l) * Math.sign(n)
}

// function reverseInt(n) {
//     var result = 0;

//     while (n) {
//         result = result * 10 + n % 10;
//         n = parseInt(n / 10);
//     }
//     return result;
// }


module.exports = reverseInt;
