let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".carousel-images img");
    const totalSlides = slides.length /4;
    
    // Actualiza el índice de la imagen actual
    currentSlide += direction;

    // Si el índice es menor que 0, vuelve al último slide
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    // Si el índice es mayor o igual al total de slides, vuelve al primer slide
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Desplazar las imágenes en el carrusel
    document.querySelector(".carousel-images").style.transform = `translateX(-${currentSlide * 25}%)`;
}

// Mover automáticamente cada 3 segundos
setInterval(() => {
    moveSlide(1); // Avanza 1 slide
}, 3000);



