// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(max, min),
    guessesLeft = 3;

console.log(winningNum);
// Create winningNum
function getRandomNum(max, min){
    return Math.round(Math.random() * (max - min) + min);
}
// Game Elements
const game = document.getElementById('game'),
      maxNum = document.querySelector('.max-num'),
      minNum = document.querySelector('.min-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message ');

// Assign UI min and max
minNum.textContent = min,
maxNum.textContent = max;

// Add event listener
guessBtn.addEventListener('click', function(){
    // convert guess input from string to number
    const guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess<min || guess>max){
        setMessage(`Please Enter a Number Between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum){
        // Game Over - won
        gameOver(true, `${winningNum} is correct, YOU WIN!!`);
    }else{
        guessesLeft -=1;
        if(guessesLeft > 0){
            // Game Continue - Wrong Answer
            guessInput.value = '';
            guessInput.style.borderColor = 'red';
            setMessage(`Your Input is Wrong, ${guessesLeft} Guesses Left`, 'red');
        }else{
            // Game Over - Lose
            gameOver(false, `Game Over, the correct number was ${winningNum}`);
    
        }
    }
    
});

// Game Over
function gameOver(won, msg){
    let color;
    (won === true)? color ='green': color = 'red'; 
        // guessInput.value = '';
        guessInput.disabled = true;
        guessInput.style.borderColor = color;
        guessBtn.value = 'Play Again';
        setMessage(msg, color);

        // Play The Game Again
        guessBtn.addEventListener('mousedown', function(){
            window.location.reload();
        });
        
        

}

// Message Function
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg; 
}