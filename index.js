const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thank-you");
const buttonSubmit = document.getElementById("submit");
const buttonRateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".rates");

buttonSubmit.addEventListener("click", () => {
  thankYou.classList.remove("hidden");
  mainContainer.style.display = "none";
});
buttonRateAgain.addEventListener("click", () => {
  thankYou.classList.add("hidden");
  mainContainer.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  }); 
});
 