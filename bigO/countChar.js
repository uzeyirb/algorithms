// Write a function which takes in a string and returns counts of each character in the string
// Coming up with examples can help you understand the problem better
// -Start with simple examples
//charCount("aaaa"); // {a: 4}
//charCount2("Hello"); // {h:1, e: 1, l:2, o:1}

// -progress to more complex examples
//charCount("my phone number is 1243095"); // count numbers spaces uppercase or lower case?
// -explore examples with empty inputs
//charCount(""); // what shall we return if it is empty
// -explore examples with invalid inputs

//we will break it down

// function countChar(str) {
//   //do something
//   //return an object with keys that are lowercase
// }

function countChar(str) {
  //make object to return at end
  var result = {};
  //loop over string for each char
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
    //if the char is a number/letter is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++;
      }
    //if the char is a number/letter is not in object, add it to the object and set value to 1
        else {
            result[char] = 1;
    }
    //if char is something else (space, period etc) ignore it
  }

  //return object at end
    return result;
}

console.log(countChar("HelloPPPOOO"));