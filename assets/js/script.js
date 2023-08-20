document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    let timer; // Define the timer variable here
  
    showSlides(slideIndex);
  
    function plusSlides(n) {
      clearInterval(timer);
      showSlides(slideIndex += n);
    }
  
    window.currentSlide = function(n) {
      clearInterval(timer);
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
      timer = setInterval(function() { plusSlides(1); }, 3000); // Assign the interval to the timer variable here
    }
  });