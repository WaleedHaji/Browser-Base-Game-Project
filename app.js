console.log('Remember the Shapes')


/*-------------------------------- Constants --------------------------------*/
// const winningMessages = [
//     'Nicely Done!',
//     'Keep Going!',
//     'Big Brain Power!',
//     'Winning!',
//     'Now we are cooking!'
// ];

let guessPosition = 0

const shapeSelections = ['🔺', '🟨', '🟢', '🔷']

let sequence = []

let guessedSequence = []

/* (Another way to randomize the sequences) 
const currentValues = []
    for(let i = 0; i<4; i++){
    currentValues.push(shapeSelections.sort((a,b)=>Math.random()-.5)[0])
    }
shapeSelections.sort((a,b)=>Math.random()-.5)
console.log(currentValues)
*/

/*---------------------------- Variables (state) ----------------------------*/
sqnBlocks = ['', '', '', '']

userPlay = null

message = null

startCountDown = 3

let level = 1

let score = 0

/*------------------------ Cached Element References ------------------------*/
const allShapeElements = document.querySelectorAll('.shapeBtn')

// const startButtonElement = document.querySelector('#startBtn')

const allSequenceBoxEls = document.querySelectorAll('.sqnShapeBox')

const lvlElement = document.querySelector('#stageUpdt')

const highScoreElement = document.querySelector('#stageRecord')

const messageBoxElement = document.querySelector('#messageBox')


/*-------------------------------- Functions --------------------------------*/
// Game Initiation function
function init (){
console.log('game start')


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

// generateSequence();
// console.log(sequence);
// ------------------------------------------------
// Sequence Display Function at start of the round
function displaySequence (){
    sequence.forEach(function(shape, index){
    allSequenceBoxEls[index].textContent = shape})
}

// displaySequence ()

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
        element.disabled = false
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

        score++;
        highScoreElement.textContent = `Highest ${score}`;

        generateWinningMessage()
        const winningMessage = generateWinningMessage();
        messageBoxElement.textContent = winningMessage;
        setTimeout(function() {
        startRound();
            }, 2000);
    }

    else {
    console.log('incorrect');

    messageBoxElement.textContent = 'Sorry, you lost!';

    allShapeElements.forEach((element) => {
        element.disabled = true;
    });
}

}

startRound()
console.log(sequence)
// ------------------------------------------------


// ------------------------------------------------




// ------------------------------------------------
function render (){

}
// ------------------------------------------------



/*----------------------------- Event Listeners -----------------------------*/

for(let oneShapeElement of allShapeElements){
    oneShapeElement.addEventListener('click', handleClickShape)
}


