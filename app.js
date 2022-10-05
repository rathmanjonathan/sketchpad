let color = 'black'

function populateBoard(size) {
let board = document.querySelector('.board');

board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let numDivs = size * size;



for (let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    board.insertAdjacentElement('beforeend', div);
    div.addEventListener('mouseover', colorSquare);
    
    }
}
populateBoard(16);

function changeSize(input) {
    if(input < 1 || input > 100) {
        populateBoard(input)
     }
    else {
        console.log('INVALID SELECTION');
        
    }
    
}

function colorSquare() {
    if(color === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}  else {
    this.style.backgroundColor = color;
    }
}
function changeColor(choice) {
    color = choice;
}







