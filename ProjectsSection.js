const ProjectsSection = {
    template: `
        <section class="projects">
            <h2>My Projects</h2>
            <div class="projects-grid">
                <article v-for="project in projects" :key="project.id" class="project-card">
                    <div class="project-image">
                        <img :src="project.image" :alt="project.title">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a :href="project.github" target="_blank" class="project-link" v-if="project.github">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a :href="project.demo" target="_blank" class="project-link" v-if="project.demo">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                        <div class="project-tech">
                            <span v-for="tech in project.technologies" 
                                  :key="tech" 
                                  class="tech-tag">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    `,
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: "Personal Portfolio",
                    description: "A responsive portfolio website built with Vue.js showcasing my projects and skills.",
                    image: "img/portfolio.jpg",
                    github: "https://github.com/yourusername/portfolio",
                    demo: "https://yourportfolio.com",
                    technologies: ["Vue.js", "CSS3", "HTML5"]
                },
                {
                    id: 2,
                    title: "Task Manager App",
                    description: "A full-stack task management application with real-time updates.",
                    image: "img/taskmanager.jpg",
                    github: "https://github.com/yourusername/taskmanager",
                    technologies: ["Node.js", "Express", "MongoDB", "React"]
                },
                // Add more projects as needed
            ]
        };
    }
};
