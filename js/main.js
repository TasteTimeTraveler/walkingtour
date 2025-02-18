document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero h2");
    hero.style.opacity = "0";
    hero.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        hero.style.transition = "opacity 1s ease, transform 1s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 500);
});
