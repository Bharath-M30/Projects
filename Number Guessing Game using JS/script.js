
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
let guess;
let attempts = 0;

let running = true;

while(running){

    guess = window.prompt(`Guess a number between 1 and 100`);
    guess = Number(guess);

    if(isNaN(guess)){
        alert("Please enter a valid number!");
    }
    else if( guess > maxNum || guess < minNum ){
        alert("Please enter a valid number");
    }
    else{

        attempts++;

        if( guess < answer ){
            alert("TOO LOW! Try again")
        }
        else if( guess > answer ){
            alert("TOO HIGH! Try again");
        }
        else{
            alert(`You GOT IT! The correct answer is ${answer}, Number of attempts:${attempts}`);
            running = false;
        }
    }

}