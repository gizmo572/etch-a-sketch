// const container = document.getElementsByClassName('container');


function createGrid() {
    let count = 0;
    while (count < 16 * 16) {
        count++;
        const newDiv = document.createElement('div');

        newDiv.classList.add('square');

        document.querySelector('.container').appendChild(newDiv);
    }
}

createGrid();

document.querySelectorAll('.square').forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('hovered');
    })
})