function concatStr(a, b){
    console.log(a + b)
}
concatStr(1, 2);
//JavaScript doesn't have built-in objects or methods that would allow for tests to be written
expect(concatStr(1, 2)).toBe(3) //Jest framework testing

/*1st normal js file > write function concatStr(a, b){
    console.log(a + b)
}
concatStr(1, 2);
then add at the end >> module.exports = concatStr;

> in terminal download npm init
check for jest >> jest --version
> npm install --save-dev jest
in package.json file > change "test": "jest"

*in 2nd file for jest testing
const concatStr = require('./1stfunctionfile');
test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20)
});
> start unit testing in terminal >> npm run test
*/
//const {default:TestRunner} = require("jest-runner")
const concatStr = require('./testing.js');
test('return a + b', () =>{
    expect((concatStr(1, 2)).toBe(3));
})

//after write expect toBe in another file type npm run test