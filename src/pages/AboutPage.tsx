import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { aboutPageData } from "../data/aboutContent";
import { useScrollToTop } from "../hooks/scrollTop";

const AboutPage = () => {
  useScrollToTop();
  const [typedText, setTypedText] = useState("");
  const fullText = aboutPageData.heading;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="bg-white text-gray-800 px-6 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header with typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-center text-[#990000] mb-4 min-h-[3rem]">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-center text-lg text-gray-700">
            {aboutPageData.intro}
          </p>
        </motion.div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto"
        >
          <img
            src={aboutPageData.teamImage}
            alt="AI Club Team"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Two Column Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* What We Do */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-[#990000] mb-4">
              What We Do
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {aboutPageData.whatWeDo.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Why Join */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-[#990000] mb-4">
              Why Join?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {aboutPageData.whyJoin.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Ready to join us?</h3>
          <a
            href="#contact"
            className="inline-block bg-[#990000] text-white px-6 py-3 rounded-lg hover:bg-red-800 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
