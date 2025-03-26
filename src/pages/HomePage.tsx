import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/heroSection";
import Events from "../components/clubEvents";
import { useScrollToTop } from "../hooks/scrollTop";
import Gallery from "../components/ImageGallery";

const HomePage = () => {
  useScrollToTop();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = location.state?.scrollTarget;
    if (scrollTo) {
      const timeout = setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          navigate(location.pathname, { replace: true, state: {} });
        }
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [location, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <div id="events" className="scroll-mt-20">
        <Events />
      </div>

      <Gallery />
    </motion.div>
  );
};

export default HomePage;
