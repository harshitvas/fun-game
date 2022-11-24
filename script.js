const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const pDisplay = document.getElementById("playerDisplay");
const cDisplay = document.getElementById("computerDisplay");
const rDisplay = document.getElementById("resultDisplay");

let computer = ["rock", "paper", "scissor"];

function random(){
    let number = Math.floor(Math.random() * 3);
    return computer[number];
}

// when to display computer generated result 
// when player click any of the three buttons
/*
rules of rock paper scissor
1. rock win -> scissor comes
2. paper win -> rock comes
3. scissor win -> paper comes
4. draw -> when both equals
*/


function generate(value){
    pDisplay.innerHTML = value.id;
    let computerAns = random();
    cDisplay.innerHTML = computerAns;
    let result;
    if(value.id == computerAns){
        result = "Draw"
    }
    else if(value.id == "rock" && computerAns == "scissor"){
        result = "Player"
    }
    else if(value.id == "paper" && computerAns == "rock"){
        result = "Player"
    }
    else if(value.id == "scissor" && computerAns == "paper"){
        result = "Player"
    }
    else{
        result = "Computer";
    }
    rDisplay.innerHTML = result;
}

