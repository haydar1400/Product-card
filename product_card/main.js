const firstCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');
const blueColorHash = '#a1d6fa';

changeColorFirstCardButton.addEventListener('click', () => {
    firstCard.style.backgroundColor = blueColorHash;
});

const allCards = document.querySelectorAll('.card');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards-button');
const greenColorHash = '#b4fbb7';

changeColorAllCardsButton.addEventListener('click', () => {
    allCards.forEach((card) => {
        card.style.backgroundColor = greenColorHash;
    });
});

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть страницу Google.com?');
    if (answer === true) {
        window.open('https://www.google.com',);
    } else {
        return;
    }
}

const outputLogButton = document.querySelector('#open-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('Homework #6'));

function outputConsoleLog(message) {
    alert(message)
    console.log(message);
}

const toggleBtn = document.querySelector('#change-color-toggle-btn');

toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('active');
});