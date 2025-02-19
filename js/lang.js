document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");

    function setLanguage(lang) {
        fetch("data/lang.json")
            .then(response => response.json())
            .then(data => {
                if (data[lang]) {
                    const translations = data[lang];

                    // Elementos que necesitan traducción
                    const elements = {
                        siteTitle: "title",
                        heroTitle: "title",
                        heroDescription: "description",
                        heroButton: "buttonTours",
                        menuHome: "menuHome",
                        menuTours: "menuTours",
                        menuGallery: "menuGallery",
                        menuReviews: "menuReviews",
                        menuPartners: "menuPartners",
                        menuContact: "menuContact",
                        highlightsTitle: "toursTitle",
                        highlight1Title: "highlight1Title",
                        highlight1Description: "highlight1Description",
                        highlight2Title: "highlight2Title",
                        highlight2Description: "highlight2Description",
                        toursTitle: "toursTitle",
                        toursDescription: "toursDescription",
                        tourPrice: "tourPrice",
                        tourButton: "tourButton",
                        footerText: "footerText"
                    };

                    // Aplicar las traducciones si los elementos existen
                    for (let id in elements) {
                        const element = document.getElementById(id);
                        if (element) {
                            element.textContent = translations[elements[id]];
                        }
                    }
                }
            })
            .catch(error => console.error("Error al cargar las traducciones:", error));
        
        // Guardar idioma seleccionado
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
