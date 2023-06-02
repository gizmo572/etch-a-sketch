// const container = document.getElementsByClassName('container');


function createGrid(num) {
    let percentage = 100 / num;

    let count = 0;
    while (count < num**2) {
        count++;
        const newDiv = document.createElement('div');

        newDiv.classList.add('square');
        newDiv.style.flexBasis = percentage + '%';
        newDiv.style.paddingBottom = percentage + '%';
        document.querySelector('.container').appendChild(newDiv);

    }
}

createGrid(64)

// document.getElementById('submit').addEventListener('click', () => {
//     createGrid(document.getElementById('size').value);
//     console.log(size)
// })

document.querySelectorAll('.square').forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('hovered');
    })
})
