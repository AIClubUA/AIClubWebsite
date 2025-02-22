export default function Events() {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">Upcoming Events</h1>
        <p className="mt-4">Stay tuned for exciting AI workshops, hackathons, and guest lectures.</p>
        
        {[
          { title: "Kickoff Meeting", date: "Thursday, February 27th", time: "5:00 - 6:00 PM", desc: "Join us for our first meeting of the semester to discuss upcoming events and opportunities!", link: "/events/kickoff" },
          { title: "Machine Learning Basics", date: "Thursday, March 6th", time: "5:00 - 6:00 PM", desc: "An introduction to machine learning concepts and techniques.", link: "/events/ml-basics" },
          { title: "Neural Networks Deep Dive", date: "Thursday, March 13th", time: "5:00 - 6:00 PM", desc: "A deeper look into how neural networks function and are trained.", link: "/events/neural-networks" },
          { title: "AI Ethics and Bias", date: "Thursday, March 20th", time: "5:00 - 6:00 PM", desc: "A discussion on ethical considerations and bias in AI models.", link: "/events/ai-ethics" }
        ].map((event, index) => (
          <a
            key={index}
            href={event.link}
            className="block mt-6 bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-crimson hover:text-white"
          >
            <h2 className="text-2xl font-semibold">{event.title}</h2>
            <p className="mt-2 text-lg">📅 {event.date}</p>
            <p className="text-lg">⏰ {event.time}</p>
            <p className="mt-2">{event.desc}</p>
          </a>
        ))}
      </div>
    );
  }
  