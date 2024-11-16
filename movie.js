document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.movie-poster-img');
    let current = 0;

    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    function showImage(index) {
        images.forEach((img, idx) => {
            img.style.display = (idx === index) ? 'block' : 'none';
        });
    }

    function nextImage() {
        current = (current + 1) % images.length; // Increment and wrap around
        showImage(current);
    }

    function prevImage() {
        current = (current - 1 + images.length) % images.length; // Decrement and wrap around
        showImage(current);
    }

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Optionally, you can still keep the automatic slide show:
    setInterval(nextImage, 3000); // Change image every 3000 milliseconds (3 seconds)
});
