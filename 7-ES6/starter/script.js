/////////////////////////////////////////
// CODING CHALLENGE 8

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/


class Park {
    constructor(name, buildYear, area, trees) {
        this.name = name;
        this.buildYear = buildYear;
        this.area = area;
        this.trees = trees;
    }

    getDensity() {
        return this.trees / this.area;
    }

    getAge() {
        return new Date().getFullYear() - this.buildYear;
    }
}

class Street {
    constructor(name, buildYear, length, size = 'normal') {
        this.name = name;
        this.buildYear = buildYear;
        this.length = length;
        this.size = size;
    }

    getAge() {
        return new Date().getFullYear() - this.buildYear;
    }
}

// instances of 3 parks
const park1 = new Park('Ellis', 1999, 2600, 900);
const park2 = new Park('Stone', 2002, 4900, 2000);
const park3 = new Park('Deer', 2010, 6400, 3500);

// instances of 4 streets
const street1 = new Street('West', 1977, 80, 'small');
const street2 = new Street('East', 1999, 100);
const street3 = new Street('North', 1889, 120, 'big');
const street4 = new Street('South', 2001, 200, 'huge');

// arrays
const parksArr = [park1, park2, park3];
const streetsArr = [street1, street2, street3, street4];


// reports!
// tree densities of each park
parksArr.forEach(park => console.log(`park ${park.name} has tree density of ${park.getDensity()} ea / m^2`));

// average age of parks
let sumAgePark = 0;
for (let park of parksArr) {
    sumAgePark += park.getAge();
}   // instead, we can use parksArr.reduce()!
let aveAgeParks = sumAgePark / parksArr.length;
console.log(`the average age of parks in town is ${aveAgeParks}.`)

// the name of the park that has more than 1000 trees
const arrTreeParks = parksArr.filter(park => park.trees > 1000);
if (arrTreeParks.length === 0) {
    console.log('there is no park that has more than 1000 trees.');
} else {
    console.log(`the name of the park that has more than 1000 trees: `);
    for (let arr of arrTreeParks) {
        console.log(arr.name);
    }
}

// total and average length of the town's streets
let totalStreetLength = 0;
streetsArr.forEach(street => totalStreetLength += street.length);
let averageLength = totalStreetLength / streetsArr.length;
console.log(`total length of the streets : ${totalStreetLength} m\r average length of the streets : ${averageLength} m`);

// size classification of all streets
streetsArr.forEach(street => console.log(`street ${street.name}\'s size : ${street.size}`));





/////////////////////////////////////////
// Lecture: Classes and subclasses

/*

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

// Athlete5 inheriting Person5 properties
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

// Athlete5.prototype.wonMedal = function() {
//     this.medals++;
//     console.log(this.medals);    
// }

// Athlete5 inheriting Person5 prototype
Athlete5.prototype = Object.create(Person5.prototype);

// warning!!!
// Object.create method make the prototype property of Athlete5 points to the Person5.prototpye
// so, formerly added prototype properties will be lost if have any.
// ex) if the wonMedal method below were created before Object.create,
// the method will be lost as of here

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);    
}

// var john55 = new Athlete5('a', 1999, '3', 22, 111);

// var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 12);
// var john = new Person5('John', 1990, 'teacher');

// var random = Object.create(Person5.prototype);
// var random2 = Object.create(Person5);

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 12);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();




// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    // no comma, no semicolon here
    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }   // => placed in prototype object  
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }   // => placed in the prototype object (Person6.prototype)
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 12);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

*/







/////////////////////////////////////////
// Lecture: Classes

/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');
john5.calculateAge();

// ES6 : class is just syntatic sugar and exactly same as above
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    // no comma, no semicolon here
    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }   // => placed in prototype object

    static greeting() {
        console.log('hi there!');
    }   // => placed not in prototype object. then... where? 
}

var john6 = new Person6('John', 1990, 'teacher');
john6.calculateAge();

Person6.greeting();
// Person6 is acutally function constructor behind scene,
// and all function in javascript is object too.
// so, static function is actually a method attached to the object (function constructor)
// static functions are not inherited to instances (not in the __prototype__)

