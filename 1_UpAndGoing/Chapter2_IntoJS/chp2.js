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
// Inequality

