// JavaScript for the slideshow
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}
//Show the slides
function showSlides(n) {
    const slides = document.querySelectorAll('.mySlides');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach((slide) => (slide.style.display = 'none'));
    slides[slideIndex - 1].style.display = 'block';
}
