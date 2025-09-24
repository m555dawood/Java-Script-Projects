document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.image-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const images = document.querySelectorAll('.image-slider img');
    const totalImages = images.length;

    function updateSlider() {
        const slideWidth = images[0].clientWidth;
        slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateSlider();
    });


});