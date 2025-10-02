const images = ['/img/1.jpg', '/img/2.jpg', '/img/3.jpg','/img/4.jpg','/img/5.jpg']

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image')
const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')
const dotsContainer = document.getElementById('dots-container')

function showImage(){
    sliderImage.src = images[currentIndex]
}

function prevImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length
    showImage()
}
function nextImage(){
    currentIndex = (currentIndex + 1 ) % images.length
    showImage()
}

nextButton.addEventListener('click', nextImage)
prevButton.addEventListener('click', prevImage)

let autoSlideInterval 
const slideDuration = 2000

function startAutoSlide(){
    autoSlideInterval = setInterval(nextImage, slideDuration)
}

function stopAutoSlide(){
    clearInterval(autoSlideInterval)
}

window.onload = function () {
    showImage();
    startAutoSlide()    
}