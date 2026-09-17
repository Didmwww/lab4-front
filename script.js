// =========================
// Завдання 1: Зміна кольорів
// =========================

const n = 1; // Задай тут номер свого варіанту
const targetIndex1 = (n % 10) + 1;
const targetIndex2 = targetIndex1 + 1;

// Знаходимо елементи різними методами
const el1 = document.getElementById(`el-${targetIndex1}`);
const el2 = document.querySelector(`#el-${targetIndex2}`);

// Функція для перемикання кольорів
function toggleColors(element, bgCol, textCol) {
    if (!element) return;
    
    // Перевіряємо, чи вже встановлено колір
    if (element.style.backgroundColor === bgCol) {
        element.style.backgroundColor = ''; // Скидаємо колір фону
        element.style.color = '';           // Скидаємо колір тексту
    } else {
        element.style.backgroundColor = bgCol;
        element.style.color = textCol;
    }
}

// Додаємо обробники подій для кліку
if (el1) {
    el1.addEventListener('click', () => toggleColors(el1, '#3498db', '#ffffff'));
}

if (el2) {
    el2.addEventListener('click', () => toggleColors(el2, '#2ecc71', '#000000'));
}


// =========================
// Завдання 2: Керування зображенням
// =========================

const imgContainer = document.querySelector('#image-container a');
const btnAdd = document.getElementById('add-btn');
const btnIncrease = document.getElementById('increase-btn');
const btnDecrease = document.getElementById('decrease-btn');
const btnDelete = document.getElementById('delete-btn');

// Кнопка "Додати"
btnAdd.addEventListener('click', () => {
    // Перевіряємо, чи зображення ще не існує
    if (!document.getElementById('city-image')) {
        const newImg = document.createElement('img');
        newImg.src = 'img/cher.jpg'; // Шлях до зображення
        newImg.alt = 'Панорама міста Чернівці';
        newImg.id = 'city-image';
        imgContainer.appendChild(newImg);
    }
});

// Кнопка "Видалити"
btnDelete.addEventListener('click', () => {
    const img = document.getElementById('city-image');
    if (img) {
        img.remove();
    }
});

// Кнопка "Збільшити"
btnIncrease.addEventListener('click', () => {
    const img = document.getElementById('city-image');
    if (img) {
        // Отримуємо поточну ширину та збільшуємо на 50px
        const currentWidth = img.clientWidth;
        img.style.width = (currentWidth + 50) + 'px';
    }
});

// Кнопка "Зменшити"
btnDecrease.addEventListener('click', () => {
    const img = document.getElementById('city-image');
    if (img) {
        const currentWidth = img.clientWidth;
        // Зменшуємо на 50px, але не менше ніж 50px загалом
        if (currentWidth > 100) {
            img.style.width = (currentWidth - 50) + 'px';
        }
    }
});