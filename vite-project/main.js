const squaresContainer = document.getElementById('squares');
const clearButton = document.getElementById('clear');
const eraserButton = document.getElementById('eraser');

let eraserMode = false;

function createGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    const newDiv = document.createElement('div');
    squaresContainer.appendChild(newDiv);

    newDiv.addEventListener('mouseover', function(event) {
      if (eraserMode) {
        event.target.style.backgroundColor = 'lightgrey';
      } else {
        event.target.style.backgroundColor = 'darkgray';
      }
    });
  }
}

createGrid();

function toggleEraserMode() {
  eraserMode = !eraserMode;
  eraserButton.classList.toggle('active');
}

clearButton.addEventListener('click', function() {
  const gridSquares = document.querySelectorAll('#squares div');
  gridSquares.forEach(square => {
    square.style.backgroundColor = 'lightgray';
  });
  eraserMode = false;
  eraserButton.classList.remove('active');
});

eraserButton.addEventListener('click', toggleEraserMode);