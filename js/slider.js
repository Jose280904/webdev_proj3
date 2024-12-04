let currentSlide = 0;

function showSlide(slideIndex) {
  const slides = document.querySelectorAll(".slide");
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  currentSlide = slideIndex;

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

  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", previousSlide);
});

function init() {
  const el = document.getElementById("canvas");
  if (!el) {
    console.error("Canvas element not found.");
    return;
  }

  const myLocation = new google.maps.LatLng(41.835117, -87.627130);
  const mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  const myMap = new google.maps.Map(el, mapOptions);

  const marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'iit-icon.png'
  });

  const contentString = '<h1>IIT Perlstein Hall</h1><p>Lorem ipsum dolor sit amet...</p>';

  const infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('mouseover', () => {
    infowindow.open(myMap, marker);
  });
}

window.addEventListener("load", init);
