"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsEnvelopePaper, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { contactConfig } from "@/lib/contact";
import { sendEmail } from "@/actions/sendEmail";

const iconMap = {
  BsLinkedin: BsLinkedin,
  BsGithub: BsGithub,
  FaXTwitter: FaXTwitter
};

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5); 
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-6xl mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}  
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
            <form
              className="space-y-4 w-full"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSending(true);

                const form = e.currentTarget;
                const formData = new FormData(form);
                const { data, error } = await sendEmail(formData);

                setIsSending(false);

                if (error) {
                  setStatusMessage("An error occurred. Please try again.");
                  setIsError(true);
                } else {
                  setStatusMessage("Email sent successfully!");
                  setIsError(false);
                  form.reset();
                }
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="senderEmail"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 px-6 bg-gradient-to-r from-[#00b0ff] to-[#a3cdff] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <span className="inline-flex items-center gap-2">
                    <svg
                      className="w-4 h-4 animate-spin"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-white"
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10h-2a8 8 0 1 0-8 8z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {statusMessage && (
                <div
                  className={`mt-2 text-sm text-center ${
                    isError ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
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
              href={`mailto:${contactConfig.email}`}
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
                <p className="text-sm text-gray-600 dark:text-gray-400">{contactConfig.email}</p>
              </div>
            </motion.a>

            {/* Social media grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {contactConfig.socials.map((social, index) => (
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
                  {iconMap[social.icon as keyof typeof iconMap]({
                    className: `text-xl sm:text-2xl text-${social.color}-600 dark:text-${social.color}-400`
                  })}
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
                      I typically respond within {contactConfig.responseTime}.
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