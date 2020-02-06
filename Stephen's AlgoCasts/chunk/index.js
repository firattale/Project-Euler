// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
function chunk(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        if (i + size < array.length) {
            const slicedArr = array.slice(i, i + size);
            result.push(slicedArr);
        } else {
            const slicedArr = array.slice(i, array.length);
            result.push(slicedArr);
        }
    }
    return result;
}

// // Solution 2
// function chunk(array, size) {
//     const result = [];
//     for (const el of array) {
//         const last = result[result.length - 1];
//         if (!last || last.length === size) {
//             result.push([el]);
//         } else {
//             last.push(el);
//         }
//     }
//     return result;
// }

module.exports = chunk;
