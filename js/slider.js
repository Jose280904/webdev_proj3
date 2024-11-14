let currentSlide = 0;

function showSlide(slideIndex) {
  const slides = document.querySelectorAll(".slide");
  if (slideIndex >= slides.length) currentSlide = 0;
  if (slideIndex < 0) currentSlide = slides.length - 1;

  slides.forEach(slide => slide.style.display = "none");
  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  document.getElementById("next").addEventListener("click", nextSlide);
  document.getElementById("prev").addEventListener("click", previousSlide);
});
