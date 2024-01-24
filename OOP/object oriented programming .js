//group data + functionality as properties and methods inside objects "belong together"
var virtualPet = {
    sleepy: true,
    nap: function () {
        this.sleepy = false //this access same name variable/property but belong to that scope
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

const bicycle = {
    bell: function() {
        return "Watch out"
    }
}
const door = {
    bell: function() {
        return "Come here"
    }
}
console.log(bicycle.bell()); //access bell() method on bicycle object
console.log(door.bell());

function ringTheBell(thing) {
    console.log(thing.bell())
}
ringTheBell(bicycle);
ringTheBell(door);

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
let kiwiIcecream = new Icecream("kiwi");
console.log(kiwiIcecream); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}

//built-in object types/native objects =Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON
var date =new Date();
console.log(date);

var bird = {
    hasWings: false,
    canFly: false,
}
var eagle = Object.create(bird); //inheret + can reuse properties many times
eagle.hasWings = true;
console.log(eagle.canFly)
console.log(eagle.hasWings)