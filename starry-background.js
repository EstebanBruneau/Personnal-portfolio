function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    
    // Create initial stars
    for (let i = 0; i < 200; i++) {
        createStar(starsContainer);
    }
    
    document.querySelector('.animated-background').appendChild(starsContainer);
    
    // Periodically add/remove stars
    setInterval(() => {
        if (Math.random() > 0.5) {
            createStar(starsContainer);
        }
        // Randomly remove some stars
        const stars = starsContainer.children;
        if (stars.length > 150 && Math.random() > 0.7) {
            stars[Math.floor(Math.random() * stars.length)].remove();
        }
    }, 1000);
}

function createStar(container) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
    star.style.setProperty('--delay', `${Math.random() * 2}s`);
    container.appendChild(star);
}
