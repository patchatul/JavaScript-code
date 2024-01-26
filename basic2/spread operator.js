//3 dot ...
//1.spread opertator - spread out array items and join objects together
//no need to list every array - pass all array elements into a function
//showThis(...top7) or showThis(top1(),...,top7()) instead of showThis(top1(), top2())
//2.rest operator allows you to take items from an array and use them to create a separate sub-array.

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // spread
console.log(fruitsAndBerries); // outputs as a new single array

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) //join object {wings: 2, wheels: 4}

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies); //Add new members to arrays without using push() method

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //['H', 'e', 'l', 'l', 'o'] Convert a string to an array using the spread operator

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed) //Copy object or array into a separate one + change property

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)//copy and delete old property

let obj = {
    key: 1,
    value: 4
};
let output = { ...obj };
output.value -= obj.key;
console.log(output.value);

function count(...basket) {
    console.log(basket.length)
}
count(10, 9, 8, 7, 6);
