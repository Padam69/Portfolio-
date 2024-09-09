document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    const scrollLinks = document.querySelectorAll('nav a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Lightbox Gallery
    const portfolioItems = document.querySelectorAll('.portfolio-item img');
    portfolioItems.forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close">&times;</span>
                    <img src="${this.src}" alt="${this.alt}">
                </div>
            `;
            document.body.appendChild(lightbox);

            // Close lightbox on click
            const closeBtn = lightbox.querySelector('.close');
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });

            // Close lightbox on click outside image
            lightbox.addEventListener('click', function(event) {
                if (event.target === lightbox) {
                    document.body.removeChild(lightbox);
                }
            });
        });
    });
});
