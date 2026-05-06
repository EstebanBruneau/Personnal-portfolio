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
        title: "Genetic Algorithm AI Dominoes",
        description: "Created a neural network AI player for the game of Dominoes using a custom-built evolutionary algorithm. The AI demonstrated impressive learning capabilities, eventually surpassing human performance in this pseudo-random game environment.",
        image: "",
        github: "https://github.com/EstebanBruneau/Genetic-Algorithm-AI-Dominoes-game",
        demo: "",
        technologies: ["Python", "Genetic Algorithms", "Machine Learning", "Neural Networks"]
    },
    {
        id: 2,
        title: "C Compiler",
        description: "Developed a compiler for a subset of the C language as a school project. The compiler handles most language features including functions, loops, pointers, and structures, making it capable of compiling simple code. Includes a lexer, parser, semantic analysis, and code generation components.",
        image: "",
        github: "https://github.com/EstebanBruneau/C-Compiler",
        demo: "",
        technologies: ["Python", "Compiler Design", "C Language", "Parsing"]
    },
    {
        id: 3,
        title: "4D Tic-Tac-Toe Game",
        description: "Developed a functional 4D Tic-Tac-Toe game with plans for online multiplayer and AI player integration. This challenging project explores four-dimensional game mechanics and strategic gameplay.",
        image: "",
        github: "",
        demo: "",
        technologies: ["JavaScript", "Game Development", "4D Graphics", "Web Technologies"]
    },
    {
        id: 4,
        title: "SAT Sudoku Solver",
        description: "A Sudoku solver using SAT (Satisfiability) developed for the 'Logic Problem Solving' class at Polytech Paris-Saclay. The project encodes Sudoku rules as CNF formulas and uses pycosat to solve the puzzles.",
        image: "",
        github: "https://github.com/AlexZeGamer/SAT-Sudoku-solver",
        demo: "",
        technologies: ["Python", "SAT Solving", "Logic Programming", "CNF", "Tkinter"]
    },
    {
        id: 5,
        title: "GuessTheNumber AI",
        description: "A number guessing game that implements artificial intelligence techniques to predict user choices and adapt its strategy.",
        image: "",
        github: "https://github.com/EstebanBruneau/Genetic-Algorithm-AI-GuessTheNumber-game",
        demo: "",
        technologies: ["Python", "Genetic Algorithms", "Machine Learning"]
    }
]
        };
    }
};
