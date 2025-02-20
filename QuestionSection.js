const QuestionSection = {
    template: `
        <section class="question-section">
            <button @click="goBack">Back</button>
            <div class="moon"></div>
            <div class="fade-in-text">
                Take a moment to relax and breathe
            </div>
            <div class="fade-in-text-2">
                Also smile :)
            </div>
        </section>
    `,
    methods: {
        goBack() {
            // Return to the last visited tab
            this.$root.currentTab = this.$root.lastTab;
            this.$root.selectedTab = this.$root.lastTab;
        },
        transitionToStarryBackground() {
            const skyBg = document.querySelector('.sky-background');
            const animatedBg = document.querySelector('.animated-background');
            
            if (skyBg) skyBg.style.opacity = '0';
            if (animatedBg) {
                animatedBg.style.opacity = '1';
                animatedBg.style.visibility = 'visible';
            }
        },
        transitionToSkyBackground() {
            const skyBg = document.querySelector('.sky-background');
            const animatedBg = document.querySelector('.animated-background');
            
            if (skyBg) skyBg.style.opacity = '1';
            if (animatedBg) {
                animatedBg.style.opacity = '0';
                setTimeout(() => {
                    animatedBg.style.visibility = 'hidden';
                }, 2000); // Changed from 500 to 2000 to match the 2s CSS transition
            }
        }
    },
    mounted() {
        this.transitionToStarryBackground();
    },
    beforeUnmount() {
        this.transitionToSkyBackground();
    }
};
