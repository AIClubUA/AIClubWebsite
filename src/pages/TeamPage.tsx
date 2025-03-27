import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { teamMembers, TeamMember } from "../data/teamMembers";
import { useScrollToTop } from "../hooks/scrollTop";

// Agrupar miembros por tipo de rol
const groupMap: Record<string, string[]> = {
  "Executive Team": [
    "President",
    "Vice President",
    "Executive Coordinator",
    "Investor Relations",
  ],
  "Graduate Advisors": ["Graduate Advisor"],
  "Faculty Advisor": ["Faculty Advisor"],
  Developers: ["Executive Developer", "Software Developer"],
};

// Agrupar automáticamente según `groupMap`
const groupMembers = () => {
  const groups: Record<string, TeamMember[]> = {};
  for (const [group, roles] of Object.entries(groupMap)) {
    groups[group] = teamMembers.filter((m) => roles.includes(m.position));
  }
  return groups;
};

const TeamPage = () => {
  useScrollToTop();
  const fullText = "Meet the AI Club Team";
  const [typedText, setTypedText] = useState("");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const groups = groupMembers();

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
    } catch {
      alert("Clipboard copy not supported");
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
      {/* Header */}
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

      {/* Groups */}
      <div className="space-y-12 max-w-6xl mx-auto">
        {Object.entries(groups).map(([group, members]) => {
          const isOpen = expanded[group] ?? false;

          return (
            <div key={group}>
              {/* Group Header */}
              <button
                onClick={() =>
                  setExpanded((prev) => ({
                    ...prev,
                    [group]: !prev[group],
                  }))
                }
                className="flex items-center justify-between w-full text-left text-2xl font-bold text-[#990000] mb-4"
              >
                {group}
                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              {/* Member cards */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {members.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
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
                        <p className="text-sm text-gray-500 mb-1">
                          {member.position}
                        </p>
                        {member.major && (
                          <p className="text-sm text-gray-600">
                            Major: {member.major}
                          </p>
                        )}
                        {member.hometown && (
                          <p className="text-sm text-gray-600 mb-1">
                            Hometown: {member.hometown}
                          </p>
                        )}
                        <p className="text-sm text-gray-700 mt-2 mb-3">
                          {member.bio}
                        </p>
                        <button
                          onClick={() => handleCopyEmail(member.email)}
                          className="text-sm text-blue-600 hover:underline cursor-pointer bg-transparent border-none p-0 z-10"
                        >
                          {copiedEmail === member.email
                            ? "Copied!"
                            : member.email}
                        </button>
                        <div className="absolute inset-0 rounded-2xl bg-[#990000] opacity-0 group-hover:opacity-10 transition duration-300 z-0" />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TeamPage;
