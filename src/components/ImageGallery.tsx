import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { galleryImages as allImages } from "../data/galleryImages";

type ImageItem = {
  src: string;
  webpSrc?: string;
  alt: string;
};

type ImageGalleryProps = {
  limit?: number;
  shuffle?: boolean;
  title?: string;
};

const ImageGallery = ({ limit, shuffle = false, title }: ImageGalleryProps) => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching images
    const fetchImages = () => {
      let imgs = [...allImages];
      if (shuffle) imgs = imgs.sort(() => Math.random() - 0.5);
      if (limit) imgs = imgs.slice(0, limit);
      setImages(imgs);
      setLoading(false);
    };

    const timeout = setTimeout(fetchImages, 500); // Simulated delay
    return () => clearTimeout(timeout);
  }, [limit, shuffle]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-10 text-[#990000]">
          {title}
        </h2>
      )}

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {Array.from({ length: limit || 6 }).map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-2xl shadow-md" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 bg-white"
            >
              <picture>
                {img.webpSrc && (
                  <source srcSet={img.webpSrc} type="image/webp" />
                )}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </picture>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
