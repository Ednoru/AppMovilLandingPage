// Obtén el elemento del menú de navegación
const navbar = document.getElementById("navv");

// Obtén la posición inicial del menú
const sticky = navbar.offsetTop;

// Agrega un evento para detectar el scroll
window.addEventListener("scroll", () => {
    // Si el desplazamiento vertical es mayor o igual a la posición inicial
    if (window.scrollY >= sticky) {
        // Agrega una clase para mantener el menú fijo
        navbar.classList.add("sticky");
    } else {
        // Remueve la clase si el desplazamiento es menor
        navbar.classList.remove("sticky");
    }
});
