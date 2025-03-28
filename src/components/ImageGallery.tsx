import { useState } from 'react';
import { galleryImages } from '../data/galleryImages';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryImages)[0]>(null);

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#990000] mb-10">Club Moments</h2>

        {/* Masonry grid layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-2 space-y-2">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="overflow-hidden break-inside-avoid cursor-pointer rounded-xl shadow"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-[90%] rounded-xl overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.webpSrc ? (
                <picture>
                  <source srcSet={selectedImage.webpSrc} type="image/webp" />
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[80vh] object-contain bg-white"
                  />
                </picture>
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain bg-white"
                />
              )}

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow hover:bg-gray-200 transition"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
