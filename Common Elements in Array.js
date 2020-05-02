// Find the common elements in two array

const commonEl = (arr1, arr2) => {
    const obj = {}
    const result = [];
    for (const el of arr1) {
        obj[el] = true;
    }
    for (const el of arr2) {
        obj[el] && result.push(el);
    }
    return result;
}
const listA1 = [1, 3, 4, 6, 7, 9]
const listA2 = [1, 2, 4, 5, 9, 10] // should return [1, 4, 9]

const listB1 = [1, 2, 9, 10, 11, 12]
const listB2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15] // should return [1, 2, 9, 10, 12]

const listC1 = [0, 1, 2, 3, 4, 5]
const listC2 = [6, 7, 8, 9, 10, 11] // should return [] (an empty list).

commonEl(listA1, listA2)
commonEl(listB2, listB2)
commonEl(listC1, listC2)