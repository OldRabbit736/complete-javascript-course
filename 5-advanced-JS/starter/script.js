///////////////////////////////////////
// Coding challenge 7

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/



(function () {

    function Question(question, answers, correctAnswerNumber) {
       // this.answers = [];

        this.question = question;
        this.answers = answers;
        this.correctAnswerNumber = correctAnswerNumber;
    }

    Question.prototype.quests = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (answer) {
        if (answer == this.correctAnswerNumber) {
            console.log('right answer');
            return true;
        } else {
            console.log('wrong answer');
            return false;
        }
    }

    var question1 = new Question("When is the Christmas day?", ["10, April", "25, December"], 1);
    var question2 = new Question("Is React a library for Javascript?", ["Yes", "No"], 0);

    var questions = [question1, question2];

    // THERE IS GOOD PRACTICE TO HIDE THIS GLOBAL(IN THIS CONTEXT) VARIABLE.
    // THAT'S BY USING CLOSURE. SEE FINAL ANSWER FROM JONAS ==> VERY IMPORTANT
    var totalPoint = 0;

    // MY ORIGINAL CODE HERE BELOW    
    // while (true) {
    //     // pick a question
    //     //var random = Math.round((Math.random() * 10)) % 2;
    //     var random = Math.floor(Math.random() * questions.length);

    //     // quests
    //     questions[random].quests();

    //     // input answer
    //     var answer = prompt('enter you answer (type EXIT to exit)');
    //     console.log('your answer: ' + answer);

    //     // check answer
    //     if (answer == 'EXIT' || answer == null) {
    //         console.log('bye bye');
    //         break;
    //     }
    //     var result = questions[random].checkAnswer(answer);
    //     if (result) { totalPoint++; }
    //     console.log('your point is ' + totalPoint);
    //     console.log('============================================');
    // }
    
    // SUGGESTED BY JONAS HERE BELOW
    function nextQuestion() {
        // pick a question
        //var random = Math.round((Math.random() * 10)) % 2;
        var random = Math.floor(Math.random() * questions.length);

        // quests
        questions[random].quests();

        // input answer
        var answer = prompt('enter you answer (type EXIT to exit)');
        console.log('your answer: ' + answer);

        // check answer
        if (answer == 'EXIT' || answer == null) {
            console.log('bye bye');
            return;
        }
        var result = questions[random].checkAnswer(answer);
        if (result) { totalPoint++; }
        console.log('your point is ' + totalPoint);
        console.log('============================================');

        nextQuestion();
    }

    nextQuestion();

})();




/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/








///////////////////////////////////////
// Lecture: Bind, call and apply of a function

/*
var john = {
    name: 'John',
    age: 29,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and gentlemen: I\'m ' + this.name +
            ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! what\'s up? I\'m ' + this.name +
            ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice '
            + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 34,
    job: 'designer'
};

john.presentation('formal', 'morning');

// method borrowing => 'this' is replaced with emily object
john.presentation.call(emily, 'friendly', 'afternoon');

// apply
//john.presentation.apply(emily, ['friendly', 'afternoon']);

// bind (carrying)
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoonr');



// real world example for the Bind
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

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
// isFullAge function needs 2 arguments.
// but in arrayCalc function, callback function is feeded with only 1 argument.
// how to use isFullAge as the callback function for the arrayCalc function?
// use the Bind!! and set initial parameter in advance
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

*/



///////////////////////////////////////
// Lecture: Closures (finally!!!)

/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66); // VO of retirement(66) call => retirementAge = 66, a = ' years...'
retirementUS(1990);                 // retirementUS has a link to this VO

var retirementSomewhere = retirement(76);   // another closure (VO of retirement(76) => retirementAge = 76, a = ' years...')
retirementSomewhere(1987);          // retirementSomewhere has a link to this VO

// => the inner function has always kept in the closure that the context of the outher function
// when the outer function is executed and returned.

// An inner function has always access to the "variables and parameters"
// of its outer function, even after the outer function has returned. => VO of the outer function isn't gone. it's still there.
// In other terms, inner function always maintain its Variable Objects (its and outer function's)
// even after the outer function has returned.
// In other terms, the scope chain stays intact even after the outer function has returned (the execution context of the outer function is gone)
// => the current execution context has closed in on the outer variable object
// so that it can use it, and that's why it's called a closure.

var retirementGermany = retirement(65); // specific function 1 (VO1, or closure 1)
var retirementIceland = retirement(67); // specific function 2 (VO2, or closure 2)

retirementGermany(1990);
retirementIceland(1990);

// Clousre is like generic function generator!!!!!!!!!!!


// it's also closure except that the returned function don't use VO from the outer function
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
interviewQuestion('designer')("JS");



function interviewQuestionGenerator(job) {
    return function (name) {
        switch (job) {
            case 'designer':
                console.log(name + ', can you please explain what UX design is?');
                break;

            case 'teacher':
                console.log('What subject do you teach, ' + name + '?');
                break;

            default:
                console.log('Hello ' + name + ', what do you do?');
                break;
        }
    }
}

interviewQuestionGenerator('designer')('John');
interviewQuestionGenerator('teacher')('Jane');
interviewQuestionGenerator('?')('Mark');
*/



///////////////////////////////////////
// Lecture: Immediately invoked function expression (IIFE)

/*
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// in Javascript, what's inside of parenthesis cannot be a statement
// below, function is declared but in the parenthesis, so it's treated as an expression
// it's called IIFE
// there's no way to access variables inside the IIFE,
// so we created data privacy here.
(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score); // is not defined

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

*/


///////////////////////////////////////
// Lecture: First Class Functions : Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');

var normalQuestion = interviewQuestion();
normalQuestion('Mark');

interviewQuestion('teacher')('Leon');

function returnCallback(number) {
    switch (number) {
        case 1:
            return function () {
                console.log("you have entered number " + number);
            }

        default:
            return function () {
                console.log("you have entered other than number 1");
            }
    }
}

returnCallback(1)();
returnCallback(4)();
*/


///////////////////////////////////////
// Lecture: First Class Functions : Passing Functions as Arguments

// A function is an instance of the Object type
// A function behaves like any other object
// We can store functions in a variable;
// We can pass a function as an argument to another function
// We can return a function from a function

/*
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

// with these callback functions and generic arrayCalc function,
// it is more readable, clean and maintainable than one big function

*/



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