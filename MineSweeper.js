// # Implement your function below.

function mineSweeper(bombs, numRows, numCols) {
    const mineSweeperArr = [];
    // create board with zeros
    for (let index = 0; index < numRows; index++) {
        mineSweeperArr.push(Array(numCols).fill(0))
    }
    // put bombs into the board
    for (const bomb of bombs) {
        let row = bomb[0]
        let col = bomb[1]
        mineSweeperArr[row][col] = -1;
        console.log('row,col', row,col)
        for (let i = row - 1; i < row + 1 ; i++) {
            for (let j = col - 1; j < col + 1; j++) {
                if (i >= 0 && i < numRows && j >= 0 && j < numCols && mineSweeperArr[i][j] !== -1) {
                    mineSweeperArr[i][j]++;
                }
            }
        }
    }
    return mineSweeperArr
}

// # NOTE: The following input values will be used for testing your solution.
mineSweeper([[0, 2], [2, 0]], 3, 3)
// should return:
// # [[0, 1, -1],
// #  [1, 2, 1],
// #  [-1, 1, 0]]

mineSweeper([[0, 0], [0, 1], [1, 2]], 3, 4)
//  should return:
// # [[-1, -1, 2, 1],
// #  [2, 3, -1, 1],
// #  [0, 1, 1, 1]]

mineSweeper([[1, 1], [1, 2], [2, 2], [4, 3]], 5, 5)
//  should return:
// # [[1, 2, 2, 1, 0],
// #  [1, -1, -1, 2, 0],
// #  [1, 3, -1, 2, 0],
// #  [0, 1, 2, 2, 1],
// #  [0, 0, 1, -1, 1]]