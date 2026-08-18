console.log('Remember the Shapes')


/*-------------------------------- Constants --------------------------------*/

const shapeSelections = ['🔺', '🟨', '🟢', '🔷']

const highScore = localStorage.getItem('Highest');


/*---------------------------- Variables (state) ----------------------------*/

let level = 1

let score = 0

let guessPosition = 0

let sequence = []

let guessedSequence = []

/*------------------------ Cached Element References ------------------------*/
const allShapeElements = document.querySelectorAll('.shapeBtn')

const allSequenceBoxEls = document.querySelectorAll('.sqnShapeBox')

const lvlElement = document.querySelector('#stageUpdt')

const highScoreElement = document.querySelector('#stageRecord')

const messageBoxElement = document.querySelector('#messageBox')


/*-------------------------------- Functions --------------------------------*/
// Game Initiation function
function init (){
console.log('game start')

    const highScore = localStorage.getItem('Highest');
    
    if(highScore === null) {
       let highScore = 0
       
    }

    highScoreElement.textContent = `Highest ${highScore}`
    console.log(highScore)
    
}

init()

// -----------------------------------------------
// Game Random Sequence Generator
function generateSequence() {
    sequence = [];

    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * shapeSelections.length);
        sequence.push(shapeSelections[randomIndex]);
    }

    return sequence;
}

// generateSequence() is called in start round function;

// ------------------------------------------------
// Sequence Display Function at start of the round
function displaySequence (){
    sequence.forEach(function(shape, index){
    allSequenceBoxEls[index].textContent = shape})
}

// displaySequence () is called in start round function

// ----------------------------------------------------
// Generate Winning Messages

const winningMessages = [
    'Nicely Done!',
    'Keep Going!',
    'Big Brain Power!',
    'Winning!',
    'Now we are cooking!'];

function generateWinningMessage() {
    const randomIndex = Math.floor(Math.random() * winningMessages.length);

    return winningMessages[randomIndex];
}

// ------------------------------------------------
// Start Round Function (calling the Sequence Generator Function & Display Sequence Function)
//                      (setTime out to hide sequence, disable/enable buttons, clicking function)
function startRound() {
    allShapeElements.forEach((element)=>{
        element.disabled = true
    })
    
    guessPosition = 0;
    guessedSequence = []
    
    generateSequence();
    displaySequence();

    setTimeout(function() {
        hideSequence();
            allShapeElements.forEach((element)=>{
        element.disabled = false;
    })
    }, 3000);
    
}

function hideSequence() {
    allSequenceBoxEls.forEach(function(box) {
        box.textContent = '';
    });
}


function handleClickShape(event) {
    
    const playerChoice = event.target.textContent;

    guessedSequence.push(playerChoice);

    allSequenceBoxEls[guessPosition].textContent = playerChoice;

    guessPosition++;

    console.log(guessedSequence);

    if (guessedSequence.length === 4){
        return compare();
    }
}

function compare(){
    console.log('comparing')
    
    if (guessedSequence[0] === sequence[0] &&
        guessedSequence[1] === sequence[1] &&
        guessedSequence[2] === sequence[2] &&
        guessedSequence[3] === sequence[3]) {
        console.log("win")
        
        level++;
        lvlElement.textContent = `Level ${level}`;

        const highScore = localStorage.getItem('Highest');

        score++;
        
        if (highScore === null || score > highScore){
            highScoreElement.textContent = `Highest ${score}`;
            localStorage.setItem('Highest', score);
        }

        allSequenceBoxEls.forEach(function(box){
            box.style.backgroundColor = 'lightgreen'
        });

        generateWinningMessage()
        const winningMessage = generateWinningMessage();
        messageBoxElement.textContent = winningMessage;
        
        setTimeout(function() {
            messageBoxElement.textContent = '';
            allSequenceBoxEls.forEach(function(box){
            box.style.backgroundColor = 'white'
            });
         startRound();
            }, 2000);
    }
    

    else {
    console.log('incorrect');

    messageBoxElement.textContent = 'Sorry, you lost!';

    allShapeElements.forEach((element) => {
        element.disabled = true;
    });

    allSequenceBoxEls.forEach(function(box){
            box.style.backgroundColor = 'tomato'
        });
    }
    
    if (highScore === null || score > highScore){
            localStorage.setItem('Highest', score);
        }

        
}


startRound()
console.log(sequence)


/*----------------------------- Event Listeners -----------------------------*/

for(let oneShapeElement of allShapeElements){
    oneShapeElement.addEventListener('click', handleClickShape)
}


