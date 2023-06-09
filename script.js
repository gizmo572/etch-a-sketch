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
        newDiv.style.backgroundColor = 'rgba(0,0,0,0.1)';

        container.appendChild(newDiv);

    }
}

// createGrid(64)

const enter = document.getElementById('enter');

enter.addEventListener('click', () => {
    size = document.getElementById('size').value;
    if (size <= 100) {
        createGrid(size);
    } else alert('Please choose a size of 100 or less!')
})


container.addEventListener('mouseover', (e) => {
    
    // const r = Math.floor(Math.random() * 256);
    // const g = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256);
    // e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    let opacity = parseFloat(e.target.style.backgroundColor.split(")")[0].split(', ')[3]) + 0.1;
    e.target.style.backgroundColor = `rgb(0, 0, 0, ${opacity})`;
})
