//Definition of a list abstract data type ADT
//List is an ordered sequence of data

const fs = require('fs');
const {List} = require('./list.js')
const {Customer} = require('./customer.js')

function createArr(file) {
      
    if (typeof file !== 'string') {
        console.log('Invalid type of file: ', typeof file);
        return [];
    }
    return file.split('\n');
}

function readMovies() {
    try {
        const data = fs.readFileSync('films.txt', 'utf8');
        return createArr(data);
    } catch (err) {
        console.log('An error occurred: ', err);
        return [];
    }
};

const movies = readMovies();

var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

function displayList(list) {
    for (list.front(); list.hasNext();){
        var listItem = list.next();
        if (listItem instanceof Customer) {
            console.log(listItem.name + ", " + listItem.movie);
        } else {
            console.log(listItem);
        }
    }
}

function checkOut(name, movie, movieList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        movieList.remove(movie);
    }
    else {
        console.log(movie + " is not available");
    }
}


var customers = new List();

for (var i = 0; i < movies.length; ++i){
    movieList.append(movies[i])
}



for (var i = 0; i < movies.length; ++i){
    movieList.append(movies[i]);
}

print("Available movies: \n");
