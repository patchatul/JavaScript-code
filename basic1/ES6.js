// Traditional anonymous function
(function (a) {
    return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
(a) => {
    return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;


/* () => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
} */
/*
(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression
async param => expression
async (param1, param2, ...paramN) => {
  statements
} */

/*if clause-Ternary operators + functions in JSX variable after ? is condition : instead of else
let name = 'Bob'; name == 'Bob' ? console.log(‘yes’) : console.log('NO’);
*/

//[10, 20].forEach(function(item) {return item * 2}) use [10, 20].forEach(item => item *2)