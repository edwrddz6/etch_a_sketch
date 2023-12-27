const squaresContainer = document.getElementById('squares');

for (let i = 0; i< 16 * 16; i++) {
    const newDiv = document.createElement('div');
    squaresContainer.appendChild(newDiv);

    newDiv.addEventListener('mouseover', function() {
      newDiv.style.backgroundColor = 'black';
    });
}