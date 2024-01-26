//in terminal F12
document.querySelector('p')
//select 1st <p>
document.querySelectorAll('a')
//return all <a>
document.getElementById('head') //no s
document.getElementsByClassName('text')  //s

let answer = prompt('What is your name?'); // capture user input
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})