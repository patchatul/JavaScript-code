// Task 1: Code a Person class
class Person {
    constructor(name = 'Tom', age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.horlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker(0, 10, 'Bob', 21, 110);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker(100, 30, 'alice', 30, 120);
    manager.doSomethingFun();
    return manager;

}
/*## Task 1: Code a Person class, with 3 parameters in  constructor: name, age, energy.
Set the default parameters in the Person class as follows:
name = "Tom"
age = 20
energy = 100

Code 2 methods in  `Person` class. Name those methods `sleep()` and `doSomethingFun()`.
`sleep()` method should take existing energy level and increase it by 10.
doSomethingFun() method take existing energy level and decrease it by 10.

## Task 2: Code a Worker class= sub-class, inheriting from `Person` class, and name it `Worker`.
The `Worker` class has 2 additional parameters in the constructor:
- xp (for "experience points")
- hourlyWage.
following default values:
xp = 0, hourlyWage = 10
`Worker` class has all the paramerters and methods of its super-class.
`goToWork()` method, which, whenever it's run, increases the value of the `xp` property by 10.

## Task 3: Code a intern object
Inside the intern function instantiate the `Worker` class to code a new intern object.
The intern should have the following characteristics:
name: Bob
age: 21
energy: 110
xp: 0
hourlyWage: 10
Run the `goToWork()` method on the intern object. Then `return` the intern object.

## Task 4: Code a manager object
Inside the manager function instantiate the `Worker` class to code a new `manager` object.
The manager object should have the following characteristics:
name: Alice
age: 30
energy: 120
xp: 100
hourlyWage: 30
Run the `doSomethingFun()` method on the manager object. Then `return` the manager object. */