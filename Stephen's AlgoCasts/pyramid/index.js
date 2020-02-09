// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//iterative solution

function pyramid(n) {
    if (n === 1) { console.log("#") }
    const columns = (n * 2) - 1;
    for (let row = 1, tag = 1; row <= n; row++ , tag += 2) {
        const line = " ".repeat(Math.floor((columns - tag) / 2)) + "#".repeat(tag) + " ".repeat(Math.floor((columns - tag) / 2));
        console.log(line)
    }
}

//recursive solution

// function pyramid(n, row = 1, tag = 1) {
//     const columns = (n * 2) - 1;
//     if (row > n) return;
//     const line = " ".repeat(Math.floor((columns - tag) / 2)) + "#".repeat(tag) + " ".repeat(Math.floor((columns - tag) / 2));
//     console.log(line);
//     pyramid(n, row + 1, tag + 2);
// }

module.exports = pyramid;
