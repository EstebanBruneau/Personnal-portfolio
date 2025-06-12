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
                    title: 'Software Engineer/Business Intelligence Engineer',
                    company: 'Carrefour Headquarters - Massy, France',
                    period: '2023 - Present',
                    description: 'Software development and business intelligence engineering in an enterprise environment',
                    achievements: [
                        'Designed interactive dashboards in Looker Studio to centralize and visualize cloud costs, improving the accuracy of cost reporting by more than 10%, and halved the time required to access costs',
                        'Mapped business processes for the Carrefour France HR department using the APQC Process Classification Framework, identifying at least 5 duplicate and useless processes',
                        'Handled the maintenance of an internal application (Java/Angular) used by 400 collaborators monthly, including updates, bug fixes, and tests',
                        'Developed and automated weekly reports for IT architects, leveraging data from HOPEX, Google Analytics, and internal surveys, resulting in a 20% improvement of France IT Department\'s data completeness'
                    ]
                },
                {
                    title: 'IT Support Technician/Systems Administrator',
                    company: 'CentraleSupélec - Gif-Sur-Yvette, France',
                    period: 'June - July 2021',
                    description: 'Internship position providing IT support and system administration',
                    achievements: [
                        'Deployed software remotely to over 120 machines using Ivanti, creating silent installation and uninstallation packages',
                        'Provided on-site maintenance and troubleshooting in multiple classrooms and lecture halls, effectively communicating with teachers to resolve hardware issues'
                    ]
                }
            ]
        };
    }
};
