const showPopupBtn = document.querySelector("button");
const closePopupBtn = document.querySelector("img");


window.addEventListener("DOMContentLoaded", (e) => {
    console.log(e.target.all[14].classList.add("visibility"));
});

showPopupBtn.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle("toggle-popup");
    e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle("visibility");

});

closePopupBtn.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.classList.toggle("toggle-popup");
    e.target.parentElement.parentElement.parentElement.classList.toggle("visibility");
});