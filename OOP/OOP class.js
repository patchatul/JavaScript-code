
class Car {
    constructor(color, speed) { //constructor function assign the passed in parameters to future objects properties.
        this.color = color;
        this.speed = speed;
    }
    turnOn(){ //just name of method aka function
        console.log("go")
    }
}
const car1 = new Car("red", "slow") //build car object- function instantiate
car1.turnOn(); //car1 object access turnOn method

class Animal {
    animal(){
        console.log("Object.create(Animal)")
    }
} //Object.create() method. to create or instansiate objects of our classes
var myDog = Object.create(Animal)
console.log (Animal)

class Pet {
    tellMe(){
        console.log("new Pet")
    }
} //create object from class
var myDog = new Pet()
console.log (Pet)

// extends setup inheritance relation b/t classes
//class Animal { /* ...base class... */ }
//class Bird extends Animal { /* sub-class inheriting from "Animal" */ }
//class Eagle extends Bird { /* another class, inheriting from "Bird"*/ }
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings() //*super = pass + add useWings method
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() { //only reuse/redeclare useWings method
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
