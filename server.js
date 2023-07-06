
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
const ratingEls = document.querySelectorAll(".rating")
let selectedRating = "";

ratingEls.forEach((ratingEl) => { //this is how you target each class with same name
    ratingEl.addEventListener("click", (event) => {//fat arrow functions
        removeActive();//this is how you get text from html page
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active"); //this how you add class in html 
        event.target.parentNode.classList.add("active");

    })
})
function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active")
    }
    )
}
function clicked() {
    if (selectedRating !== "") {
        containerEl.innerHTML = `
        <strong>Thank you ! </strong>
        <br/>
        <br/>
        <Strong>Feedback : ${selectedRating}</strong>
        <br/>
        <br/>
        <p>We'll use your  feedback to improve our customer support</p>

        `
    }
}
const btnclicked = btnEl.addEventListener("click", clicked)