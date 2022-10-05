let color = 'black';
let click = true;


function populateBoard(size) {
let board = document.querySelector('.board');
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
let numDivs = size * size;
let divs = board.querySelectorAll('div');
divs.forEach((div) => div.remove());


for (let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    board.insertAdjacentElement('beforeend', div);
    div.addEventListener('mouseover', colorSquare);
    }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    populateBoard(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

function colorSquare() {
if(click) {
    if(color === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}  else {
    this.style.backgroundColor = color;
        }
    }
}
function changeColor(choice) {
    color = choice;
}

function reset() {
    let board = document.querySelector('.board');
    let divs = board.querySelectorAll('div');
    divs.forEach((div) => (div.style.backgroundColor = 'white'))
}

document.querySelector('body').addEventListener('click', () => {
    click = !click;
})






