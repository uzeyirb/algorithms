const { Stack } = require('./stack')

/**
 * 1. The rightmost digit of n is n%b Push this gigit onto the stack
 * 2. Replace n with n/b
 * 3. Repeat steps 1 and 2 until n = 0 and there are no significant digits remaining.
 * 4. Build the converted number string by popping the stack until the stack is empty
 * 
 * Important: This algo will work only with bases 2 through 9.
 * 
 */

function mulBase(num, base) {
    var s = new Stack();

    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }

    return converted;
}

var num = 32;
var base = 2;

var newNum = mulBase(num, base);

console.log(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);

console.log(num + " converted to base " + base + " is " + newNum);
