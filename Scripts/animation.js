document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.progress-container').forEach((container) => {
            const rect = container.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                // La barra de habilidades está visible - añadir clase para iniciar animación
                container.querySelector('.skill-fill').classList.add('start-fill');
            }
        });
    });
});
