function nameOfFunction(){
    console.log("easy function syntax")
}
nameOfFunction();

function  divideTwoNums(a,b){
    var a = 6;
    var b = 2
    var c = a / b;
    console.log(c);
}
divideTwoNums();//w/o parameter

function  addTwoNums(e,f){
    var d = e + f;
    console.log(d);
}
addTwoNums(5,2); // w/ parameter

function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
//check if current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i+1)
        } else {
            console.log('---No match found at', i+1)
        }
    }
}

letterFinder("test", "t")

//example of adding properties and methods to an object
var car = {};
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
car.turnTheKey();
car.lightsOn()

//return + function calling w/ no infinite
let counter = 3;
function example(){
    console.log(counter);
    counter = counter -1;
    if (counter === 0) return;
    example();
}
example();