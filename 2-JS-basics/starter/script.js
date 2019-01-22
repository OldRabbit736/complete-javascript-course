/****************************
 * Coding challenge 5
 */

var restaurantAdventureJohn = {
  bills: [124, 48, 268, 180, 42],
  tipCalculator: function () {
    this.tips = [];
    this.paid = [];
    // don't do below
    // this.tips = this.paid = [];
    // when some value inserted into the tips array, than same happens to the paid array,
    // because tips and paid are reference type. (they points to the same array)

    for (var i = 0; i < this.bills.length; i++) {
      var ratio;
      if (this.bills[i] < 50) {
        ratio = 0.2;
      } else if (this.bills[i] < 200) {
        ratio = 0.15;
      } else {
        ratio = 0.1;
      }
      this.tips[i] = this.bills[i] * ratio;
      this.paid[i] = this.tips[i] + this.bills[i];
    }
  }
};

restaurantAdventureJohn.tipCalculator();
console.log(restaurantAdventureJohn.tips);
console.log(restaurantAdventureJohn.paid);

var restaurantAdventureMark = {
  bills: [77, 5, 110, 45],
  tipCalculator: function () {
    this.tips = [];
    this.paid = [];
    for (var i = 0; i < this.bills.length; i++) {
      var ratio;
      if (this.bills[i] < 100) {
        ratio = 0.2;
      } else if (this.bills[i] < 300) {
        ratio = 0.1;
      } else {
        ratio = 0.25;
      }
      this.tips[i] = this.bills[i] * ratio;
      this.paid[i] = this.tips[i] + this.bills[i];
    }
  }
};

restaurantAdventureMark.tipCalculator();
console.log(restaurantAdventureMark.tips);
console.log(restaurantAdventureMark.paid);

function calculateAverageArray(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
}

var someArray = [3, 5, 7];
console.log(calculateAverageArray(someArray));

restaurantAdventureJohn.average = calculateAverageArray(restaurantAdventureJohn.tips);
restaurantAdventureMark.average = calculateAverageArray(restaurantAdventureMark.tips);

var averageJohn = restaurantAdventureJohn.average;
var averageMark = restaurantAdventureMark.average;

if (averageJohn > averageMark) {
  console.log("John's family paid more tips than Mark's");
} else if (averageJohn === averageMark) {
  console.log("John's family paid as much as Mark's");
} else {
  console.log("John's family paid less tips than Mark's");
}
console.log("John's family paid tips as much as " + averageJohn);
console.log("Mark's family paid tips as much as " + averageMark);

/****************************
 * Loops and iteration
 */
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}


var john = ['John', 'Smith', 1990, 'designer', false];
for(var i = 0; i < john.length; i++){
    console.log(john[i]);
}

var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}

// continue and break statements
var john = ["John", "Smith", 1990, "designer", false, "blue"];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

// looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/****************************
 * Coding challenge 4
 */
/*
var Mark = {
  fullName: "Mark Hunt",
  mass: 80,
  height: 1.85,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

var John = {
  fullName: "John Smith",
  mass: 70,
  height: 1.81,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

var bmiMark = Mark.calcBMI();
var bmiJohn = John.calcBMI();

if (bmiMark > bmiJohn) {
  console.log("Mark has a higher BMI than John");
} else if (bmiMark < bmiJohn) {
  console.log("John has a higher BMI than Mark");
} else {
  console.log("Mark and John has the same BMI");
}
console.log("Mark: " + bmiMark);
console.log("John: " + bmiJohn);
*/

/****************************
 * Objects and methods
 */
/*
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
      this.age = 2019 - this.birthYear;
  } // function expression assigned to a variable
};

john.calcAge(); // age property is added to the john object instance.
console.log(john);
*/

/****************************
 * Objects and properties
 */
/*
 // object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['birthYear']); // useful in run time
var x = 'job';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1992;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/****************************
 * Coding challenge 3
 */
/*
var tipCalculator = function(bill) {
  if (bill < 50) {
    return bill * 0.2;
  } else if (bill < 200) {
    return bill * 0.15;
  } else if (bill >= 200) {
    return bill * 0.1;
  }
};

var bill = [124, 48, 268];
var tips = [tipCalculator(bill[0]),
            tipCalculator(bill[1]),
            tipCalculator(bill[2])];
var total = [bill[0] + tips[0],
             bill[1] + tips[1],
             bill[2] + tips[2]];
console.log(tips);
console.log(total);
*/

/****************************
 * Arrays
 */
/*
 // initialize new array
 var names = ['John', 'Mark', 'Jane'];
 var years = new Array(1990, 1934, 2183);

 console.log(names[0]);
 console.log(names[1]);
 console.log(names[2]);
 console.log(names.length);

 // mutate array data
 names[1] = 'Ben';
 console.log(names);

 names[names.length] = 'Mary'
 console.log(names);

 // different data types
 var john = ['john', 1990, 'smith', 1990, 'designer', false];
john.push('blue');
var number = john.unshift('Mr.');
console.log(john, number);

john.pop();
john.pop();
console.log(john);

john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John Is a designer';
console.log(isDesigner);
*/

/****************************
 * Function statements and expressions
 */
/*
// Function declaration => it is a statement.
// function whatDoYouDo(job, firstName) {}

// Function expression => it is an expression. var a = value;
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + ' teaches kids how to code.';
    case "driver":
      return firstName + ' drives a cab in Lisbon.';
    case "designer":
      return firstName + ' designs beautiful websites.';
    default:
      return firstName + ' does something else.';
  }
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('teacher', 'John'));

// an expression results in a value.
// a statement doesn't result in an immediate value.
// like, if (true) {console.log(23)}, it's an action.
*/

/****************************
 * Functions
 */
/*
 // no return type, no parameter type because JS is dynamic type langauge
 function calculateAge(birthYear) {
     return 2019 - birthYear;
 }

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1994);
var ageJane = calculateAge(1989);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(birthYear, firstName) {
    let age = calculateAge(birthYear);
    let retirement = 65 - age;

    if(retirement > 0){
    console.log(firstName + ' ' + 'retires in '
    + retirement + ' years.');
    }
    else{
        console.log(firstName + ' is already retired.');
    }
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1930, 'Mike');
yearsUntilRetirement(1989, 'Jane');
*/

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