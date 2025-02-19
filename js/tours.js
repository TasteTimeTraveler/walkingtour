document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("languageSelector");
    const toursContainer = document.querySelector(".tours-grid");

    function loadTours(lang) {
        fetch("data/tours.json")
            .then(response => response.json())
            .then(data => {
                if (!data[lang] || !Array.isArray(data[lang].tours)) {
                    throw new Error("Formato incorrecto o datos faltantes en el JSON.");
                }

                document.title = data[lang].toursTitle;
                document.getElementById("toursHeading").textContent = data[lang].toursHeading;
                document.getElementById("toursDescription").textContent = data[lang].toursDescription;
                document.getElementById("footerText").textContent = data[lang].footerText;

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

    languageSelector.addEventListener("change", (event) => {
        loadTours(event.target.value);
    });

    loadTours("es"); // Idioma por defecto
});
