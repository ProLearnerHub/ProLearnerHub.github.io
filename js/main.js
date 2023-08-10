window.addEventListener('load', () => {
// everything here

const toInsertYear = document.querySelector("#year");
const year = new Date().getFullYear();

toInsertYear.textContent = year;
});