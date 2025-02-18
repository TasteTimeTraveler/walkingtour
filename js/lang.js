document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");

    function setLanguage(lang) {
        fetch("data/lang.json")
            .then(response => response.json())
            .then(data => {
                if (data[lang]) {
                    document.getElementById("siteTitle").textContent = data[lang].title;
                    document.getElementById("toursTitle").textContent = data[lang].toursTitle;
                    document.getElementById("toursDescription").textContent = data[lang].toursDescription;
                    document.getElementById("tourPrice").textContent = data[lang].tourPrice;
                    document.getElementById("tourButton").textContent = data[lang].tourButton;

                    // Cambiar textos del menú
                    document.getElementById("menuHome").textContent = data[lang].menuHome;
                    document.getElementById("menuTours").textContent = data[lang].menuTours;
                    document.getElementById("menuGallery").textContent = data[lang].menuGallery;
                    document.getElementById("menuReviews").textContent = data[lang].menuReviews;
                    document.getElementById("menuPartners").textContent = data[lang].menuPartners;
                    document.getElementById("menuContact").textContent = data[lang].menuContact;
                }
            });
        
        // Guardar la preferencia en localStorage
        localStorage.setItem("selectedLanguage", lang);
    }

    // Leer el idioma guardado y aplicarlo
    const savedLanguage = localStorage.getItem("selectedLanguage") || "es";
    languageSelector.value = savedLanguage;
    setLanguage(savedLanguage);

    // Cambiar idioma al seleccionar en el menú
    languageSelector.addEventListener("change", function () {
        setLanguage(this.value);
    });
});
