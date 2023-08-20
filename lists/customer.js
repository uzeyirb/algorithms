const { List } = require('./list.js');

var customer = new List();

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

module.exports = {
    Customer,
}