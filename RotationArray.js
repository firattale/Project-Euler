// Check if two given arrays are rotations

function isRotation(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let key = arr1[0];
    let key_i = -1;
    // find the first item of array1 in array2
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === key) {
            key_i = i;
            break;
        }
    }
    // first item does not exist
    if (key_i === -1) return false;
    // compare arrayss
    for (let j = 0; j < arr1.length; j++, key_i++) {
        if (key_i >= arr2.length) {
            key_i = 0;
        }
        if (arr1[j] !== arr2[key_i]) {
            return false;
        }
    }
    return true;
}

// # NOTE: The following input values will be used for testing your solution.
const list1 = [1, 2, 3, 4, 5, 6, 7]
const list2a = [4, 5, 6, 7, 8, 1, 2, 3]
// # isRotation(list1, list2a) should return False.

const list2b = [4, 5, 6, 7, 1, 2, 3]
// # isRotation(list1, list2b) should return True.

const list2c = [4, 5, 6, 9, 1, 2, 3]
// # isRotation(list1, list2c) should return False.

const list2d = [4, 6, 5, 7, 1, 2, 3]
// # isRotation(list1, list2d) should return False.

const list2e = [4, 5, 6, 7, 0, 2, 3]
// # isRotation(list1, list2e) should return False.

const list2f = [1, 2, 3, 4, 5, 6, 7]
// # isRotation(list1, list2f) should return True.

const list2g = [7, 1, 2, 3, 4, 5, 6]
// # isRotation(list1, list2g) should return True.
