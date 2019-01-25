///////////////////////////////////////
// Lecture: Hoisting
/*
// functions
calculateAge(1990);

function calculateAge(year){
    console.log(2019 - year);
}

// retirement(1990); // retirement is not a function here
var retirement = function(year){
    console.log(65 - (2019 - year));
}

// variables
console.log(age);
var age = 23;   // variable age is in execution context object
console.log(age);

function foo(){
    console.log(age);
    var age = 65;   // variable age is in foo function execution context object
    console.log(age);
}
foo();
console.log(age);
*/



///////////////////////////////////////
// Execution context object => variable object + scope chain + this variable
// variable object (VO) => argument object + function pointer property + variable property
///////////////////////////////////////


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

// In the creation phase, each execution context object
// will get exact scope chain, which is basically all the
// variable objects that an execution context has access to,
// because, remember the variable object is what stores
// all the defined variables and functions.
// For example, in the second scope, we have access to the
// variable object of the second function, of the first function,
// and to global variable object
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


var d = 'one';
third();

function third(){
    var e = 'two';
    fourth();

    function fourth(){
        var f = 'three';
        //d = 'k';      // indicate the variable d in the global execution context
        var d = 'k';    // new variable available only in the function execution context
        console.log(d + e + f);
    }
}

console.log(d);
*/


/*
// Example to show the differece between execution stack and scope chain
// the execution stack is in the order in which functions are called,
// but the scope chain is the orer in which functions are written
// in the code.

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

// this third function declaration only knows variable a and d
// this function is written in the global scope
// therefore only knows object variables in global scope and itself.
// It's execution contexts that store the scope chain
// of each function in the variable object,
// but they do not have an effect on the scope chain itself.
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

*/


///////////////////////////////////////
// Lecture: The this keyword


// 1. 'this' in regular function call :
// the this keyword points at the global object (the window object, in the browser).
// 2. 'this' in method call :
// the this variable points to the object that is calling the method
// 3. 'this' keyword is not assigned a value until a function
// where it is defined is actually called.
// this makes sense because 'this' keyword is attached to an
// execution context oject, which is only created as soon as
// the function is invoked.


//console.log(this);  // this -> the window object (the default object and wrapper of global scope)

// calculateAge(1990); // 'this' in regular function call -> the window object
// what is the object that calls this function? the global object (the window object)

// function calculateAge(year){
//     console.log(2019-year);
//     console.log(this);
// }

/*
var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        
        // function innerFunction() {  // this is not a method like calculateAge
        //     console.log(this);;     // this is a function declaration
        // }
        // innerFunction();            // and this is a regular function call
                                  // thus logging the window object!
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Method borrowing (function expression copy)
mike.calculateAge = john.calculateAge;
mike.calculateAge();    // 'this' keyword only becomes something
                        // as soon as the method gets called
*/

/*
// method scope?
var a = 'hello';

var john = {
    b: 'hi',
    calculateAge: function() {
        console.log(a + this.b);    // this is very different behavior than C#
                                    // in C#, only the properties and variables declared in the class
                                    // can be reached by the class method
    },
}

john.calculateAge();
*/