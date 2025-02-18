document.addEventListener("DOMContentLoaded", function () {
    const tours = document.querySelectorAll(".tour");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // Evita que se repita la animación
                }
            });
        },
        { threshold: 0.3 }
    );

    tours.forEach(tour => {
        observer.observe(tour);
    });
});
