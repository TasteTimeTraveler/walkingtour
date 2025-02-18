document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-item img");
    images.forEach(img => {
        img.addEventListener("click", function () {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `<div class="modal-content">
                                  <span class="close">&times;</span>
                                  <img src="${img.src}" alt="${img.alt}">
                               </div>`;
            document.body.appendChild(modal);
            
            modal.querySelector(".close").addEventListener("click", function () {
                modal.remove();
            });

            modal.addEventListener("click", function (e) {
                if (e.target === modal) modal.remove();
            });
        });
    });
});
