"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaFolder, FaEnvelope } from "react-icons/fa";

import Project from "./Project";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";

function Section({ children, id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-10 sm:py-20"
      id={id}
    >
      {children}
    </motion.section>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen font-sans ${
        isDarkMode ? "bg-[#161616] text-white" : "bg-[#FFF] text-gray-900"
      }`}
    >
      <Header
        isDarkMode={isDarkMode}
        activeSection={activeSection}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
      />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Section id="about">
          <About isDarkMode={isDarkMode} />
        </Section>

        <Section id="projects">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 flex items-center justify-center">
            <FaFolder className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            Projects
          </h2>
          <div className="w-full">
            <Project isDarkMode={isDarkMode} />
          </div>
        </Section>

        <Section id="contact">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 flex items-center justify-center">
            <FaEnvelope className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            Contact
          </h2>
          <Contact isDarkMode={isDarkMode} />
        </Section>
      </main>

      <footer
        className={`${
          isDarkMode ? "bg-[#161616] text-gray-300" : "bg-[#FFF] text-gray-900"
        } py-6 sm:py-8 mt-12`}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Ahidjon. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
