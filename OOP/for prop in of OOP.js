//for in loops, iterate over the properties of the object and its prototype.
// for of loops do this only for the objects' properties.
const cat = {
    eat: 100,
    color: "tubby"
}
for(prop in cat) { //>work output key/property in cat variable
// for(prop of cat) //not work cuz for(prop of Object.keys(cat))
    console.log(prop)
} //Uncaught TypeError: cat is not iterable if use** for(prop of cat) **

const colors = ['red', 'orange', 'yellow']
for (var color of colors) {  //change prop >> var nameofnewvariable
    console.log(color);
} //arrays are iterable +for of loop can be run on arrays to loop over objects.

//Object.keys(), Object.values(), and Object.entries(). >> key : value
//Object.keys() method receives an object as its parameter.
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); //when I run Object.keys(),pass it my car2 object,returned value is an array of strings, each string is a property key of properties contained in my car2 object.
//Object.values() show values of each keys
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
//Object.entries() returns an array listing both keys + values.
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); //[ ['speed', 400], ['color', 'magenta'] ]

// loop over object's own property keys and values.
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}
for (var key of Object.keys(clothingItem)) {
    console.log(key);
    console.log(key, ":", clothingItem[key]); //access value as name[newobjectname]
}
//drone[dynamicKey] > math random if speed output 15
function testBracketsDynamicAccess() {
    var dynamicKey;
    if (Math.random() > 0.5) {
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }

    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();