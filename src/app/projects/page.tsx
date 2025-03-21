import Link from 'next/link';

const projects = [
  {
    title: 'AI Research Project',
    description: 'A project focused on AI research and development.',
    link: '/projects/ai-research',
  },
  {
    title: 'Handwritten Digits Recognition',
    description: 'Developing a machine learning model for data analysis.',
    link: '/projects/digits',
  },
  {
    title: 'NLP Application',
    description: 'Creating an application using natural language processing.',
    link: '/projects/nlp-app',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 container">
      <h1 className="text-4xl font-bold text-center text-crimson mb-4">Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link key={index} href={project.link} passHref>
            <div
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              // onClick={() => handleCardClick(project.link)}
            >
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
