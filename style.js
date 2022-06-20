const arrowDown = document.querySelectorAll(".question img");
const answers = document.querySelectorAll(".item p");
const questions = document.querySelectorAll(".question");
const h2s = document.querySelectorAll(".question h2");

for (let i=0; i<arrowDown.length; i++) {
    answers[i].classList.add("hide");
    h2s[i].classList.add("grayish");
    arrowDown[i].addEventListener('click', function(){
    answers[i].classList.toggle("hide");
    h2s[i].classList.toggle("grayish");
    arrowDown[i].classList.toggle("upDown");
    })
}
