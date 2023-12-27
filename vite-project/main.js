const squaresContainer = document.getElementById('squares');

for (let i = 0; i< 16; i++) {
  for (let j = 0; j < 16; j++) {
    
    const newDiv = document.createElement('div');

    newDiv.style.width = '30px';
    newDiv.style.height = '30px';
    newDiv.style.backgroundColor = 'lightgrey';

    newDiv.style.border = '1px solid white';

    squaresContainer.appendChild(newDiv);
  }
}