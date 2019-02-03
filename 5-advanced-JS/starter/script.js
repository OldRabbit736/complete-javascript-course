// Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// 'this' keyword in this function below
// points to the Window object (Global context)
// because this function is delcared in the global context
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function() {
    //     console.log(2019 - this.yearOfBirth);
    // }
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

// new ->> brand new empty object is created
// and constraints the 'this' keyword to the newly created empty object
// so, 'this' points to the newly created empty object not the Window object
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1996, 'designer');
var mark = new Person('Mark', 1946, 'retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName, jane.lastName, mark.lastName);


// var x = [3, 4, 9];
// console.info(x);




///////////////////////////////////////
// Lecture: Intro

// Primitives
// Numbers, Strings, Booleans, Undefined, Null

// Objects
// arrays, functions, objects, Dates, Wrappers for Numbers, Strings, Booleans

// Javascript is prototype based language

// Every JS object has a prototype property, which makes
// inheritance possible in JS
// The prototype property of an object is where we put methods
// and properties that we want other objects to inherit
// The Constructor's prototype property is NOT the prototype
// of the Constructor itself, it's the prototype of ALL instances
// that are created through it
// When a certain method (or property) is called,
// the search starts in the object itself,
// and if it cannot be found, the search moves on to the
// object's prototype. This countinues until the method is
// found: prototype chain