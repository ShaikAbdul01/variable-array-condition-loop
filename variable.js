/* 
------------------
VARIABLE
-------------------
1. What is JavaScript?
Ans:JavaScript is High Level Programming Language . javaScript was Developed by Brendan Eich in 1995.He was developed netscript and Mozila Firefox.
2. How does JS Works?
JS is a single threaded and single concurrent programming language which means it can handle one task at a time or, in other words, a piece of code at a time. It’s an interpreted programming language, and like most scripting languages, it uses dynamic typing, where type safety is verified at the runtime.
3. What is Variable?

4. Declare a variable
5. Types of Variable? How can you find out type of a variable
6. Primitive and non-primitive data types
7. Naming Convention of JS variables
8. Math Operation +, -, *, /, %

var num1==20;
var Addition = num1;
console.log('Addition: ',Addition);
var Subtraction = num1;
console.log('Subtraction: ',Subtraction);
var Multifly = num1;
console.log('Multifly: ',Multifly);
var Division = num1;
console.log('Division: ',Division);
var Reminder = num1;
console.log('Reminder: ',Reminder);

9. Short hand: +=, -=, *=, /=
var a=10;
console.log('a=a+2(10+=2) : ',a+=2);
var a='Hello, ';
console.log(a+='World!');

10. ++, --
var x=10;
 x++;
console.log(x);
 x--;
console.log(x);

11. parseInt, ParseFloat
var x=23;y=34.65;
yFloat=parseInt(y);
console.log('Convert integer: ',yFloat);

xInt=parseFloat(x);
console.log('Convert Float: ',xInt);

12. toFixed
var x=0.1;y=0.2;
var z  = x + y;
var r = z.toFixed(2);
console.log(r);
*/

var x=0.1;y=0.2;
var z  = x + y;
var r = z.toFixed(2);
console.log(r);