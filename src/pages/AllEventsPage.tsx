import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { events, EventType } from "../data/clubEvents";
import { useScrollToTop } from "../hooks/scrollTop";

const EVENTS_PER_PAGE = 6;

const AllEventsPage = () => {
  useScrollToTop();

  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");
  const [currentPage, setCurrentPage] = useState(1);

  const fullTitle = "All events";
  const [typedTitle, setTypedTitle] = useState("");

  const now = new Date();

  const filteredAndSorted: EventType[] = [...events]
    .filter((e) =>
      filter === "upcoming" ? new Date(e.date) >= now : new Date(e.date) < now
    )
    .sort((a, b) =>
      filter === "upcoming"
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  const totalPages = Math.ceil(filteredAndSorted.length / EVENTS_PER_PAGE);
  const paginatedEvents = filteredAndSorted.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  const formatDate = (dateStr: string) =>
    new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  return (
    <motion.div
      className="min-h-screen px-6 py-16 bg-white text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#990000] min-h-[3rem]">
          {typedTitle} <span className="animate-pulse">|</span>
        </h1>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setFilter("upcoming")}
            className={`px-4 py-2 rounded-lg transition font-medium ${
              filter === "upcoming"
                ? "bg-[#990000] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter("past")}
            className={`px-4 py-2 rounded-lg transition font-medium ${
              filter === "past"
                ? "bg-[#990000] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Past
          </button>
        </div>
      </div>

      {/* Event cards */}
      {paginatedEvents.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {paginatedEvents.map((event, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#990000] mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {formatDate(event.date)}
                </p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                {event.link && (
                  <a
                    href={event.link}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Learn More →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No {filter} events found.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            ← Prev
          </button>
          <span className="text-gray-700 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default AllEventsPage;
