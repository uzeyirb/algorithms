//Insertion - O(1)
//Removal- O(1)
//Searching O(N)
// Access O(1)

let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}



// Big O of Object Methods
//Object.keys- O(N)
//Object.values- O(N)
//Object.entries- O(N)
//hasOwnProperty- O(1)
console.log(Object.keys(instructor));
console.log(Object.entries(instructor));
console.log(instructor.hasOwnProperty("firstName"));