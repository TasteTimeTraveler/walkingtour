document.addEventListener("DOMContentLoaded", () => {
    const toursContainer = document.querySelector(".tours-list");

    // Cargar datos desde JSON
    fetch("data/tours.json")
        .then(response => response.json())
        .then(tours => {
            tours.forEach(tour => {
                const tourCard = document.createElement("div");
                tourCard.classList.add("tour-card");
                tourCard.innerHTML = `
                    <img src="${tour.image}" alt="${tour.name}">
                    <h3>${tour.name}</h3>
                    <p>${tour.description}</p>
                    <span class="price">${tour.price}</span>
                    <a href="detalle.html?tour=${encodeURIComponent(tour.name)}" class="btn">Más detalles</a>
                `;
                toursContainer.appendChild(tourCard);
            });
        })
        .catch(error => console.error("Error al cargar los tours:", error));
});
