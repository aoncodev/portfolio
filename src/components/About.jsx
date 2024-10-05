import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaGlobe,
  FaDatabase,
  FaGitAlt,
  FaFile,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiDjango,
  SiFastapi,
  SiDocker,
  SiFlask,
  SiFlutter,
  SiAmazon,
} from "react-icons/si"; // No AWS here if not available
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Ensure blur effect CSS is imported

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function About({ isDarkMode }) {
  const [isKorean, setIsKorean] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsKorean((prev) => !prev); // Toggle language every 5 seconds
    }, 7000); // Change language every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const variants = {
    initial: { opacity: 0, rotateY: 90 },
    enter: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: -90 },
  };

  const skillsWithIcons = [
    {
      name: "HTML/CSS",
      icon: <FaHtml5 style={{ color: "#E44D26" }} size={16} />,
    },
    {
      name: "JavaScript",
      icon: <FaJs style={{ color: "#F7DF1E" }} size={16} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript style={{ color: "#007ACC" }} size={16} />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs style={{ color: "#8CC84B" }} size={16} />,
    },
    { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} size={16} /> },
    {
      name: "Python",
      icon: <FaPython style={{ color: "#FFD43B" }} size={16} />,
    },
    {
      name: "Django",
      icon: <SiDjango style={{ color: "#0B3B26" }} size={16} />,
    },
    {
      name: "FastAPI",
      icon: <SiFastapi style={{ color: "#009639" }} size={16} />,
    },
    {
      name: "Flask",
      icon: <SiFlask style={{ color: "#343a40" }} size={16} />,
    },
    {
      name: "Flutter",
      icon: <SiFlutter style={{ color: "#02569B" }} size={16} />,
    },

    {
      name: "SQL",
      icon: <FaDatabase style={{ color: "#00758F" }} size={16} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb style={{ color: "#4DB33D" }} size={16} />,
    },
    {
      name: "PostgreSQL",
      icon: <SiMongodb style={{ color: "#336791" }} size={16} />,
    },
    { name: "Git", icon: <FaGitAlt style={{ color: "#F05033" }} size={16} /> },
    {
      name: "RESTful APIs",
      icon: <FaGlobe style={{ color: "#0082c8" }} size={16} />,
    }, // Example icon
    {
      name: "AWS",
      icon: <SiAmazon style={{ color: "#FF9900" }} size={16} />,
    }, // Example icon
    {
      name: "Docker",
      icon: <SiDocker style={{ color: "#2496ED" }} size={16} />,
    },
  ];
  return (
    <div className="max-w-4xl mt-2 mx-auto space-y-16 justify-center">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div
          className="flex justify-center p-2 "
          onContextMenu={(e) => e.preventDefault()}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <LazyLoadImage
              alt="Ahidjon"
              effect="blur"
              src="portfolio.jpg"
              className="rounded-full w-56 h-56 object-cover shadow-lg"
            />
            {/* Transparent overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "transparent",
              }}
            />
          </div>
        </div>

        <div className="space-y-4 max-w-md">
          {" "}
          {/* Set a max-width for the text container */}
          <motion.div
            key={isKorean ? "Korean" : "English"}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <h2 className="text-4xl font-bold leading-relaxed">
              {isKorean ? (
                <>
                  안녕하세요,
                  <br /> 아히전 입니다!
                </>
              ) : (
                <>
                  Hello, my name is <br /> Akhidjon Abdullaev.
                </>
              )}
            </h2>
          </motion.div>
          <div>
            <p className="text-lg">
              I’m a passionate{" "}
              <b>
                {" "}
                <span className="text-[#0E7AFE]">
                  Full stack developer
                </span>{" "}
              </b>
              . <br />I love coding and thrive on creating efficient solutions
              that enhance user experiences across platforms.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Education</h2>
          <a
            href="https://drive.google.com/uc?export=download&id=1n3DST-q3wXjV0ck8glHzf622pSGX7n6S" // Replace with the actual path to your CV
            className={`${
              isDarkMode ? "bg-[#0E7AFE] text-white" : "bg-[#0E7AFE] text-white"
            } px-4 py-2 rounded-md text-sm font-semibold flex items-center hover:bg-opacity-80 transition`}
            download // This attribute suggests downloading the linked resource
          >
            <FaFile className="mr-2" /> {/* CV icon */}
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          <span
            className={`${
              isDarkMode
                ? "bg-[#333333] text-white"
                : "bg-gray-100 text-gray-800"
            } px-3 py-1 rounded-full text-sm font-medium flex items-center`}
          >
            <span className="ml-2">
              Kyung Hee University - Bachelor's Degree in Computer Engineering
            </span>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Experienced</h2>
        <div className="flex flex-wrap gap-2 ">
          {skillsWithIcons.map((skill) => (
            <span
              key={skill.name}
              className={`${
                isDarkMode
                  ? "bg-[#333333] hover:bg-[#4a4a4a] text-white"
                  : "bg-gray-200 hover:bg-black text-gray-800 hover:text-white"
              } px-3 py-1 rounded-full text-sm font-medium flex items-center`}
            >
              {skill.icon} {/* Render the icon here */}
              <span className="ml-2">{skill.name}</span>{" "}
              {/* Skill name with margin */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
