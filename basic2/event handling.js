//button click, icon tap are examples of user triggered events

/*event = what gonna happen after interact
listen to event =write code for what button /waiting for this part/target to get interacted
capture an event =write code for what happen after interacted
after event got trigger=interact w/ button >
event handler =Js code/function run/handle captured event */

const target = document.querySelector('p');

function handleClick() {  //event handler= js function for event
    console.log('this will show after clicked')
}
target.addEventListener('click', handleClick); //event listener
//target.addEventListener(typeofevent, listener)

//after write js code > edit html element > add <p onclick="handleClick()">

document.querySelector('h1').addEventListener('click',
    function () {
        console.log('clicked'); //alert(“LOOK”)
    });
/* You want to listen for a click event on an Add to Cart button.
Once you capture such an event, you want to run some JavaScript code.
If the same event gets triggered or fired again,
our event handling code then handles the event
by updating the count in the circle next to the shopping cart icon.*/

