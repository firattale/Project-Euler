// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//iterative solution

// function steps(n) {
//     for (let i = 1, space = n - 1; i <= n; i++ , space--) {
//         const line = "#".repeat(i) + " ".repeat(space);
//         console.log(line)
//     }
// }
//recursive solution

function steps(n, i = 1, space = n - 1) {
    if (i > n) return;
    const line = "#".repeat(i) + " ".repeat(space);
    console.log(line);
    steps(n, i + 1, space - 1);
}

module.exports = steps;

// function printNumber(n) {
//     //base case
//     if (n === 0) {
//         return;
//     }
//     // work
//     console.log(n);
//     // call function with changed args
//     printNumber(n - 1);
// }