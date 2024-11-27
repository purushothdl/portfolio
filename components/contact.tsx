"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:achethanreddy1921@gmail.com">
          achethanreddy1921@gmail.com
        </a>{" "}
        or through the form below.
      </p>

      {/* Embedded Tally Form with Curved Borders and Padding */}
      <div
        className="mt-10 overflow-hidden"
        style={{
          borderRadius: "10px", // Curved borders
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
          padding: "20px", // Add padding around the iframe
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional background for better padding visibility
        }}
      >
        <iframe
          data-tally-src="https://tally.so/embed/meNG2J?alignLeft=1&hideTitle=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="400"
          title="Contact Me"
          style={{
            backgroundColor: "transparent", // Ensures the background blends with your site theme
            border: "none", // Removes iframe border for a seamless look
          }}
        ></iframe>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </div>
    </motion.section>
  );
}
