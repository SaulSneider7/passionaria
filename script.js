// JavaScript para ocultar el preloader después de 3 segundos
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0'; // Desvanece el preloader
        // Mantiene el preloader oculto después de la animación
        setTimeout(() => {
            preloader.style.visibility = 'hidden'; // Oculta el preloader
        }, 3000); // 3 segundos, debe coincidir con la duración de la transición
    }, 3000); // 3000 milisegundos = 3 segundos
});


// Selección de los elementos del DOM necesarios para la funcionalidad del modal
const BtnAbrirModal = document.querySelector("#btn_open_modal");
const BtnCerrarModal = document.querySelector("#btn_close_modal");
const Modal = document.querySelector("#modal");

// Evento para abrir el modal cuando se hace clic en el botón "Ubicación del local"
BtnAbrirModal.addEventListener("click", () => {
    // Eliminar la clase de cierre y añadir la clase de apertura
    Modal.classList.remove('hide');
    Modal.classList.add('show');
    Modal.showModal();
});

// Evento para cerrar el modal cuando se hace clic en el botón de cierre
BtnCerrarModal.addEventListener("click", () => {
    // Añadir la clase de cierre y eliminar la clase de apertura
    Modal.classList.remove('show');
    Modal.classList.add('hide');
    // Esperar a que termine la animación de cierre antes de cerrar el modal
    Modal.addEventListener('animationend', () => {
        if (Modal.classList.contains('hide')) {
            Modal.close();
        }
    }, { once: true });
});
