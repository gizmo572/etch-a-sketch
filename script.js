// const container = document.getElementsByClassName('container');


function createGrid() {
    let count = 0;
    while (count < 16) {
        count++;
        const newDiv = document.createElement('div');

        newDiv.classList.add('square');

        document.querySelector('.container').appendChild(newDiv);
    }
}

createGrid();

