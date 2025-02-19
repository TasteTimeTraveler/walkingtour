document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("languageSelector");
    const toursContainer = document.querySelector(".tours-grid");

    // Función para cargar los tours desde el JSON
    function loadTours(lang) {
        fetch("data/tours.json") // Asegúrate de que la ruta sea correcta
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (!data || !data[lang] || !Array.isArray(data[lang])) {
                    throw new Error("Formato de JSON incorrecto o datos faltantes");
                }

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
            })
            .catch(error => console.error("Error al cargar los tours:", error.message));
    }

    // Cambio de idioma
    languageSelector.addEventListener("change", (event) => {
        loadTours(event.target.value);
    });

    // Cargar idioma predeterminado (Español)
    loadTours("es");
});
