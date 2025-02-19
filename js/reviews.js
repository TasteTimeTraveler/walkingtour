document.addEventListener("DOMContentLoaded", function () {

    const storedLanguage = localStorage.getItem("selectedLanguage") || "es"; // Si no hay un idioma guardado, usa "es"
    
    languageSelector.value = storedLanguage; // Mantener la selección en el `<select>`
    setLanguage(storedLanguage);
    loadTours(storedLanguage);
    
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
