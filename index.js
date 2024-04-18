
let duel;
let win;
let rounds = 0;
const formButton = document.querySelector('formButton'); 
const guessButton = document.querySelector('guessButton');
const text = document.getElementById('message');
let input = document.getElementById('myInput');
const instruc = `Refresh the page to play again`;
const result = document.getElementById('result');



function onOpen() {
    document.getElementById("subscription").style.display = "block";
}

function onClose() {
    document.getElementById('subscription').style.display = "none";
}

function onCancel() {
   
};

function onSubmit() {
    
}

function guess() {
    let number = Math.floor(Math.random() * 10) + 1;
    if ( input = number ) {
        text.innerText = "Good try! You beat me! ";
        text.innerHTML += instruc;
        result.innerText = `The computer chose: ${number} versus your choice: ${input.value}`
    } else {
        text.innerText = "You lost! Refresh the page and try again";
    }
    

    return false;
}

function notAllowed(str) {
    regex = /[+-\s]/
}


