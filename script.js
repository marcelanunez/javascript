/*******
 * Operator precedence
 */

 var now = 2020;
 var yearJohn = 1989;
 var fullAge = 18;

 //Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);


//More Operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
x=4;
console.log(x**2);

/*
/*****************
 * Basic Operators


 var now, yearJohn, yearMark;

 now = 2020;
 ageJohn = 28;
 ageMark = 33;

 //Basic Operators
 yearJohn = now - ageJohn;
 yearMark = now - ageMark;

 console.log(yearJohn);
 console.log(yearMark);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

 //Logical Operators
 var johnOlder = ageJohn > ageMark;
 console.log(johnOlder);


 // typeof Operator

 console.log(typeof johnOlder);
 console.log(typeof yearMark);

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;

console.log(lastName);
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/**********************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job +'. Is he married? ' + isMarried);

//variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job +'. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/
