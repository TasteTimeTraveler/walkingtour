const images = document.querySelectorAll(".zoom-in");

images.forEach(img => {
    observer.observe(img);
});