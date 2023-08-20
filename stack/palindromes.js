const { Stack } = require("./stack");

function isPalindrome(word) {
    var s = new Stack();

    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }

    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    }
    else {
        return false;
    }

}

var word1 = "hello";

if (isPalindrome(word1)) {
    console.log(word1 + " is a palindrome.");
}
else {
    console.log(word1 + " is not a palindorme");
}

var word = "racecar";

if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindorme");
}