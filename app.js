const gameBoard = document.getElementById('game-board')
const gameSquares = document.querySelectorAll('#game-square')
const submitButton = document.querySelector('.submit-button')
const clearButton = document.querySelector('.clear-button')
let player1Score= 0;
let player2Score = 0;

gameSquares.forEach((squares, squaresIndex) => {
    const squareButton = document.createElement('div');
    squareButton.setAttribute('id', 'square-button')
    squareButton.classList.add('square-button' + squaresIndex)
    squares.append(squareButton)
})

const squareButton = document.querySelectorAll('#square-button')

console.log(squareButton)

squareButton.forEach((button, index) => {
    button.addEventListener('click',() => {
        if (button.textContent === '') {
            button.textContent = 'X'
        } else if (button.textContent ==='X') {
            button.textContent = 'O'
        } 
        else if (button.textContent ==='O') {
            button.textContent = ''
        }  
               
    } )
})

function checkWinner() {
    squareButton[0].textContent === 'X' 
    && squareButton[1].textContent === 'X'
    && squareButton[2].textContent === 'X'
    ? player1Score++ : null
    ||
    squareButton[0].textContent === 'O' 
    && squareButton[1].textContent === 'O'
    && squareButton[2].textContent === 'O'
    ? player2Score++ : null
    squareButton[3].textContent === 'X' 
    && squareButton[4].textContent === 'X'
    && squareButton[5].textContent === 'X'
    ? player1Score++ : null
    ||
    squareButton[3].textContent === 'O' 
    && squareButton[4].textContent === 'O'
    && squareButton[5].textContent === 'O'
    ? player2Score++ : null
    squareButton[6].textContent === 'X' 
    && squareButton[7].textContent === 'X'
    && squareButton[8].textContent === 'X'
    ? player1Score++ : null
    ||
    squareButton[6].textContent === 'O' 
    && squareButton[7].textContent === 'O'
    && squareButton[8].textContent === 'O'
    ? player2Score++ : null


    squareButton[0].textContent === 'X' 
    && squareButton[3].textContent === 'X'
    && squareButton[6].textContent === 'X'
    ? player1Score++ : null
    ||
    squareButton[0].textContent === 'O' 
    && squareButton[3].textContent === 'O'
    && squareButton[6].textContent === 'O'
    ? player2Score++ : null
    squareButton[1].textContent === 'X' 
    && squareButton[4].textContent === 'X'
    && squareButton[7].textContent === 'X'
    ? player1Score++ : null
    ||
    squareButton[1].textContent === 'O' 
    && squareButton[4].textContent === 'O'
    && squareButton[7].textContent === 'O'
    ? player2Score++ : null
    squareButton[2].textContent === 'X' 
    && squareButton[5].textContent === 'X'
    && squareButton[8].textContent === 'X'
    ? player1Score++ : null
    ||
    squareButton[2].textContent === 'O' 
    && squareButton[5].textContent === 'O'
    && squareButton[8].textContent === 'O'
    ? player2Score++ : null
    

    squareButton[0].textContent === 'X' 
    && squareButton[4].textContent === 'X'
    && squareButton[8].textContent === 'X'
    ? player1Score++ : null
    ||
    squareButton[0].textContent === 'O' 
    && squareButton[4].textContent === 'O'
    && squareButton[8].textContent === 'O'
    ? player2Score++ : null
    squareButton[2].textContent === 'X' 
    && squareButton[4].textContent === 'X'
    && squareButton[6].textContent === 'X'
    ? player1Score++ : null
    ||
    squareButton[2].textContent === 'O' 
    && squareButton[4].textContent === 'O'
    && squareButton[6].textContent === 'O'
    ? player2Score++ : null
}

function clearBoard() {
    for(let i = 0; i < squareButton.length; i++) {
        squareButton[i].textContent = ''
    }
}

submitButton.addEventListener('click', () => {
    checkWinner()
} )

clearButton.addEventListener('click', () => {
    clearBoard()
} )