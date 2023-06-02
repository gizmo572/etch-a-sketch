// const container = document.getElementsByClassName('container');
const container = document.querySelector('.container');


function createGrid(num) {
    container.innerHTML = '';

    let percentage = 100 / num;

    let count = 0;
    while (count < num**2) {
        count++;
        const newDiv = document.createElement('div');

        newDiv.classList.add('square');
        newDiv.style.flexBasis = percentage + '%';
        newDiv.style.paddingBottom = percentage + '%';
        container.appendChild(newDiv);

    }
}

// createGrid(64)

const enter = document.getElementById('enter');
let size;

enter.addEventListener('click', () => {
    createGrid(document.getElementById('size').value);
    console.log(size)
})

container.addEventListener('mouseover', (e) => {
    e.target.classList.add('hovered');
})
