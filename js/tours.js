document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("languageSelector");
    const toursContainer = document.querySelector(".tours-grid");

    // Función para cargar los tours desde el JSON
    function loadTours(lang) {
        fetch("js/toursData.json")
            .then(response => response.json())
            .then(data => {
                if (data[lang]) {
                    toursContainer.innerHTML = ""; // Limpiar contenido anterior
                    data[lang].forEach(tour => {
                        const tourCard = document.createElement("div");
                        tourCard.classList.add("tour");
                        tourCard.innerHTML = `
                            <img src="${tour.img}" alt="${tour.title}">
                            <h3>${tour.title}</h3>
                            <p>${tour.description}</p>
                        `;
                        toursContainer.appendChild(tourCard);
                    });
                }
            })
            .catch(error => console.error("Error al cargar los tours:", error));
    }

    // Cambio de idioma
    languageSelector.addEventListener("change", (event) => {
        const selectedLang = event.target.value;
        loadTours(selectedLang);
    });

    // Cargar idioma predeterminado (Español)
    loadTours("es");
});
