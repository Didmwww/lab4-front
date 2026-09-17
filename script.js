const n = 8; 
const targetIndex1 = (n % 10) + 1;
const targetIndex2 = targetIndex1 + 1;

const el1 = document.getElementById(`el-${targetIndex1}`);
const el2 = document.querySelector(`#el-${targetIndex2}`);

function toggleColors(element, bgCol, textCol) {
    if (!element) return;
    
    if (element.style.backgroundColor === bgCol) {
        element.style.backgroundColor = ''; 
        element.style.color = ''; 
    } else {
        element.style.backgroundColor = bgCol;
        element.style.color = textCol;
    }
}

if (el1) {
    el1.addEventListener('click', () => toggleColors(el1, '#3498db', '#ffffff'));
}

if (el2) {
    el2.addEventListener('click', () => toggleColors(el2, '#2ecc71', '#000000'));
}

const imgContainer = document.querySelector('#image-container a');
const btnAdd = document.getElementById('add-btn');
const btnIncrease = document.getElementById('increase-btn');
const btnDecrease = document.getElementById('decrease-btn');
const btnDelete = document.getElementById('delete-btn');


btnAdd.addEventListener('click', () => {
    if (!document.getElementById('city-image')) {
        const newImg = document.createElement('img');
        newImg.src = 'img/cher.jpg';
        newImg.alt = 'Панорама міста Чернівці';
        newImg.id = 'city-image';
        imgContainer.appendChild(newImg);
    }
});

btnDelete.addEventListener('click', () => {
    const img = document.getElementById('city-image');
    if (img) {
        img.remove();
    }
});


btnIncrease.addEventListener('click', () => {
    const img = document.getElementById('city-image');
    if (img) {
        const currentWidth = img.clientWidth;
        img.style.width = (currentWidth + 50) + 'px';
    }
});


btnDecrease.addEventListener('click', () => {
    const img = document.getElementById('city-image');
    if (img) {
        const currentWidth = img.clientWidth;
        if (currentWidth > 100) {
            img.style.width = (currentWidth - 50) + 'px';
        }
    }
});
