const QuestionSection = {
    template: `
        <section class="question-section">
            <button class="relax-back" @click="goBack" type="button">Back to map</button>
            <div class="void-space">
                <p class="void-message">You've wandered off the map.</p>
                <div class="void-pulse"></div>
            </div>
        </section>
    `,
    methods: {
        goBack() {
            // Return to the last visited tab
            this.$root.currentTab = this.$root.lastTab;
            this.$root.selectedTab = this.$root.lastTab;
        },
        transitionToVoidBackground() {
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
                }, 6000);
            }
        }
    },
    mounted() {
        this.transitionToVoidBackground();
    },
    beforeUnmount() {
        this.transitionToSkyBackground();
    }
};
