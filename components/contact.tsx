"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsEnvelopePaper, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5); // Adjust threshold to 0.5

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-6xl mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}  // Reduced amount to 0.1
    >
      {/* Gradient background with improved positioning */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-purple-200 dark:bg-purple-950/30 rounded-full mix-blend-multiply blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-blue-200 dark:bg-blue-950/30 rounded-full mix-blend-multiply blur-3xl opacity-50" />
      </div>

      {/* Main content container with glass effect */}
      <div className="relative z-10 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 rounded-3xl border border-gray-200 dark:border-gray-800/50 p-4 sm:p-8 lg:p-12 shadow-xl overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        </div>

        {/* Section heading with animation */}
        <div className="text-center mb-10">
          <SectionHeading>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              Let's Connect
            </motion.span>
          </SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            I'm always open to new opportunities and interesting projects.
            Let's create something amazing together!
          </motion.p>
        </div>

        {/* Modern two-column layout for larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left column - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700/50 p-4 sm:p-6 shadow-lg w-full"
          >
            <form className="space-y-4 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
  type="submit"
  className="w-full py-3 px-6 bg-gradient-to-r from-[#00b0ff] to-[#a3cdff] text-white font-medium rounded-lg hover:shadow-lg hover:from-[#0099cc] hover:to-[#e6f7ff] transform hover:-translate-y-1 transition-all duration-300"
>
                Send Message
              </button>
            </form>
            
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Available for new opportunities
              </div>
            </div>
          </motion.div>

          {/* Right column - Contact info and social media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Email card */}
            <motion.a
              href="mailto:purushothdl19@gmail.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="group flex items-center gap-4 p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700/50 hover:border-purple-400 dark:hover:border-purple-500/50 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30 transition-colors">
                <BsEnvelopePaper className="text-2xl text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">purushothdl19@gmail.com</p>
              </div>
            </motion.a>

            {/* Social media grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {[
              { 
                icon: BsLinkedin, 
                label: "LinkedIn", 
                color: "linkedin", // LinkedIn Blue: #0077B5
                href: "https://www.linkedin.com/in/dl-purushoth-b2a5a52a7/" 
              },
              { 
                icon: BsGithub, 
                label: "GitHub", 
                color: "github", // GitHub Black: #181717 (using gray-900 as approximation)
                href: "https://github.com/purushothdl" 
              },
              { 
                icon: FaXTwitter, 
                label: "Twitter", 
                color: "twitter", // Twitter/X Black: #000000 (using sky-900 as approximation)
                href: "#" 
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="group flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-5 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700/50 hover:border-blue-400 dark:hover:border-blue-500/50 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 aspect-square"
              >
                <div className={`p-2 sm:p-3 bg-${social.color}-100 dark:bg-${social.color}-900/30 rounded-lg group-hover:bg-${social.color}-200 dark:group-hover:bg-${social.color}-800/30 transition-colors`}>
                  <social.icon className={`text-xl sm:text-2xl text-${social.color}-600 dark:text-${social.color}-400`} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{social.label}</span>
              </motion.a>
            ))}
                        </div>
            {/* Quick Response card with glowing gradient background */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="relative p-4 sm:p-6 rounded-xl overflow-hidden shadow-lg"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-white/10 to-blue-500/10 dark:from-blue-500/5 dark:via-white/5 dark:to-blue-500/5 animate-gradient-x"></div>
              
              {/* Glass effect overlay */}
              <div className="absolute inset-0 backdrop-blur-sm bg-white/60 dark:bg-gray-800/60"></div>
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Quick Response</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      I typically respond within 24 hours. Looking forward to our conversation!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Remove the racing light styles and add gradient animation */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </motion.section>
  );
}