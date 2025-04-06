let random_number = Math.floor(Math.random() * 100) + 1;
let input = document.querySelector('#check_number');
let newElement = document.querySelector('#help');
let chance_info = document.querySelector('#chances');
let chances = 0;


const checknumber = () => {
    if (input.value === '') {
        alert("Enter any number  !!")
        return;
    }
    chances += 1;
    chance_info.innerText = `You have ${10 - chances} chances`;
    if (random_number === parseInt(input.value)) {
        newElement.innerText = (`You Won the game in ${chances} chances  `);
        input.disabled = true;
        document.querySelector('#button').disabled = true;
    }
    else if (random_number > parseInt(input.value)) {
        newElement.innerText = ("To Low !!");
    }
    else if (random_number < parseInt(input.value)) {
        newElement.innerText = ("To High !! ");
    }
    if (chances === 10 && userGuess !== random_number) {
        newElement.innerText = `Game Over! You Lost! The number was ${random_number}`;
        input.disabled = true;
        button.disabled = true;
    }
    input.value = '';
};
