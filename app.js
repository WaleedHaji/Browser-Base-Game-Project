console.log('Remember the Shapes')


/*-------------------------------- Constants --------------------------------*/
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


/*------------------------ Cached Element References ------------------------*/
const allShapeElements = document.querySelectorAll('.shapeBtn')

const startButtonElement = document.querySelector('#startBtn')

const allSequenceBoxEls = document.querySelectorAll('.sqnShapeBox')


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

// ------------------------------------------------
// Start Round Function (calling the Sequence Generator Function & Display Sequence Function)
function startRound() {

    guessPosition = 0;
    guessedSequence = []
    
    generateSequence();
    displaySequence();

    setTimeout(function() {
        hideSequence();
    }, 3000);
    
}

function hideSequence() {
    allSequenceBoxEls.forEach(function(box) {
        box.textContent = '';
    });
}


function handleClickShape(event) {
    if (guessPosition >= 4){
        return compare();
    }

    const playerChoice = event.target.textContent;

    guessedSequence.push(playerChoice);

    allSequenceBoxEls[guessPosition].textContent = playerChoice;

    guessPosition++;

    console.log(guessedSequence);
}

function compare(){
    
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


