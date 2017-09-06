// ===========
// Values & Types
// ===========

/*
var a;		//"undefinded"
typeof a; 

a = "hello world";
typeof a;	//"string"

a = 42;
typeof a;	//"number"

a = true;
typeof a;	//"boolean"

a = null;
typeof a;	// "object" -- weird, bug

a = undefined;
typeof a;	// "undefinded"

a = {b: 'c'};
typeof a;	// "object"
*/

// ===========
// Objects
// ===========
 /*
var obj = {
	a: "hello world",
	b: 42,
	c: true
};

obj.a;	// "hello world"
obj.b;	// 42
obj.c;	// true


var ojb = {
	a: 'hello world',
	b: 42
};

var b = "a";

obj[b];		// "hello world"
obj["b"];	// 42
*/

// ===========
// Arrays
/*
var arr = [
		"hello world",
		42,
		true
];

arr[0];	// "hello world"
arr[1];	// 42
arr[2];	// true
arr.length;	// 3

typeof arr; // "object"
*/

// ===========
// Functions
/*
function foo() {
	return 42
}

foo.bar = "hello world";
typeof foo;	// "function"
typeof foo.bar;	// "string"
*/

// ===========
// Built-In Type Methods
// ===========

/*
var a = "hello world";
var b = 3.14159;

a.length;	// 11
a.toUpperCase();	// "HELLO WORLD"
b.toFixed(4);	// "3.1416"
*/

// ===========
// Comparing Values
// ===========

// ===========
// Coercion

// explicit coercion

/*

var a = '42';

var b = Number (a);

a;	// "42"
b;	// 42 -- not a string

// implicit coercion

var a = "42";

var b = a * 1;	//'42' implicitly coerced to 42 here

a;	// "42"
b;	// 42 --- da number

*/

// ===========
// 	Truthy & Falsy

/*
FALSY
"" (empty string)
0, -0, NaN (invalid number)
null, undefined
false
FALSY
*/

// ===========
// Equality
/*	== checks for value w/ coercion 
		=== checks for value w/o coercion

var a = "42";
var b = 42;

a == b; //true
a === b; //false

 use == if you're certain about values and === if you're not

 
 var a = [1,2,3];
 var b = [1,2,3];
 var c = "1,2,3";

a == c;	//true
b == c;	//true
a == b;	//false

// non primitives are compared by reference

*/

// ===========
// Inequality (relational comparison)

/*
var a = 41;
var b = "42";
var c = "43";

a < b;	// true
b < c;	// true



var a = 42;
var b = "foo";

a < b;	// false b is being coerced into NaN
a > b;	// false
a == b;	// false

*/

// ===========
// Variables
// ===========

/*
Identifiers must begin with:
a-z, A-Z, $, or _
can contain any of the above and the
numerals 0-9

can't use 'reserved words'
(i.e. for, in if, null, true, false)
*/


// ===========
// Function Scopes

//Hoisting

/*
var a = 2;

foo();					// works because 'foo()'
									//delcaration is hoisted

function foo(){
	a = 3;
	console.log(a);		//3

	var a;						//using var means it is hoisted
										// to top of foo()
}

console.log(a);	// 2

/* relying on hoisting for variables is bad form
relying on it for functions is standard

*/

//Nested Scopes
// when you delcare a variable it is accessible
// in all inner/lower Scopes

//observe:
/*function foo() {
	var a = 1;

	function bar() {
		var b = 2;

		function baz(){
			var c = 3;

			console.log( a, b, c); // 1 2 3
		}

		baz();
		console.log(a,b); // 1 2
	}

	bar();
	console.log(a);	// 1
}

foo();
*/

/* not declaring variables can lead to accidental
global scope

//observe:

function foo(){
	a = 1;	// 'a' not formally declared
}

foo();
a;	// now has a value of 1 globally

*/

// 'let' keyword, scoping rules will behave
// roughly the same

//observe:

/*
function foo(){
	var a = 1;

	if (a >= 1) {
		let b = 2; //using let means it'll only belong to the if statement

		while (b < 5) {
			let c = b* 2;
			b++;

			console.log( a + c );
		}
	}
}

foo(); // 5 7 9 
*/

// ===========
// Conditionals
// ===========

// if..else.if statements:

if (a == 2) {
	// do something
}
else if (a == 10) {
	//do another thing
}
else if ( a == 42) {
	// whole new thing
}
else {
	// fallback in case no things happen
}

// switch statemetns:

switch (a) {
	case 2:
		// do something
		break;
	case 10:
		// do another thing
		break;
	case 42:
		// whole new thing
		break;
	default:
		// fallback
}

// example of 'fall through'

switch(a){
	case 2:
	case 10:
		//some cool stuff
		break;
	case 42:
		//other stuff
		break;
	default:
		//fallback
}

// conditional/ternary operator:

var a = 42;

var b = (a > 41) ? "hello" : "world";

/*
similar to:

if (a > 41){
	b = "hello";
} else {
	b = "world";
}