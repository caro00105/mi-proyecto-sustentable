// script.js
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    // Mostrar el botón cuando se hace scroll hacia abajo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Función para el smooth scroll al hacer clic en el botón
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
