const counterElement = document.querySelector('#counter');
let counter = 0;

setInterval(function () {
    counter++;
    counterElement.innerText = counter;
}, 1000);


// Старт

// Пауза

// Сброс
