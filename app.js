var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const player_p = document.querySelector(".player-choice > p");
const comp_p = document.querySelector(".comp-choice > p");
const result_p = document.querySelector(".results > p");
const reset_btn = document.getElementById("resetbtn");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function startOfGame() {
    result_p.innerHTML = "Choose your move";


}
startOfGame();



function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];

}


function convertToWord(letter) {
    if (letter == "r") {
        return "Rock";
    } else if (letter == "s") {
        return "Scissors";
    } else if (letter == "p") {
        return "Paper";
    }
}




function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    player_p.innerHTML = `You: ${convertToWord(userChoice)}`;
    comp_p.innerHTML = `Computer: ${convertToWord(computerChoice)}`;
    result_p.innerHTML = `You WIN this round!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() =>
        userChoice_div.classList.remove('green-glow'), 350);
};


function lose(userChoice, computerChoice) {

    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    player_p.innerHTML = `You: ${convertToWord(userChoice)}`;
    comp_p.innerHTML = `Computer: ${convertToWord(computerChoice)}`;
    result_p.innerHTML = `You LOSE this round!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() =>
        userChoice_div.classList.remove('red-glow'), 350);



};

function draw(userChoice, computerChoice) {

    const userChoice_div = document.getElementById(userChoice);
    player_p.innerHTML = `You: ${convertToWord(userChoice)}`;
    comp_p.innerHTML = `Computer: ${convertToWord(computerChoice)}`;
    result_p.innerHTML = `TIE! Make your move again!`;
    document.getElementById(userChoice).classList.add('yellow-glow');
    setTimeout(() =>
        userChoice_div.classList.remove('yellow-glow'), 350);

}




function game(userChoice) {
    const computerChoice = getComputerChoice();
    if (userScore == 5) {
        return alert('YOU WIN THE GAME!');
        reset();
    } else if (compScore == 5) {
        return alert('OH NO! YOU LOSE THE GAME! GAME OVER.');
        reset();

    }
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;

    }


}

function reset() {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    player_p.innerHTML = "";
    comp_p.innerHTML = "";
    result_p.innerHTML = "Choose your move";
};


//event listeners

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
    reset_btn.addEventListener('click', () => reset());
};

main();