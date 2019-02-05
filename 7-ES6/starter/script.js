/////////////////////////////////////////
// Lecture: Rest parameters


/*
// ES5
function isFullAge5() {
    //console.log(arguments);   // this arguments object is not a Array, it's an object.
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log(2019 - curr >= 18);
    });
}

isFullAge5(1990, 1999, 1994);


*/








/////////////////////////////////////////
// Lecture: Spread operator

/*
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}
var sum1 = addFourAges(1, 2, 3, 4);
console.log(sum1);

// ES5
var ages = [1, 2, 3, 4];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);  // spread operator! 3 dots
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');    // nodelist
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');

*/



/////////////////////////////////////////
// Lecture: Arrays

/*

const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');





// 'for ... of' statement => 'foreach' in C# ... subject is anything iterable like String, Array, etc,...
// it's not just for Array !! it can be used on iterable(IEnumerable in C#s) objects or class?


// ES5

// for (var i =0; i <boxesArr5.length; i++) {

//     if(boxesArr5[i].className === 'box blue') {
//         continue;        
//     }

//     boxesArr5[i].textContent = 'I changed to blue!';
// }


// ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}


let iterable = [19, 20, 30];
for (let value of iterable) {   // each elemnet is copied to value variable)
    value += 1;
    console.log(value);
}
console.log(iterable);  // intact as it was...




// using predicates in Array class!!!!!!!!

// ES5
var ages = [12, 17, 9, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6
console.log(ages.findIndex(cur => cur >= 18));  // predicate callback function!
console.log(ages.find(cur => cur >= 18));

*/



/////////////////////////////////////////
// Lecture: Destructuring


/*
// ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];


// ES6
const [name, age] = ['John', 26];   // array destructuring
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};
const {firstName, lastName} = obj;  // object destructuring
console.log(firstName, lastName);


const {firstName: a, lastName: b} = obj;    // destructuring with other names
console.log(a, b);




function calcAgeRetirement(year) {
    const retirementAge = 65;
    const age = new Date().getFullYear() - year;
    return [age, retirementAge - age];   // Tuple? is that you??
}

const [currentAge, yearToComeUntilRetirement] = calcAgeRetirement(1990);
console.log(currentAge, yearToComeUntilRetirement);



*/








/////////////////////////////////////////
// Lecture: Arrow functions : Lexical 'this' keyword

// In javascript every function is an object
// An object is a collection of key:value pairs.
// If a value is a primitive, or another object, the value is considered a property.
// If a value is a function(also an object), it is called a 'method'


/*

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {

        console.log(this.color);    // it's method declaration in a object
                                    // this points to box5 object. so it's working

        var self = this;    // store the pointer to 'box5' object in a variable
                            // and use this in the callback function instead of 'this' keyword
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);

            console.log(this.color);    // it's in regular function's scope (document. blablah...)
                                        // and document has this keyword points to the global object which is the Window
                                        // so, callback function has the same this keyword
                                        // because of the scope chain....
                                        // it's not working (undefined)
        })
    },
}
//box5.clickMe();

// this.position -> window.position , this.color -> window.color whichi is undefined
// only in a method call, 'this' keyword points to that object
// but in a regular function call, 'this' keyword points to the global object
// => in this case of the browser, is the window object

// clickMe in box5 is a method, but
// document.querySelector.addEventListner is a regular function and in global scope (window.document.querySelector....)
// type document in browser console, and you can see 'window' as its parent object

// so in this callback function, 'this' keyword simply points to the window object
// => workaround is needed, like the 'self' variable





// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        // this is inside method, so 'this' keyword points to object 'box6'
        document.querySelector('.green').addEventListener('click',
        () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
            // in arrow function, 'this' keyword shares the "lexical context"
            // so, in other term, it follows scope chain.
            // In results, outer function's scope is also linked to the arrow functions scope.
            // so 'this' keyword in the outer function is shared with the arrow function!
        })
    },
}
//box6.clickMe();
// the arrow function shares the lexical this keyword of its surrounding
// in ES6, the best practice is to acutally always use arrow functions when need to preserve
// the value of the this keyword

var k = 5;

const box66 = {
    color: 'green',
    position: 1,
    _this: this,    // equal to Window object
                    // remember, box66 is actually,,,, Window.box66
    clickMe: () => {
        // in lexical context, 'this' in this arrow function shares(equal)
        // 'this' in box66, which results in the Window object!
        document.querySelector('.green').addEventListener('click',
        () => {

            // inside of arrow function again!
            // so it shares the lexical this keyword of its surrounding,
            // results in the outer arrow function's 'this'
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
            console.log(k);
        })
    },
}
box66.clickMe();
//console.log(box66._this === this);

// 'this' keyword points to the global window object again!! why?
// because, () => {} right next to the 'clickMe' property shares the 'this' keyword of its surrounding
// and that points to the global scope!


*/


/*

// another example


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends51 = function (friends) {

    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
        // this keyword points to the Window object
        // because we are using Array.map function which in Window object! (regular function)
    });

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends51(friends);


Person.prototype.myFriends52 = function (friends) {

    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));  // function with another this is in the callback function place
    // this with the bind method is of course points to the Person object
    console.log(arr);
}

new Person('John').myFriends52(friends);




// ES6
Person.prototype.myFriends6 = function (friends) {

    var arr = friends.map(el =>
        `${this.name} is friends with ${el}`
    );

    console.log(arr);
}

new Person('Marry').myFriends6(friends);


*/









/////////////////////////////////////////
// Lecture: Arrow functions

/*
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
*/


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














// before start : Array.Prototype.slice()

// slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운
// 배열 객체로 반환합니다. 원본 배열은 수정되지 않습니다.

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
console.log(animals.slice(2,4));


// slice 메서드를 이용하여 Array와 유사한 객체/컬렉션을 새 Array로 변환 할 수 있다.
function list() {
    return Array.prototype.slice.call(arguments);   // thisArg = arguments
}

var list1 = list(1, 2, 3);  // list1 is array. function 'list' is converter (from array-like object to Array)
console.log(list1);


