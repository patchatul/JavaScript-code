/*data and functions that operate on it are clearly separated,
not combined inside objects.
*/

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate){
    return amount * rate; //return values from 1 function use for multiple function calls, returning data and manipulating values
}
currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo)
 //functions return new values, then use those somewhere else
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);

//First-class functions = pass to other functions, save in a variable, return from other functions
// or function is just a value like string or a number -passing value.
function addTwoNums(a, b) {
    console.log(a + b)
}
function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };
var useRandom = true;
var getNumber;
if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}
addTwoNums(getNumber(), getNumber())

//higher-order function -accepts other functions as arguments or returns functions when invoked
//Pure functions returns the exact same result as long as it's given the same values -output will always be the same +should not have side-effects