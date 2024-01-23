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