import { useRouter } from 'next/router';

const projects = [
    {
        title: 'AI Research Project',
        description: 'A project focused on AI research and development.',
        link: '/projects/ai-research',
    },
    {
        title: 'Machine Learning Model',
        description: 'Developing a machine learning model for data analysis.',
        link: '/projects/ml-model',
    },
    {
        title: 'NLP Application',
        description: 'Creating an application using natural language processing.',
        link: '/projects/nlp-app',
    },
];

export default function Projects() {
    const router = useRouter();

    const handleCardClick = (link: string) => {
        router.push(link);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center text-crimson mb-4">Our Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                        onClick={() => handleCardClick(project.link)}
                    >
                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}