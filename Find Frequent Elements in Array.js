// find the frequent elements in array

const mostFrequent = (arr) => {
    const count = {};
    let maxItem = null;
    let maxNum = -1;
    for (const item of arr) {
        if (count[item]) {
            count[item]++;
        } else {
            count[item] = 1;
        }
        if (count[item] > maxNum) {
            maxNum = count[item];
            maxItem = item;
        }
    }

    return maxItem;
}

// # mostFrequent(list1) should return 1
const list1 = [1, 3, 1, 3, 2, 1];
mostFrequent(list1);
// # mostFrequent(list2) should return 3
const list2 = [3, 3, 1, 3, 2, 1];
mostFrequent(list2);
// # mostFrequent(list3) should return None
const list3 = [];
mostFrequent(list3);
// # mostFrequent(list4) should return 0
const list4 = [0];
mostFrequent(list4);
// # mostFrequent(list5) should return -1
const list5 = [0, -1, 10, 10, -1, 10, -1, -1, -1, 1];
mostFrequent(list5);