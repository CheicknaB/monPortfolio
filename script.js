function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.classList.contains('visible')) {
        details.classList.remove('visible');
    } else {
        details.classList.add('visible');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-vertical');
    carousels.forEach(carousel => {
        let scrollInterval = setInterval(() => {
            if (carousel.scrollTop + carousel.clientHeight >= carousel.scrollHeight) {
                carousel.scrollTop = 0;
            } else {
                carousel.scrollTop += 1;
            }
        }, 30);
        carousel.addEventListener('mouseenter', () => clearInterval(scrollInterval));
        carousel.addEventListener('mouseleave', () => {
            scrollInterval = setInterval(() => {
                if (carousel.scrollTop + carousel.clientHeight >= carousel.scrollHeight) {
                    carousel.scrollTop = 0;
                } else {
                    carousel.scrollTop += 1;
                }
            }, 30);
        });
    });
});
    