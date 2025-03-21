import Image from 'next/image';
import Link from 'next/link';

const newevents = [
  {
    title: 'Suprise Guest Speaker and Agentic AI',
    date: 'Thursday, March 20th',
    time: '5:30 - 6:30 PM',
    desc: 'A deeper look into how neural networks function and are trained.',
    link: '/events/Agentic',
    imgSrc: '/eventimages/agentic.avif',
  },
];
const oldevents = [
  {
    title: 'Kickoff Meeting',
    date: 'Thursday, February 27th',
    time: '5:00 - 6:00 PM',
    desc: 'Join us for our first meeting of the semester to discuss upcoming events and opportunities and hear from AI Professionals!',
    link: '/events/kickoff',
    imgSrc: '/eventimages/kickoff.jpg',
  },
  {
    title: 'Python and AI Intro',
    date: 'Thursday, March 6th',
    time: '5:30 - 6:30 PM',
    desc: 'Join us in Northeast Medical Center for a Introductory workshop on Python and AI!',
    link: '/events/pythonintro',
    imgSrc: '/eventimages/pythonintro.webp',
  },
];

export default function Events() {
  return (
    <div className="p-8 text-center container">
      <h1 className="text-4xl font-bold text-crimson">Upcoming Events</h1>
      <p className="mt-4">Stay tuned for exciting AI workshops, hackathons, and guest lectures.</p>

      {newevents.map((event, index) => (
        <Link
          key={index}
          href={event.link.toLowerCase()}
          className="block mt-6 bg-gray-100 p-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
          style={{ maxWidth: '90%', margin: '20px auto' }}
        >
          <div className="relative w-full h-[200px] rounded-md mb-3">
            <Image src={event.imgSrc} alt={event.title} fill objectFit="cover" />
          </div>
          <h2 className="text-2xl font-semibold">{event.title}</h2>
          <p className="mt-2 text-lg">📅 {event.date}</p>
          <p className="text-lg">⏰ {event.time}</p>
          <p className="mt-2">{event.desc}</p>
        </Link>
      ))}
      <h1 className="text-4xl font-bold text-crimson">Past Events</h1>

      {oldevents.map((event, index) => (
        <Link
          key={index}
          href={event.link.toLowerCase()}
          className="block mt-6 bg-gray-100 p-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
          style={{ maxWidth: '90%', margin: '20px auto' }}
        >
          <div className="relative w-full h-[200px] rounded-md mb-3">
            <Image src={event.imgSrc} alt={event.title} fill objectFit="cover" />
          </div>
          <h2 className="text-2xl font-semibold">{event.title}</h2>
          <p className="mt-2 text-lg">📅 {event.date}</p>
          <p className="text-lg">⏰ {event.time}</p>
          <p className="mt-2">{event.desc}</p>
        </Link>
      ))}
      <div className="mt-8">
        <p className="text-sm text-gray-500">
          For more information, contact us at <a href="mailto:info@example.com">crbarbaccia@crimson.ua.edu</a>
        </p>
      </div>
    </div>
  );
}
