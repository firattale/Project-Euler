// Implement your function below.
function isOneAway(s1, s2) {
    if (Math.abs(s1.length - s2.length) > 1) return false;
    if (s1 === s2) return true;
    // one letter change scenario
    if (s1.length === s2.length) {
        for (let i = 0, diff = 0; i < s1.length; i++) {
            if (s1.charAt(i) !== s2.charAt(i)) {
                diff++;
            }
            if (diff > 1) return false;
        }
        return true;
    }
    // delete or add one letter scenario
    for (let i = 0, diff = 0, j = 0; i < s1.length; i++, j++) {
        if (s1.charAt(i) !== s2.charAt(j)) {
            s1.length - s2.length === 1 ? i++ : j++;
            diff++;
            if (s1.charAt(i) !== s2.charAt(j)) return false;
        }
        if (diff > 1) return false;
    }
    return true;
}

// NOTE: The following input values will be used for testing your solution.
isOneAway("a", "a") // should return True
isOneAway("abcdef", "abqdef")  // should return True
isOneAway("abcdef", "abccef")  // should return True
isOneAway("aaa", "abc")  // should return False
isOneAway("abc", "bcc")  // should return False

isOneAway("abcde", "abcd") // should return True
isOneAway("abcdef", "abcde")  // should return True
isOneAway("abcde", "abc")  // should return False

isOneAway("abc", "abcde")  // should return False
isOneAway("abde", "abcde") // should return True
