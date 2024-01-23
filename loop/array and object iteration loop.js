// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (var item of dairy){
        console.log(item)
    }
}
logDairy(); //call function

// Task 2 loop over bird object's *properties* console log each one, using the for...of loop. Finally call the function
const animal = {
canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
     for (prop of Object.keys(bird)) {
        console.log(`${prop}: ${bird[prop]}`)
     }
 }
birdCan(); /*for (var key of Object.keys(bird))
{
    console.log(`${key}: ${bird[key]}`);
    }
}*/
// Task 3 loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop.
function animalCan() {
    for (prop in bird) { //(var key in...)
        console.log(`${prop}: ${bird[prop]}`)
    }
}
animalCan();
