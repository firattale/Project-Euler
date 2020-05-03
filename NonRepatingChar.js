// # Implement your function below.
function nonRepeating(str) {
    const arr = str.split("");
    const result = null;
    const count = {};
    // create count object with the repeating count
    for (const item of arr) {
        !count[item] ? count[item] = 1 : count[item]++;
    }
    // find the item with only 1 repeat
    for (const item of arr) {
        if (count[item] === 1) return item;
    }
    return result;
}

// NOTE: The following input values will be used for testing your solution.
nonRepeating("abcab") // should return 'c'
nonRepeating("abab") // should return None
nonRepeating("aabbbc") // should return 'c'
nonRepeating("aabbdbc") // should return 'd'