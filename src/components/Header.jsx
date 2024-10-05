import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaSun,
  FaMoon,
} from "react-icons/fa"; // Import icons

export default function Header({
  isDarkMode,
  activeSection,
  toggleDarkMode,
  scrollToSection,
}) {
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const hoverColor = isDarkMode
    ? "text-gray-400 hover:text-white"
    : "text-gray-500 hover:text-gray-900";

  const socialLinks = [
    {
      href: "https://github.com/aoncodev",
      icon: <FaGithub size={24} />,
      hover: "hover:text-black",
    },
    {
      href: "https://www.linkedin.com/in/aoncodev",
      icon: <FaLinkedin size={24} />,
      hover: "hover:text-blue-700",
    },
    {
      href: "https://instagram.com/ahid_jon",
      icon: <FaInstagram size={24} />,
      hover: "hover:text-pink-500",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 ${
        isDarkMode ? "bg-[#141414]/80" : "bg-[#FFF]/80"
      } backdrop-blur-md`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left section: Logo */}
        <h1 className={`text-2xl font-bold ${textColor}`}>
          <a href="/">aoncodev</a>
        </h1>

        {/* Middle section: Navigation links */}
        <ul className="hidden md:flex justify-center space-x-8">
          {["about", "projects", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section ? textColor : hoverColor
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Right section: Social icons and Dark mode toggle */}
        <div className="flex items-center space-x-6">
          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map(({ href, icon, hover }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${textColor} ${hover}`}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Dark mode toggle with icons */}
          <button
            onClick={toggleDarkMode}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
              isDarkMode ? "bg-white text-gray-900" : "bg-[#1d1d1d] text-white"
            }`}
          >
            {isDarkMode ? (
              <>
                <FaSun className="mr-2" /> Light Mode
              </>
            ) : (
              <>
                <FaMoon className="mr-2" /> Dark Mode
              </>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
