import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "../data/galleryImages";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(galleryImages);

  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const current = images[index];
  const prev = images[(index - 1 + images.length) % images.length];
  const next = images[(index + 1) % images.length];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-12 flex items-center justify-center">
      {/* Left blurred preview */}
      <div className="absolute left-0 h-64 w-1/4 hidden sm:flex items-center justify-start blur-sm opacity-50 z-0">
        <img
          src={prev.src}
          alt="Previous"
          className="object-cover h-48 rounded-xl"
        />
      </div>

      {/* Main image */}
      <div className="relative z-10 w-full sm:w-2/3 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.picture
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="w-full h-64 overflow-hidden rounded-2xl shadow-lg"
          >
            {current.webpSrc && (
              <source srcSet={current.webpSrc} type="image/webp" />
            )}
            <img
              src={current.src}
              alt={current.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.picture>
        </AnimatePresence>
      </div>

      {/* Right blurred preview */}
      <div className="absolute right-0 h-64 w-1/4 hidden sm:flex items-center justify-end blur-sm opacity-50 z-0">
        <img
          src={next.src}
          alt="Next"
          className="object-cover h-48 rounded-xl"
        />
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-20"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-20"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default ImageCarousel;
