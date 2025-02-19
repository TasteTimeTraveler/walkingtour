document.addEventListener("DOMContentLoaded", () => {
    const storedLanguage = localStorage.getItem("selectedLanguage") || "es"; // Si no hay un idioma guardado, usa "es"
    
    languageSelector.value = storedLanguage; // Mantener la selección en el `<select>`
    setLanguage(storedLanguage);
    loadTours(storedLanguage);
});

const images = document.querySelectorAll(".zoom-in");

images.forEach(img => {
    observer.observe(img);
});