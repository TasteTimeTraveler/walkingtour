document.addEventListener("DOMContentLoaded", function () {
    const storedLanguage = localStorage.getItem("selectedLanguage") || "es"; // Si no hay un idioma guardado, usa "es"
    
    languageSelector.value = storedLanguage; // Mantener la selección en el `<select>`
    setLanguage(storedLanguage);
    loadTours(storedLanguage);

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
    }

    function loadTours(lang) {
        fetch("data/tours.json")
            .then(response => response.json())
            .then(data => {
                if (!data[lang] || !Array.isArray(data[lang].tours)) {
                    throw new Error("Formato incorrecto o datos faltantes en el JSON.");
                }

                document.getElementById("toursHeading").textContent = data[lang].toursHeading;
                document.getElementById("toursDescription").textContent = data[lang].toursDescription;
                document.getElementById("footerText").textContent = data[lang].footerText;

                const toursContainer = document.querySelector(".tours-grid");
                toursContainer.innerHTML = "";
                data[lang].tours.forEach(tour => {
                    const tourCard = document.createElement("div");
                    tourCard.classList.add("tour");
                    tourCard.innerHTML = `
                        <img src="${tour.img}" alt="${tour.title}">
                        <h3>${tour.title}</h3>
                        <p>${tour.description}</p>
                    `;
                    toursContainer.appendChild(tourCard);
                });
            })
            .catch(error => console.error("Error al cargar los tours:", error.message));
    }
});

