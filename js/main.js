document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero h2");
    hero.style.opacity = "0";
    hero.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        hero.style.transition = "opacity 1s ease, transform 1s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 500);
});

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
        { threshold: 0.2 }
    );

    tours.forEach(tour => {
        observer.observe(tour);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});