// Few things to keep in mind!
// 1. class definitions are not hoisted
// so only after class definition has made,
// we can use the class
// 2. we can only add methods to classes but not properties
// that's not a problem at all,
// because inheriting properties through the object instance is not the best practice
// (when method properties are inherited, all instances have the same method and it's waste of memory)

*/






/////////////////////////////////////////
// Lecture: Map

// Map is added to JS as of ES6
// key and value can be any type; key can be String, number, object, etc....
// in Object, there is no key.. there are properties

/*
const question = new Map();
question.set('question', 'What is the official name of the latest major version of Javascript?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct answer!');
question.set(false, 'try again..');

// type in question in the console to see what the map looks like

console.log(question.get('question'));
console.log(question.get('1')); // undefined
console.log(question.get(1));
console.log(question.size);

console.log(question.size);

if (question.has(4)){
    console.log("it has key 4 in it");
}

// question.forEach((key, value) => {
//     console.log(`key: [${key}] has value: [${value}].`);
// });


for (let [key, value] of question.entries()) {  // destructuring here
    //console.log(`key: [${key}] has value: [${value}].`);
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('please enter your answer'));
console.log(question.get(ans === question.get('correct')));

*/





/////////////////////////////////////////
// Lecture: Default parameters


/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;
    // lastName and nationality above are parameters! not property!


    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
*/

/*
// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
// the signature of SmithPerson -> there are question marsk with the defualt parameters
var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1986, 'Diaz', 'spanish');

*/









/////////////////////////////////////////
// Lecture: Rest parameters


/*
// ES5
function isFullAge5() {
    //console.log(arguments);   // this arguments object is not a Array, it's an array-like object.
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log(2019 - cur >= 18);
    });
}

//isFullAge5(1990, 1999, 1994, 2011);

// Array 아닌 인수들을 넣고,
// Array의 함수인 slice를 이용하여 인수들을 array로 만들고
// array 함수인 forEach를 이용하는 과정을 거침



// ES6
function isFullAge6(...years) { // make an array instance named 'years'   this is the rest parameter
    //console.log(years);
    years.forEach(cur => console.log((2019 - cur) >= 18));
}

isFullAge6(1990, 1999, 1994, 2011);


// difference between 'rest operator' and 'spread operator'
// spread operator : used in the function call, argument is an array, and argument is spread into function call
// so, nothing to do with the function declaration.
// rest operator : used in the function declaration, affecting the way of using function.


*/


/*


// ES5
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);

    argsArr.forEach(function(cur) {
        console.log(2019 - cur >= limit);
    });
}

isFullAge5(16, 1990, 1999, 1994, 2011);

// ES6
function isFullAge6(limit, ...years) {  // rest of the parameter is collected into an array named years!
                                        // no matter how many parameters left
    
    years.forEach(cur => console.log((2019 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1994, 2011);


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











/*


// before start : Array.Prototype.slice()

// slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운
// 배열 객체로 반환합니다. 원본 배열은 수정되지 않습니다.

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
console.log(animals.slice(2,4));
// Array의 prototype 함수 중 slice를 이용
// slice는 내부적으로 this를 사용하는데, 당연하게도 이 this는
// slice를 사용하는 array instance다.
// 이 this를 call 함수를 이용하여 다른 this를 받아들이도록 하면
// array instance가 아닌 array-like object도 this로 받아들이도록 할 수 있다.
// search "array-like object" on google
// 즉 array-like object가 array 오브젝트만이 쓸 수 있는 slice 메서드의
// 헤택을 보게 되는 것이다. 일종의 hack 이라고 할 수 있다.
// 공식적으로는 Array.from()을 쓰는것이 낫다.


// slice 메서드를 이용하여 Array와 유사한 객체/컬렉션을 새 Array로 변환 할 수 있다.
function list() {
    return Array.prototype.slice.call(arguments, 1);   // thisArg = arguments
}

var list1 = list(1, 2, 3);  // list1 is array. function 'list' is converter (from array-like object to Array)
console.log(list1);


*/