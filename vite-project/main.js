const squaresContainer = document.getElementById('squares');
const gridSizeSlider = document.getElementById('gridSizeSlider');
const gridSizeValue = document.getElementById('gridSizeValue');
const clearButton = document.getElementById('clear');
const eraserButton = document.getElementById('eraser');

let isMouseDown = false;
let eraserMode = false;

function createGrid(size) {
  squaresContainer.innerHTML = '';

  const squareSize = 660 / size;

  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${squareSize}px`;
    newDiv.style.height = `${squareSize}px`;
    newDiv.classList.add('square');
    squaresContainer.appendChild(newDiv);

    newDiv.addEventListener('mousedown', function(event) {
      isMouseDown = true;
      if (eraserMode) {
        event.target.style.backgroundColor = 'lightgrey';
      } else {
        event.target.style.backgroundColor = 'darkgray';
      }
    });

    newDiv.addEventListener('mouseup', function() {
      isMouseDown = false;
    });

    newDiv.addEventListener('mousemove', function(event) {
      if (isMouseDown) {
        if (eraserMode) {
          event.target.style.backgroundColor = 'lightgrey';
        } else {
          event.target.style.backgroundColor = 'darkgray';
        }
      }
    });
  }
}

createGrid(16);

function updateGridSize() {
  const gridSize = gridSizeSlider.value;
  gridSizeValue.textContent = `${gridSize}x${gridSize}`;
  createGrid(gridSize);
}

gridSizeSlider.addEventListener('input', updateGridSize);

function toggleEraserMode() {
  eraserMode = !eraserMode;
  eraserButton.classList.toggle('active');
}

clearButton.addEventListener('click', function() {
  const gridSquares = document.querySelectorAll('#squares div');
  gridSquares.forEach(square => {
    square.style.backgroundColor = 'lightgrey';
  });
  eraserMode = false;
  eraserButton.classList.remove('active');
});

eraserButton.addEventListener('click', toggleEraserMode);