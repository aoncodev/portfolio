import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import projects from "../data/projects";

export default function Project({ isDarkMode }) {
  return (
    <div
      className={`py-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto`}
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative rounded-xl shadow-md transition-shadow hover:shadow-lg mx-2  ${
            isDarkMode
              ? "bg-[#1c1c1c]"
              : "bg-white border-[1px] border-gray-100"
          }`}
        >
          {/* Image with overlay icons */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="absolute top-2 right-2 flex space-x-2">
              <a
                href={project.github}
                target={project.github === "#" ? "_self" : "_blank"}
                rel={project.github === "#" ? undefined : "noopener noreferrer"}
                className={`p-2 rounded-full hover:bg-opacity-80 transition ${
                  isDarkMode
                    ? "text-white bg-[#444444] hover:bg-[rgba(68,68,68,0.8)]"
                    : "text-white bg-[#211F22] hover:bg-[rgba(33,31,34,0.8)]"
                }`}
              >
                <div className="flex">
                  <FaGithub className="mr-2" size={20} /> Github
                </div>
              </a>
              <a
                href={project.liveDemo}
                target={project.liveDemo === "#" ? "_self" : "_blank"}
                rel={
                  project.liveDemo === "#" ? undefined : "noopener noreferrer"
                }
                className={`p-2 rounded-full hover:bg-opacity-80 transition ${
                  isDarkMode
                    ? "text-white bg-[#8DB600] hover:bg-[rgba(141,182,0,0.8)]"
                    : "text-white bg-[#28A745] hover:bg-[rgba(40,167,69,0.8)]"
                }`}
              >
                <div className="flex">
                  <FaEye className="mr-2" size={20} /> Live
                </div>
              </a>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <h3
              className={`text-lg ${
                isDarkMode ? "text-[#fff]" : "text-gray-800"
              }`}
            >
              {project.subtitle}
            </h3>
            <p
              className={`text-lg ${
                isDarkMode ? "text-[#fff]" : "text-gray-800"
              }`}
            >
              {project.description}
            </p>
            <p className="flex flex-wrap mt-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`${
                    isDarkMode
                      ? "bg-[#474749] text-white"
                      : "bg-gray-100 text-black"
                  } px-3 py-1 rounded-full text-sm font-medium flex items-center mr-1 mb-1`}
                >
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
