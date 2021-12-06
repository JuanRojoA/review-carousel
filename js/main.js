const imageElement = document.querySelector(".image");
const nameElement = document.querySelector(".reviewer-name");
const jobElement = document.querySelector(".reviewer-job");
const reviewElement = document.querySelector(".review");
const rightBtn = document.querySelector("#right-btn");
const leftBtn = document.querySelector("#left-btn");
const randomBtn = document.querySelector("#random-btn");
let jsonData;
let arrayLength;
let count = 0;

async function readJSON() {
  let response;
  response = await fetch("../data.json");
  jsonData = await response.json();
  arrayLength = await jsonData.reviews.length;
  renderReview();
}

function renderReview() {
  let render = () => {
    imageElement.src = jsonData.reviews[count].picture;
    nameElement.textContent = jsonData.reviews[count].name;
    jobElement.textContent = jsonData.reviews[count].job;
    reviewElement.textContent = jsonData.reviews[count].review;
  };
  if (count < arrayLength && count >= 0) {
    render();
  } else if (count >= 6) {
    count = 0;
    render();
  } else if (count < 0) {
    count = arrayLength - 1;
    render();
  }
}

rightBtn.addEventListener("click", () => {
  count++;
  renderReview();
});

leftBtn.addEventListener("click", () => {
  count--;
  renderReview();
});

randomBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 6);
  count = randomNumber;
  console.log(randomNumber);
  renderReview();
});

readJSON();
