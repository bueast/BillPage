const coverLetterButton = document.querySelector('.cover-let');
const coverLetter = document.querySelector('.cover-letter-gap');

const homeButton = document.querySelector('.name');
const home = document.querySelector('.main-section');

const myPastButton = document.querySelector('.my-past');
const myPast = document.querySelector('.my-past-section');

coverLetterButton.addEventListener('click', () => coverLetter.scrollIntoView({
    behavior: "smooth"
}));

homeButton.addEventListener('click', () => home.scrollIntoView({
    behavior: "smooth"
}));

myPastButton.addEventListener('click', () => myPast.scrollIntoView({
    behavior: "smooth"
}));