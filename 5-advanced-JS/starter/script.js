///////////////////////////////////////
// Lecture: First Class Functions : Passing Functions as Arguments

// A function is an instance of the Object type
// A function behaves like any other object
// We can store functions in a variable;
// We can pass a function as an argument to another function
// We can return a function from a function

var years = [1990, 1953, 1993, 2017, 2003];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return el >= 19;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }    
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var hearRates = arrayCalc(ages, maxHeartRate);
console.log(hearRates);


///////////////////////////////////////
// Lecture: Primitives vs Objects
/*
// primitives
var a = 23;
var b = a;
a = 34;
console.log(a, b);
var obj1 = {
    name:'John',
    age: 49
}

// objects
var obj2 = obj1;
obj1.age = 29;
console.log(obj1, obj2);

// functions
var age = 84;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}
change(age, obj);
console.log(age, obj);
*/


///////////////////////////////////////
// Lecture: Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});

var simple = {
    name: "one simple way",
    dream: ['designer', 'professor'],
    personMarried: {
        name: 'jane',
        age: 29
    }
}

// function constructor => the object created always has the __prototype__ property
// pointed to constructor's prototype object (function.prototype)
// there is no freedom to not include function.prototype
// and always constructor logic runs when the object is created

// Object.create(prototype) => there is way not to include prototype object. just Object.create(null)!
// there is no constructor logic! 
// just pick the prototype object to be your __prototype__ property and pass it as the argument

*/



///////////////////////////////////////
// Lecture: Prototype chain
/*
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
*/



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