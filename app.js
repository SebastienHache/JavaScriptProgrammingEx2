/**
 * Author: Sebastien Hache
 * Title: Working with strings
 * Date: 2024-01-19
 */

let l = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`';

console.log(l);

let firstName = 'Sebastien'
let lastName = 'Hache';
let age = 32;

let msgConcat = 'My name is ' + firstName + ' '
+ lastName + 'My age is' + age + '.';

console.log(msgConcat);
console.log(l);

let msgStringLiteral =  `My name is ${firstName} ${lastName} and my 
age is ${age}.`;

console.log(msgStringLiteral);
console.log(l);

console.log('Length of msgConcat is ',msgConcat.length);
console.log('Length of msgStringLiteral is ', msgStringLiteral.length);

//Excape & New Line
let a = "Add a new line\n\nThis is another line";

console.log(l);
console.log(a);

console.log(l);

let b = 'abcdefg'

console.log(b);

b = b.toUpperCase();

console.log(b);

b = b.toLowerCase;

console.log(b);

// substr
//abcdefg
//0123456

let c = b.substr(2,4);
console.log(c);
console.log(b);

// substring
//abcdefg
//0123456
let d = b.substring(2,6);// ending index is not inclusive.
console.log(d);

let myName = 'Christopher'
let index = myName.indexOf('t');

console.log(index)