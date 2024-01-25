//console.log(user);
//ReferenceError: user is not defined -it stops programming the rest of codes

//va world = 'hello';
// SyntaxError: Invalid or unexpected token
//var a "there's no assignment operator here";
//SyntaxError: Unexpected string -when you write a piece of code that JS can't read

//"hello".pop()
//TypeError: "hello".pop is not a function

//(10).toString(100);
//RangeError: toString() radix argument must be between 2 and 36

//try and catch error prevent error to stop programming
/* try {
    console.log(c +d)
} catch(err){
    console.log("err doesn't stop program execution")
} */

/* try{
    throw new TypeError(); //ReferenceError() SyntaxError() RangeError()
} catch(err){
    console.log(err);
    console.log('There was an Error')
}
console.log("still running") */

//how to prevent errors in JavaScript full example
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works even there is an error")