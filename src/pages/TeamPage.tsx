import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { teamMembers } from "../data/teamMembers";
import { useScrollToTop } from "../hooks/scrollTop";

const TeamPage = () => {
  useScrollToTop();
  const [typedText, setTypedText] = useState("");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const fullText = "Meet the AI Club Team";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      alert("Your browser doesn't support clipboard copy.");
    }
  };

  return (
    <motion.div
      className="bg-white min-h-screen px-6 py-16 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#990000] min-h-[3rem]">
          {typedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          The people behind the vision — combining passion, creativity, and
          technical skill to shape the future of AI at the University of
          Alabama.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.03,
              rotate: 0.3,
              transition: { duration: 0.2 },
            }}
            className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-[#990000] shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#990000]">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 mb-1">{member.position}</p>
            {member.major && (
              <p className="text-sm text-gray-600">Major: {member.major}</p>
            )}
            {member.hometown && (
              <p className="text-sm text-gray-600 mb-1">
                Hometown: {member.hometown}
              </p>
            )}
            <p className="text-sm text-gray-700 mt-2 mb-3">{member.bio}</p>

            {/* Email with copy on click */}
            <button
              onClick={() => handleCopyEmail(member.email)}
              className="text-sm text-blue-600 hover:underline cursor-pointer transition-colors duration-200 bg-transparent border-none p-0 z-10 relative"
              title="Click to copy"
            >
              {copiedEmail === member.email ? "Copied!" : member.email}
            </button>

            <div className="absolute inset-0 rounded-2xl bg-[#990000] opacity-0 group-hover:opacity-10 transition duration-300 z-0" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamPage;
