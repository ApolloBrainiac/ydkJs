
// ==============
// Output
// ==============

/* a = 21;

b = a * 2;

console.log(b);
*/

// ==============
// Input
// ==============

/* age = prompt('Please tell me your age:');

console.log(age);

*/

// ==============
// Operators
// ==============

/*
// a = 2;
// b = a + 1;

var a = 20;

a = a + 1;
a = a * 2;

console.log(a); */

// ==============
// Values & Types
// ==============

/*
"I am a string";
'I am also a string';

42;

true;
false;
*/

// ==============
// Converting Between Types
// ==============

/*)
var a = '42';
var b = Number(a);

console.log(a);
console.log(b);
*/

// ==============
// Code Comments
// ==============

/*
- Code without comments is suboptimal.
- Too many comments (one per line, for example)
is probably a sign of poorly written code.
- Comments should explain why, not what. They can
optionally explain how if that's particularly confusing.
*/

//var a = 42;   // 42 is the meaning of life

/* The following value is used because
   it has been shown that it answers
   every question in the universe. */
// var a = 42;

// var a = /* arbitrary value*/ 42;
// console.log(a); // 42

// ==============
// Variable
// ==============

/*
var amount = 99.99;
amount = amount * 2;

console.log(amount); //199.98

// convert 'amount' to a string, and
// add "$" on the beginning
amount = "$" + String(amount);

console.log (amount); //'$199.98'


const TAX_RATE = 0.08; // 8% sales tax

var amount = 99.99;

amount *= 2;

amount += (amount * TAX_RATE);

console.log(amount);						// 215.9784
console.log(amount.toFixed(2));	// "215.98"

*/

// ==============
// Blocks
// ==============
/*

var amount = 99.99;

// a general block
{
	amount *= 2;
	console.log(amount); //199.98
}

// is amount big enough
if (amount > 10){
	amount *= 2;
	console.log(amount); //199.98
}

*/

// ==============
// Conditionals
// ==============
/*
var bank_balance = 302.13;
var amount = 99.99;

if(amount < bank_balance){
	console.log("I want to buy this phone!");
}


const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount *= 2;

// can we afford the extra purchase?
if (amount < bank_balance){
	console.log("I'll take the accessory!");
	amount += ACCESSORY_PRICE;
} else { // otherwise
	console.log("No, thanks.");
}

*/

// ==============
// Loops
// ==============

/*
while (numOfCustomers > 0){
	console.log("How may I help you?");

	// help the customer...

	numOfCustomers -= 1;
}

// versus:

do {
	console.log( "How may I help you?");

	// help the customer...

	numOfCustomers -= 1;
} while (numOfCustomers > 0);


var i = 0;

// a `while..true` loop would run forever, right?
while (true) {
	// stop the loop?
	if ((i <= 9) === false){
		break;
	}

	console.log( i );
	i += 1;
}


for (var i = 0; i <= 9; i++){
	console.log(i);
}

*/

// ==============
// Functions
// ==============

/*

function printAmount(){
	console.log( amount.toFixed(2));
}

var amount = 99.99;

printAmount(); // "99.99"

amount *= 2;

printAmount();

*/

/*
function printAmount(amt) {
	console.log(amt.toFixed(2));
}

function formatAmount() {
	return "$" + amount.toFixed (2);
}

var amount = 99.99;

printAmount( amount * 2);

amount = formatAmount();
console.log (amount);


const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt){
	// calculate the ne w amount with the tax
	amt += (amt * TAX_RATE);

	// return new amount
	return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount(amount);

console.log(amount.toFixed(2)); //"107.99"

*/

// ==============
// Scope
// ==============

/*
function one () {
	var a = 1;
	console.log(a);
}

function two () {
	var a = 2;
	console.log(a);
}

one();
two();


function outer() {
	var a = 1;

	function inner(){
		var b = 2;

		// we can access both `a` and `b` here
		console.log (a + b); // 3
	}
	inner();

	// we can only access `a` here
	console.log(a); //1
}

outer();

*/

// ==============
// Practice
// ==============

const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHHOLD = 200;

var bank_balance = prompt("How much money do you have? (In digits, please.)");
var amount = 0;

function calcTax(amt){
	// calc final purchase plus taxes
	amt += (amt * TAX_RATE);
	return amt.toFixed(2);
}

function formatPurch(amt){
	// format purchase into readability
	console.log("$" + String(amt));
}

// begin loop if there's money in the account
while(amount < bank_balance){
	amount += PHONE_PRICE;
	
	// conditional, if current purchase is below threshhold
	if(amount < SPENDING_THRESHHOLD){
		amount += ACCESSORY_PRICE;
	}
}

amount = calcTax(amount)

console.log(
	"Your purchase: " + formatPurch(amount)
);

if (amount > bank_balance){
	console.log("You can't afford this purchase.");
}