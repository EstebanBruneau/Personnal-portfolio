const HeroSection = {
    template: `
        <div class="hero">
            <div class="hero-content">
                <div class="hero-image">
                    <img src="img/profile.jpg" alt="Profile picture">
                </div>
                <div class="hero-text">
                    <h1>Hi, I'm Esteban Bruneau</h1>
                    <h2>Engineering Student in Computer Science</h2>
                    <p></p>
                    <div class="hero-social">
                        <a href="https://github.com/EstebanBruneau" target="_blank" class="social-link">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/esteban-bruneau" target="_blank" class="social-link">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:esteban.bruneau77@gmail.com" class="social-link">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                    <button class="cta-button" @click="navigateToProjects">View my work</button>
                </div>
            </div>
        </div>
    `,
    methods: {
        navigateToProjects() {
            const heroContent = document.querySelector('.hero-content');
            heroContent.classList.add('transitioning');
            
            setTimeout(() => {
                this.$root.lastTab = 'Projects';
                this.$root.currentTab = 'Projects';
                this.$root.selectedTab = 'Projects';
                
                // Wait for next tick to ensure projects section is mounted
                this.$nextTick(() => {
                    const projects = document.querySelector('.projects');
                    if (projects) {
                        projects.classList.add('transitioning');
                        setTimeout(() => {
                            projects.classList.remove('transitioning');
                        }, 25); // Reduced from 50
                    }
                });
            }, 300); // Reduced from 600
        }
    }
};
