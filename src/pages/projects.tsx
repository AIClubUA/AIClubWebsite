import { useRouter } from "next/router";

const projects = [
  {
    title: "AI Research Project",
    description: "A project focused on AI research and development.",
    link: "/projects/ai-research",
  },
  {
    title: "Handwritten Digits Recognition",
    description: "Developing a machine learning model for data analysis.",
    link: "/projects/digits",
  },
  {
    title: "NLP Application",
    description: "Creating an application using natural language processing.",
    link: "/projects/nlp-app",
  },
];

export default function Projects() {
  const router = useRouter();

  const handleCardClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-crimson mb-6">
          Our Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => handleCardClick(project.link)}
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
