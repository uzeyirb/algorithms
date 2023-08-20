const { LList } = require("./linkedList");

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
cities.print();
cities.remove("Carlisle");
cities.display();
cities.print();
cities.dispReverse();