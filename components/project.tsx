"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface Icon {
  icon: React.ReactNode;
  name: string;
  color: string; // Added color property for icons
}

interface Stat {
  value: string | number;
  label: string;
}

import { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: StaticImageData[];
  icons: Icon[];
  stats: Stat[];
  githubLink: string;
}

export default function Project({
  title,
  subtitle,
  description,
  longDescription,
  tags,
  imageUrl,
  icons,
  stats,
  githubLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const [currentImage, setCurrentImage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Auto slideshow effect
  useEffect(() => {
    if (imageUrl.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageUrl.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [imageUrl.length]);

  // Hydration fix: Ensures the component renders only on the client side
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100); // Adds a small delay to fix hydration mismatch
    return () => clearTimeout(timer);
  }, []);

  // Image change handler
  const handleImageChange = (index: number) => {
    setCurrentImage(index);
  };

  // If not mounted, skip render
  if (!isMounted) return null;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group relative z-10 max-w-full"
    >
      <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200/50 dark:border-neutral-800/50 bg-white dark:bg-neutral-900">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400">
                {title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base md:text-lg mt-1">
                {subtitle}
              </p>
            </div>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800/70 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaGithub className="text-lg sm:text-xl" />
              <span className="text-sm sm:text-base font-medium">GitHub</span>
            </a>
          </div>
        </div>

        {/* Image Carousel - Single improved version */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
          {imageUrl.map((img, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImage ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`${title} screenshot ${index + 1}`}
                  fill
                  className="object-contain bg-neutral-50 dark:bg-neutral-800"
                  priority={index === 0}
                />
              </div>
            </motion.div>
          ))}
          {imageUrl.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
              {imageUrl.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "bg-teal-400 scale-125"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}
          {/* Gradient overlay for better text visibility on images */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Details */}
        <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <p className="text-neutral-800 dark:text-neutral-100 text-sm sm:text-base md:text-lg font-medium">
              {description}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm md:text-base">
              {longDescription}
            </p>
          </div>

          {/* Icons with colors */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {icons.map((icon, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/40 hover:bg-neutral-200 dark:hover:bg-neutral-700/60 transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  borderLeft: `3px solid ${icon.color}` 
                }}
              >
                <div className="text-lg sm:text-xl" style={{ color: icon.color }}>
                  {icon.icon}
                </div>
                <span className="text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-medium">
                  {icon.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="px-4 sm:px-5 py-2 sm:py-3 rounded-xl text-center bg-neutral-100 dark:bg-neutral-800/40 shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-teal-500 dark:text-teal-400">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm bg-neutral-100 dark:bg-neutral-800/50 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700/70 transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.1, rotate: -1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}