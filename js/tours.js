document.addEventListener("DOMContentLoaded", function () {
    fetch("data/tours.json")
        .then(response => response.json())
        .then(data => {
            const toursContainer = document.getElementById("toursContainer");

            data.tours.forEach(tour => {
                const tourCard = document.createElement("div");
                tourCard.classList.add("tour-card");

                tourCard.innerHTML = `
                    <img src="${tour.image}" alt="${tour.title}">
                    <h3>${tour.title}</h3>
                    <p><strong id="tourPrice">Precio:</strong> ${tour.price}</p>
                    <button class="details-btn" id="tourButton">Más detalles</button>
                `;

                toursContainer.appendChild(tourCard);
            });
        })
        .catch(error => console.error("Error al cargar los tours:", error));
});
