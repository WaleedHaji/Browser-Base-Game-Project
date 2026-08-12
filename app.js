console.log('Remember the Shapes')


/*-------------------------------- Constants --------------------------------*/
let guessPosition = 0
const shapeSelections = ['triangle', 'square', 'circle', 'diamond']

const currentValues = []
for(let i = 0; i<4; i++){
    currentValues.push(shapeSelections.sort((a,b)=>Math.random()-.5)[0])
}
// shapeSelections.sort((a,b)=>Math.random()-.5)
console.log(currentValues)
/*---------------------------- Variables (state) ----------------------------*/
sqnBlocks = ['', '', '', '']

userPlay = null

message = null

startCountDown = 3


/*------------------------ Cached Element References ------------------------*/
const allShapeElements = document.querySelectorAll('.shapeBtn')

const startButtonElement = document.querySelector('#startBtn')


/*-------------------------------- Functions --------------------------------*/
function init (){
console.log('game start')


}

// function generateSequence() {
//     const sequence = [];

//     for (let i = 0; i < 4; i++) {
//         const randomIndex = Math.floor(Math.random() * shapeSelections.length);
//         sequence.push(shapeSelections[randomIndex]);
//     }

//     return sequence;
// }

// const sequence = generateSequence();
// console.log(sequence);

function render (){

}


/*----------------------------- Event Listeners -----------------------------*/

for(let oneShapeElement of allShapeElements){
    oneShapeElement.addEventListener('click', handleClick)
}

init()
