var person;
//declare a variable
var person = "Jane";
//assign a value to the variable, Jane is a value
console.log("Hello", person);
//call person variable w/ space
person = "Jane Doe";
//reassign new value to the same avaiable
console.log("Hi " + person);
//call a variable use plus operator to join string
let greeting = "Hey!";
//ES6 use let -new way , const -no change
console.log(greeting.concat(person));
//use concat method w/ no white space
console.log(greeting+ " " + person)
//put "space "
console.log(`${greeting}!!${person}` )
console.log(`backticks
for multi-lines` )
//Template literals ES6
let word = "word";
for(var i =0; i < word.length; i++){
    console.log("%c" + word[i], "color:yellow; border: 5px solid white; font-size: 30px;")
}//style w/ css "%c"

//cheet sheat
var place = "ho-ho-ho"
console.log(place);
console.log(place.length);
console.log(place.charAt(0));
console.log(place.lastIndexOf('h'));
console.log(place.indexOf('o'));
console.log(place.split('-'));
console.log(place.toUpperCase());

//typeof  check data type
var test1 = typeof('1');
console.log(test1);
var test2 = typeof(3.14);
console.log(test2);
var test3 = typeof(1 < 2);
console.log(test3);
var test4 = typeof([1]);
console.log(test4);
var test5 = typeof({person : 'Jane'});
console.log(test5);
var test6 = typeof(function a(){a});
console.log(test6);

function count(...basket) {
    console.log(basket.length)
}
count(10, 9, 8, 7, 6);

function count(...food) {
    console.log(food.length)
}
count("Burgers", "Fries", null);

const a = true;
if(!a) {
    console.log("Green");
} else {
    console.log("Blue");
}
var message = "Hello";
message += " World!";
message = "Goodbye!";
console.log(message);

var result = 0;
var i = 4;
while(i > 0) {
    result += 2;
    i--;
}
console.log(result);

try {
    throw new Error();
    console.log('Square');
} catch(err) {
    console.log('Circle');
}

var result = 0;
for(var i = 0; i < 5; i++) {
    result += 2;
}
console.log(result);

var x;
console.log(x);
x = 7;