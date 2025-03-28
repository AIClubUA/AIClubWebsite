import { events, EventType } from '../data/clubEvents';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const splitEvents = (events: EventType[]) => {
  const now = new Date();
  const upcoming = events.filter((e) => new Date(e.date) >= now);
  const past = events.filter((e) => new Date(e.date) < now);
  return { upcoming, past };
};

const EventCard = ({ event, index }: { event: EventType; index: number }) => {
  // Fix for date offset issue by forcing local time parsing
  const formattedDate = new Date(event.date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 0.4,
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: index * 0.05,
      }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md overflow-hidden text-left"
    >
      <motion.img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold text-[#990000] mb-2"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {event.title}
        </motion.h3>
        <p className="text-sm text-gray-500 mb-2">{formattedDate}</p>
        <p className="text-gray-700 mb-4">{event.description}</p>
        {event.link && (
          <a href={event.link} className="text-blue-600 hover:underline font-medium">
            Learn More →
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ClubEvents = () => {
  const { upcoming, past } = splitEvents(events);
  const maxVisible = 3;

  return (
    <section id="events" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Upcoming Events */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
        </div>
        {upcoming.length > 0 ? (
          <>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6">
              {upcoming.slice(0, maxVisible).map((event, index) => (
                <EventCard key={index} event={event} index={index} />
              ))}
            </div>
            {upcoming.length > maxVisible && (
              <div className="text-center">
                <Link to="/events" className="text-[#990000] font-medium underline hover:text-red-800 transition">
                  See all upcoming events →
                </Link>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 mb-16">No upcoming events right now.</p>
        )}

        {/* Past Events */}
        <div className="text-center mt-20 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Past Events</h2>
        </div>
        {past.length > 0 ? (
          <>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6">
              {past.slice(0, maxVisible).map((event, index) => (
                <EventCard key={index} event={event} index={index} />
              ))}
            </div>
            {past.length > maxVisible && (
              <div className="text-center">
                <Link to="/events" className="text-[#990000] font-medium underline hover:text-red-800 transition">
                  See all past events →
                </Link>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500">No past events yet.</p>
        )}
      </div>
    </section>
  );
};

export default ClubEvents;
