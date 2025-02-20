const ResumeSection = {
    template: `
        <section class="resume">
            <h2>Professional Experience</h2>
            <ul>
                <li v-for="job in jobs" :key="job.title" class="resume-item">
                    <h3>{{ job.title }}</h3>
                    <p class="company">{{ job.company }}</p>
                    <p class="period">{{ job.period }}</p>
                    <p class="description">{{ job.description }}</p>
                    <ul class="achievements" v-if="job.achievements">
                        <li v-for="achievement in job.achievements" :key="achievement">
                            {{ achievement }}
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            jobs: [
                {
                    title: 'Senior Software Developer',
                    company: 'XYZ Corp',
                    period: 'Jan 2020 - Present',
                    description: 'Lead developer for enterprise web applications focusing on scalability and performance.',
                    achievements: [
                        'Improved application performance by 40%',
                        'Led a team of 5 developers',
                        'Implemented CI/CD pipeline'
                    ]
                },
                {
                    title: 'Frontend Developer',
                    company: 'ABC Inc',
                    period: 'Jun 2018 - Dec 2019',
                    description: 'Developed responsive and accessible web applications using modern frontend technologies.',
                    achievements: [
                        'Built reusable component library',
                        'Reduced loading time by 60%',
                        'Implemented A/B testing framework'
                    ]
                },
                {
                    title: 'Software Engineer Intern',
                    company: 'DEF Ltd',
                    period: 'Jan 2017 - May 2018',
                    description: 'Contributed to the development of internal tools and participated in code reviews.',
                    achievements: [
                        'Developed automated testing suite',
                        'Created documentation system',
                        'Optimized database queries'
                    ]
                }
            ]
        };
    }
};
