/****************************
 * Coding challenge 1
 */
/*
var heightMark = prompt("type in the heights of Mark in meters.");
var massMark = prompt("type in the mass of Mark in Kgs.");

var heightJohn = prompt("type in the heights of John in meters.");
var massJohn = prompt("type in the mass of John in Kgs.");

var bmiMark = heightMark / (massMark * massMark);
var bmiJohn = heightJohn / (massJohn * massJohn);

var bmiMarkBigger = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's? " + bmiMarkBigger);
*/

/****************************
 * Operator precedence
 */
/*
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// multiple assignment
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// more operators
x = x * 2;
x *= 2;
x += 3;
x++;
++x;
console.log(x);
*/

/****************************
 * Basic operators
 */
/*
var now, ageJohn, ageMark;
now = 2019;
// math operators
ageJohn = now - 29;
ageMark = now - 34;
console.log(ageJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);
console.log(now % 2);

// logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof now);
var x;
console.log(typeof x);
*/

/****************************
 * Variable mutationand type coercion
 */
/*
var firstName = 'John';
var age = 29;

// type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' +
job + '. Is he married? ' + isMarried);

// variable mutation
age = 'twenty nine';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' +
job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' +lastName);
*/

/****************************
 * Variables and data types
 */
/*
var firstName = 'john';
console.log(firstName);

var lastName = 'smith';
var age = 29;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
console.log(typeof job);
job = 'Teacher';
console.log(job);
console.log(typeof job);
*/
