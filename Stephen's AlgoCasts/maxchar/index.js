// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charObj = {};
    // put every letter into the object
    for (const char of str) {
        charObj[char] ? charObj[char]++ : charObj[char] = 1;
    }
    const charArr = Object.entries(charObj);
    charArr.sort((a, b) => b[1] - a[1]);
    return charArr[0][0];
}

module.exports = maxChar;
