// let score = 0;
let numberA = Math.floor(Math.random() * 10);
let numberB = Math.floor(Math.random() * 10);
const inputField = document.getElementById("inputField");
// Now i am set those number in the question element
let questionText = document.getElementById("questionText");
questionText.innerHTML = `  What is ${numberA} multiply by ${numberB}`;
// Now calculate the correct answer
const correctAnswer = numberA * numberB;
const scoreEl = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("Score"));
if (!score) {
  score = 0;
}
scoreEl.innerHTML = `Score:${score}`;
// Now find the form element
const formEl = document.getElementById("form");
formEl.addEventListener("submit", () => {
  const userAnswer = +inputField.value;
  if (userAnswer === correctAnswer) {
    score++;
    updatedLocalStorage();
  } else {
    score--;
    updatedLocalStorage();
  }
});

const updatedLocalStorage = () => {
  localStorage.setItem("Score", JSON.stringify(score));
};
