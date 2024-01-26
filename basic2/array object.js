//array [] bracket
let cat =["black", "orange", "white"];
console.log(cat); //display all items
console.log(cat.length); //how many item in an array
console.log(cat[2]); //display item number2 in the array list
function listArrayItems(cat) {
    for(var i=0; i < cat.length;i++){
        console.log(i, cat[i])
}
}
listArrayItems(cat); //display all items i < .length w/ order i +1

//object {} curly bracket var dog = {}; dog.age =3; dog[age] ="3";
let dog ={
    age:3,
    name:"Ben",
    color:"brown fur",
    hair:"curly"
}
console.log(dog) //display all property >call use .dot or [Bracket] notation
console.log("This is " + dog.name + " " + "with " + dog.color + ".")
dog.toe = 12;
dog['tail'] = "no tail";
console.log(dog) //after add mor property [string only]

//Arrays are Objects -used built-in methods push() , pop() methods.
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
fruits.pop();
console.log(fruits); // ['apple']


//math object
var decimal = Math.random(); //0.000000 * 10
console.log(decimal)
var round = Math.round(decimal) // 0 Math.ceil
console.log(round);
var tothe = Math.pow(2,3)
console.log("2 to the 3 is " + tothe);

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()