// Implement your function below.
//  n = rows = columns in the given 2d array
function rotate(arr, n) {
    // deep copy of array
    const rotated = JSON.parse(JSON.stringify(arr));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - 1 - i] = arr[i][j];
        }
    }
    return rotated;
}

//  NOTE: The following input values will be used for testing your solution.
const a1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotate(a1, 3);
//  should return:
//  [[7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]]

const a2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

rotate(a2, 4);
// should return:
//  [[13, 9, 5, 1],
//   [14, 10, 6, 2],
//   [15, 11, 7, 3],
//   [16, 12, 8, 4]]
