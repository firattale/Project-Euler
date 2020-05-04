// Implement your function below.
function click(field, numRows, numCols, given_i, given_j) {
    if (field[given_i][given_j] !== 0) return field;
    // create queue for keep positions of 0's and to check their surrounding cells
    const toCheck = [];
    field[given_i][given_j] = -2;
    toCheck.push([given_i, given_j]);

    while (toCheck.length !== 0) {
        const [current_i, current_j] = toCheck.shift();
        // check the surrounding cells
        for (let i = current_i - 1; i <= current_i + 1; i++) {
            for (let j = current_j - 1; j <= current_j + 1; j++) {
                if (0 <= i && i < numRows && 0 <= j && j < numCols && field[i][j] === 0) {
                    field[i][j] = -2;
                    // if there is a 0 in surrounding cells push to queue to check them later
                    toCheck.push([i, j]);
                }
            }
        }
    }
    return field;
}



// NOTE: The following input values will be used for testing your solution.
const field1 = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, -1, 1, 0]
]

click(field1, 3, 5, 2, 2)
// should return:
//    [
//   [0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 0],
//   [0, 1, -1, 1, 0]
//    ]

click(field1, 3, 5, 1, 4)
// should return:
//  [[-2, -2, -2, -2, -2],
//   [-2, 1, 1, 1, -2],
//   [-2, 1, -1, 1, -2]]


const field2 = [
    [-1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, -1]
]

click(field2, 4, 4, 0, 1)
// should return:
//  [[-1, 1, 0, 0],
//  [1, 1, 0, 0],
//  [0, 0, 1, 1],
//  [0, 0, 1, -1]]

click(field2, 4, 4, 1, 3)
// should return:
// [[-1, 1, -2, -2],
//  [1, 1, -2, -2],
//  [-2, -2, 1, 1],
//  [-2, -2, 1, -1]]
