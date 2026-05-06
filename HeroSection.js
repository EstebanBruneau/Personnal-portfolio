const HeroSection = {
    template: `
        <div class="hero map-hero">
            <div class="map-card">
                <div class="map-header">
                    <div class="map-title">
                        <p class="eyebrow">Esteban Bruneau</p>
                        <h1>Wander the Worklands</h1>
                        <p class="lead">Pick a biome to explore experience, education, projects, and a quiet night camp.</p>
                        <div class="hero-social">
                            <a href="https://github.com/EstebanBruneau" target="_blank" class="social-link" aria-label="GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/esteban-bruneau" target="_blank" class="social-link" aria-label="LinkedIn">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="mailto:esteban.bruneau77@gmail.com" class="social-link" aria-label="Email">
                                <i class="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                    <div class="map-legend">
                        <div class="legend-item"><span class="legend-dot forest"></span>Experience</div>
                        <div class="legend-item"><span class="legend-dot coast"></span>Projects</div>
                        <div class="legend-item"><span class="legend-dot dunes"></span>Education</div>
                        <div class="legend-item"><span class="legend-dot night"></span>Relax</div>
                    </div>
                </div>
                <div class="map-world" role="presentation">
                    <svg class="map-paths" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M120 130 C220 120, 310 150, 380 220" />
                        <path d="M380 220 C450 280, 520 300, 620 320" />
                        <path d="M620 320 C720 360, 820 340, 900 250" />
                        <path d="M460 110 C520 160, 600 210, 700 220" />
                    </svg>
                    <div class="map-blob forest"></div>
                    <div class="map-blob coast"></div>
                    <div class="map-blob dunes"></div>
                    <div class="map-blob night"></div>
                    <div class="map-camp">
                        <div class="camp-halo"></div>
                        <span>Home Camp</span>
                    </div>
                    <button
                        v-for="node in mapNodes"
                        :key="node.id"
                        class="map-marker"
                        :class="node.theme"
                        :style="{ top: node.top, left: node.left }"
                        @click="navigateToTab(node.tab)"
                        :aria-label="node.label"
                        type="button"
                    >
                        <span class="marker-title">{{ node.label }}</span>
                        <span class="marker-desc">{{ node.description }}</span>
                    </button>
                </div>
                <div class="map-footer">
                    <button class="cta-button" @click="navigateToTab('Projects')" type="button">Open Projects Trail</button>
                    <p class="map-hint">Tip: each marker is a biome. Start anywhere.</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            mapNodes: [
                {
                    id: 'experience',
                    label: 'Forest of Experience',
                    description: 'Roles and impact',
                    tab: 'Experience',
                    top: '18%',
                    left: '18%',
                    theme: 'forest'
                },
                {
                    id: 'projects',
                    label: 'Tidal Workshop',
                    description: 'Featured builds',
                    tab: 'Projects',
                    top: '62%',
                    left: '20%',
                    theme: 'coast'
                },
                {
                    id: 'formation',
                    label: 'Dune Academy',
                    description: 'Studies and training',
                    tab: 'Formation',
                    top: '70%',
                    left: '68%',
                    theme: 'dunes'
                },
                {
                    id: 'relax',
                    label: 'Night Glade',
                    description: 'Soft pause',
                    tab: 'Relax',
                    top: '26%',
                    left: '74%',
                    theme: 'night'
                }
            ]
        };
    },
    methods: {
        navigateToTab(tab) {
            if (!tab) {
                return;
            }
            if (tab === 'Relax') {
                this.$root.lastTab = this.$root.currentTab;
            }
            this.$root.currentTab = tab;
            this.$root.selectedTab = tab;
        }
    }
};
