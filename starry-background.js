function createFireflies() {
    const firefliesContainer = document.createElement('div');
    firefliesContainer.className = 'fireflies';

    for (let i = 0; i < 120; i++) {
        createFirefly(firefliesContainer);
    }

    const animatedBg = document.querySelector('.animated-background');
    if (animatedBg) {
        animatedBg.appendChild(firefliesContainer);
    }
}

function createFirefly(container) {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';
    firefly.style.left = `${Math.random() * 100}%`;
    firefly.style.top = `${Math.random() * 100}%`;
    firefly.style.setProperty('--duration', `${6 + Math.random() * 8}s`);
    firefly.style.setProperty('--delay', `${Math.random() * 6}s`);
    firefly.style.setProperty('--size', `${2 + Math.random() * 3}px`);
    container.appendChild(firefly);
}
