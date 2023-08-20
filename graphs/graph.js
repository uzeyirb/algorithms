//The Data

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];
/*
Given this data we can represent this in two ways Matrix or Adjacency list  Matrix takes 
up more space but is generally easier to visualize and represent beacuse it has two-dimentional array
filled with ones and zeros see example below
*/
// Matrix
/*
// a b c d e
// a 1 1 - - -
// b - - 1 - -
// c - - - 1 -
// d - 1 1 - -
//--------------


//Adjacency List
// a -> { b c }
// b -> { a }
// c -> { a d }
// d -> { c }


/*
Now looking at matrix I see that  there are not very many routes relative to
the number of possible combinations between these airports that means our matix would be 
very sparse in another wors will take alot of zeros and take up a lot of unnecessary space
it is going to be less efficient to itirate throug and searh through therefore I choose to
represent my graph as an adjanceny list

We can implement adjance list as a set of key value pairs where the key is the name of the 
airport or the node and the value is an array of edges or the other airports that it's
connected to we could implement this with a regular JavaScript object but a better option
might be a map when you're doing algorithm problems in JavaScript a map tends
to be a better option than a regular object it has some additional API mehtods that can be handy.
And behave more like a regular distionary or hash map  you will find in other languages.

 */

// The Graph

const adjacencyList = new Map();

//Add node
// so map is our graph and at this point it's empty the first thing we'll do is define a function that can
// add a node to the map this function takes the airport code as its argument and calls adjanceyList.set
// on the airport and starts it off with an empty array and that's what it takes to represent a node on the
// graph

function addNode(airport) {
  adjacencyList.set(airport, []);
}

// Add edge, undirected
/*
 to add an edge we need to update the entire for both the origin Airport and the destinaiton first we'll 
grab the entry for the origin Airport and then push the desination onto its list and then we'll do the inverse 
of that by getting the destination and then pushing the origin onto its list and that's our entire API for building
a graph as an adjacency list . 
*/
function addEdge(origin, desination) {
  adjacencyList.get(origin).push(desination);
  adjacencyList.get(desination).push(origin);
}
airports.forEach(addNode);
routes.forEach((route) => {
  const [origin, desination] = route;
  addEdge(origin, desination);
});

console.log(adjacencyList);

//Grave traversal
//BFS breadth first search
// function bfs(start) {
//   const visited = new Set();
//   const queue = [start];

//   while (queue.length > 0) {
//     const airports = queue.shift();

//     const destinations = adjacencyList.get(airports);

//     for (const destination of destinations) {
//       if (destination === "BKK") {
//         console.log("BFS found Bangkok");
//       }

//       if (!visited.has(destination)) {
//         visited.add(destination);
//         queue.push(destination);
//       }
//     }
//   }
// }


function bfs(start) {

  const visited = new Set();

  const queue = [start];


  while (queue.length > 0) {

      const airport = queue.shift(); // mutates the queue

      const destinations = adjacencyList.get(airport);


      for (const destination of destinations) {

          if (destination === 'BKK')  {
              console.log(`BFS found Bangkok!`)
          }

          if (!visited.has(destination)) {
              visited.add(destination);
              queue.push(destination);
          }
         
      }

      
  }

}
bfs('PHX')
