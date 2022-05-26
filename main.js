const ratingValueBtns = document.querySelectorAll(".rating-value");
const rating = document.querySelector(".rating");
const submitBtn = document.querySelector(".submit-btn");
const ratingContent = document.querySelector(".rating-content");
const thanksContent = document.querySelector(".thanks-content");

ratingValueBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeActive();
    btn.classList.toggle("active");
    ratingValue = e.target.textContent;
    rating.textContent = ratingValue;
    submitRating();
  });
});

function removeActive() {
  for (ratingBtn of ratingValueBtns) {
    if (ratingBtn.classList.contains("active")) {
      ratingBtn.classList.remove("active");
    }
  }
}

function submitRating() {
  submitBtn.addEventListener("click", () => {
    ratingContent.classList.add("hidden");
    thanksContent.classList.remove("hidden");
    thanksContent.style.display = "flex";
  });
}
