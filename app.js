function populateBoard(size) {
let board = document.querySelector('.board');

board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let numDivs = size * size;

changeSize();

for (let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    board.insertAdjacentElement('beforeend', div);
    div.style.backgroundColor = 'blue';
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    })
    
    }
}
populateBoard(16);

function changeSize(size) {
    let userInput = prompt('Adjust board size');
}

function randomColor() {
    const btn_randomColor = document.querySelector('.random');
    btn_randomColor.addEventListener('click', (e) => {
        console.log(btn_randomColor);
    })
}





