/* <!-- assuming that all the arguments a function will receive are of the wrong type,  the wrong value or both or things will go wrong

1.Just above the for loop in the letterFinder function definition, declare a variable named condition1 and assign to it the following code: typeof(word) == 'string' && word.length >= 2.

Declare a variable named condition2 on the next line and assign to it a check that makes sure that the type of match is a string AND that the length of the match variable is equal to 1.

Write an if statement on the next line that checks that condition1 is true, and condition2 is true

Move the rest of the function's body into the if statement you wrote in the previous step.

Code an "else" block after the "if" condition and console.log the following: "Please pass correct arguments to the function.".

As a failing test, run the letterFinder function and pass it with any two numbers as arguments.

As a passing test, run the letterFinder function and pass it with correct arguments, such as: letterFinder("cat", "c"). --> */

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c");
