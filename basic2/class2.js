class Train { //base class/superclass
    constructor(color, lightsOn) { // will be used to build properties on future object instance of Train class
        this.color = color;  //2 properties that each object instance of the Train class should have
        this.lightsOn = lightsOn;
    } lightsStatus() {
    console.log('Lights on?', lightsOn); // original methods will be shared by all future instance objects
}
}
var train1 = new Train('red', false); //build new instances of Train class. property color="red" lightsOn= false
var train2 = new Train('blue', false); //each object instance of Train class have its own custom properties
train2.lightsStatus(); //use method declare in class train >console logging of value of all properties on prototype

class SpeedTrain extends Train {  //SpeedTrain class = *subclass* of Train class cuz it inherits/extends from it.
    constructor(passengers, color, lightsOn) { //makes Train class a base class/superclass of SpeedTrain class
        super(color, lightsOn); //specify what property gets inherited/borrowed from superclass in subclass.
        this.passengers = passengers; //new property
    } toggleLights() { //after inherited properties, also automatically inherit all methods on Train prototype
        super.lightsStatus();  //super keyword allows to "borrow" functionality from a super-class, in a subclass
        this.lightsOn = !this.lightsOn; //override behavior of original toggleLights() method
        console.log('Lights are 100% operational.');
    }
}

var train5 = new Train('blue', false); //Now you're ready to build train objects by combine "borrowed" method code 
var speed1 = new SpeedTrain(200, false, 'green', false); //from super-class w/ my own custom code in subclass. train5.toggleLights(); } กำหนดpropetiesในclassก่อนสร้างรถไฟเต็มตัวโดยดึงชื่อคลาส+จุด.เม็ดธอด
