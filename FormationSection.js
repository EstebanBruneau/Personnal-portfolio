const FormationSection = {
    template: `
        <section class="resume formation">
            <h2>Education</h2>
            <transition-group 
                name="list" 
                tag="ul"
                appear
            >
                <li v-for="(education, index) in educationList" 
                    :key="education.degree"
                    :style="{ animationDelay: index * 0.2 + 's' }"
                    class="formation-item"
                >
                    <h3>{{ education.degree }}</h3>
                    <p class="school">{{ education.school }}</p>
                    <p class="period">{{ education.period }}</p>
                    <p class="description">{{ education.description }}</p>
                    <transition-group 
                        name="list" 
                        tag="ul" 
                        class="highlights"
                        appear
                    >
                        <li v-for="highlight in education.highlights" 
                            :key="highlight"
                            v-show="true"
                        >
                            {{ highlight }}
                        </li>
                    </transition-group>
                </li>
            </transition-group>
        </section>
    `,
    data() {
        return {
            educationList: [
                {
                    degree: "Master's in Computer Science",
                    school: "University of Technology",
                    period: "2015 - 2017",
                    description: "Specialized in Software Engineering and Artificial Intelligence",
                    highlights: [
                        "Graduated with honors",
                        "Research project on machine learning applications",
                        "Teaching assistant for programming courses"
                    ]
                },
                {
                    degree: 'Bachelor\'s in Computer Science',
                    school: 'University of Technology',
                    period: '2012 - 2015',
                    description: 'Foundation in computer science and mathematics',
                    highlights: [
                        'Dean\'s list for academic excellence',
                        'Led programming club',
                        'Internship at tech startup'
                    ]
                }
            ]
        };
    }
};
