let score = 0;
let computer_score = 0
let img = document.querySelectorAll('img');
let choices = ['rock', 'paper', 'scissors'];
let userSelection;
let user_score = document.querySelector('#score');
let computer_scores = document.querySelector('#computer-score');

img.forEach((img) => {
    img.addEventListener('click', () => {
        userSelection = img.id;
        check(userSelection);
        console.log(userSelection);
    });
});

const check = (userSelection) => {
    const computerChoices = () => {
        const computer_choose = Math.floor(Math.random() * choices.length);
        return choices[computer_choose];
    }

    computer_choice = computerChoices();
    console.log(computer_choice);

    if (userSelection === computer_choice) {
        let newElement = document.querySelector('#hint');
        newElement.innerText = "TIE";
    }
    else if (
        (userSelection === "rock" && computer_choice === "scissors") ||
        (userSelection === "paper" && computer_choice === "rock") ||
        (userSelection === "scissors" && computer_choice === "paper")) {
        let newElement = document.querySelector('#hint');
        newElement.innerText = "You Win !!";
        score += 1;
    }
    else {
        let newElement = document.querySelector('#hint');
        newElement.innerText = "You Lose !!";
        computer_score += 1;
    }

    user_score.innerText = `Your Score is ${score}`;
    computer_scores.innerText = `Computer Score is ${computer_score}`;

};

const reset = () => {
    score = 0;
    computer_score = 0;
    user_score.innerText = `Your Score is ${score}`;
    computer_scores.innerText = `Computer Score is ${computer_score}`;
    let newElement = document.querySelector('#hint');
    newElement.innerText = '';
}


