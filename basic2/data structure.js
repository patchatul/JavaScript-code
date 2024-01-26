//4 built-in methods -object {} array [] maps set
//advanced queue linked list tree graph
//array [] 3 built in methods forEach filter map
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
}); //forEach() accepts a function that will work on each array item

const nums = [0,10,20,30,40,50];
function lessNume (num) {
    return num > 20;
}
console.log(nums.filter(lessNume)) //filters arrays based on a specific test

var arr =[0,10,20,30,40,50];
var newArr = arr.map( function(num) {
    return num / 10
})
console.log(newArr)//map each array item over to another array's item, based on whatever perform inside func that is passed-in to map as a parameter.

//objects use Object.keys .entries .values and can use .forEach()
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

//new Map() doesn't have inheritance. No prototypes! useful as a data storage.
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
console.log(bestBoxers.get(1));

//new Set() accept an array. to quickly filter an array for unique members.
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);