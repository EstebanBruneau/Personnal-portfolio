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
                    degree: "Computer Science and Mathematics Engineering",
                    school: "Polytech - Paris-Saclay University",
                    period: "2023 - Present",
                    description: "Engineering degree with Apprenticeship",
                    highlights: [
                        "Focus on Computer Science and Mathematics",
                        "Professional experience through apprenticeship program"
                    ]
                },
                {
                    degree: "Engineering Preparatory Program",
                    school: "Saint-Aspais High School - Melun",
                    period: "2021 - 2023",
                    description: "Preparatory classes for engineering schools",
                    highlights: []
                },
                {
                    degree: "Baccalauréat with honors",
                    school: "Saint-Aspais High School - Melun",
                    period: "2019 - 2021",
                    description: "Mathematics & Physics/Chemistry specialty",
                    highlights: [
                        "European Mention - Spanish",
                        "Graduated with honors"
                    ]
                }
            ]
        };
    }
};
