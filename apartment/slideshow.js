// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

slideIndex = 1;

let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
  if (touchendX < touchstartX) {
    plusSlides(-1);
  }
  if (touchendX > touchstartX) {
    plusSlides(1);
  }
}

function startSlideshow(n) {
  let slideIndex = n;

  document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
      plusSlides(1);
    } else if (event.key === "ArrowLeft") {
      plusSlides(-1);
    }
  });

  document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
  })

  document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection();
  })

  showSlides(slideIndex);
}
