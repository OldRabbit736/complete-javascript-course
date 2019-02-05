/////////////////////////////////////////
// Lecture: Arrow functions

const years = [1990, 1967, 2003, 1998];

// ES5
var ages5 = years.map(function(el){
    return 2019 - el;
});
console.log(ages5);

// ES6/ES2015
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);


/////////////////////////////////////////
// Lecture: Strings in ES5/ES2015

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calculateAge(year) {
    return 2019 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName);

// ES6 : Template literal
console.log(`This is ${firstName} ${lastName}. He is ${calculateAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(n.includes('oh'));
console.log(n.includes('p'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));

*/




/////////////////////////////////////////
// Lecture: Blocks and IIFEs

/*
// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
//console.log(a, b);   // ReferenceError a is not defined
console.log(c);

// ES5
(function(){
    var z = 3;
})();

console.log(z);

// in ES5, for data privacy, IIFE is used,
// but in ES6, that is easily accomplished by using blocks and let and const variables inside those.

*/


/////////////////////////////////////////
// Lecture: let and const

/*

// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23; // var -> function scoped
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;  // let -> block scoped
// name6 = 'Jane Miller';
// console.log(name6);


// ES5
function driversLicense5(passedTest) {

    if (passedTest) {
        console.log(firstName); // undefined
        var firstName = 'John';
        var yearOfBirth = 1990;

        // console.log(firstName + ', born in ' + yearOfBirth +
        // ' is now officially allowed to drive a car.');
    }

    console.log(firstName + ', born in ' + yearOfBirth +
        ' is now officially allowed to drive a car.');
}
driversLicense5(true);


// ES6
function driversLicense6(passedTest) {

    //console.log(firstName); // error (not declared)
    // accessing a let or const before it is declared throws Reference Error
    // let and const are actually hoisted but can not be accessed before it's declared -> the temporal dead zone
    let firstName;
    console.log(firstName); // undefined. but it's accessed successfully. not error
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';        

        // console.log(firstName + ', born in ' + yearOfBirth +
        // ' is now officially allowed to drive a car.');
    }

    console.log(firstName + ', born in ' + yearOfBirth +
        ' is now officially allowed to drive a car.');
}
driversLicense6(true);



let i = 23;
// overriding i in the global scope
for (let i = 0; i < 5; i++) {
    console.log(i);
    // i in this block is completely different that in the outside
}
console.log(i);


var k = 23;
// k in different blocks but are the same variables
for (var k = 0; k < 5; k++) {
    console.log(k);
}
console.log(k);

*/