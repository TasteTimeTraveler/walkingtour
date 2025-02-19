languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem("selectedLanguage", selectedLanguage); // Guardar idioma en localStorage
    setLanguage(selectedLanguage);
    loadTours(selectedLanguage);
});