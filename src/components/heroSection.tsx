import { motion } from 'motion/react';

const HIGHLIGHT = (text: string) => <span className="text-[#990000] font-semibold">{text}</span>;

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 min-h-screen flex items-center justify-center px-4 pt-12 pb-12 overflow-hidden">
      {/* Background image */}
      <motion.img
        src="/group_meeting.webp"
        alt="AI Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Blur only behind text */}
      <div className="absolute top-0 left-0 w-full h-full md:w-1/2 md:inset-y-0 md:h-auto bg-white/60 backdrop-blur-md z-0" />

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome to the <span className="text-[#990000] font-extrabold">University of Alabama</span> AI Club
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-700">
            Join us to explore the future of {HIGHLIGHT('Artificial Intelligence')}! Our club is dedicated to fostering
            a community of {HIGHLIGHT('AI enthusiasts')}, providing opportunities for {HIGHLIGHT('learning')},{' '}
            {HIGHLIGHT('collaboration')}, and {HIGHLIGHT('innovation')}. Whether you are a {HIGHLIGHT('beginner')} or an{' '}
            {HIGHLIGHT('expert')}, we have something for everyone. Participate in {HIGHLIGHT('workshops')},
            {HIGHLIGHT('hackathons')}, and {HIGHLIGHT('guest lectures')} to enhance your skills and network with
            like-minded individuals. Let's shape the future of {HIGHLIGHT('AI')} together!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#events"
              className="px-6 py-3 bg-[#990000] text-white rounded-lg font-medium hover:bg-red-800 transition text-center"
            >
              Explore Events
            </a>
            <a
              href="#join"
              className="px-6 py-3 border border-[#990000] text-[#990000] rounded-lg font-medium hover:bg-red-50 transition text-center"
            >
              Join the Club
            </a>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="flex justify-center md:justify-end"
        >
          <img src="/Alabama_Logo.png" alt="AI Illustration" className="w-full max-w-md rounded-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
