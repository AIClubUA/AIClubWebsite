const resources = [
  {
    title: 'AI Research Papers',
    description: 'A collection of research papers on AI.',
    link: 'https://sites.ua.edu/sail/',
  },
  {
    title: 'Machine Learning Tutorials',
    description: 'Tutorials to help you get started with machine learning.',
    link: 'https://developers.google.com/machine-learning/crash-courses',
  },
  {
    title: 'NLP Resources',
    description: 'Resources for learning about natural language processing.',
    link: 'https://www.youtube.com/playlist?list=PLNvQn5fLVQdhWMqZWOdBFBZpKgPdTVGVF',
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 container">
      <h1 className="text-4xl font-bold text-center text-crimson mb-8">Resources</h1>
      <ul className="list-disc list-inside">
        {resources.map((resource, index) => (
          <li key={index} className="mb-4">
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-500 hover:text-black"
            >
              {resource.title}
            </a>
            <p className="text-gray-700">{resource.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
