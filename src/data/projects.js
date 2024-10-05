const projects = [
  {
    id: "01",
    name: "Portfolio",
    subtitle: "My personal portfolio",
    description:
      "A responsive portfolio website showcasing my skills, projects, and contact information. Built using React, styled with Tailwind, and integrated with Telegram for direct messaging.",
    techStack: ["React", "Tailwind", "Telegram"],
    liveDemo: "#", // Replace with actual URL
    github: "https://github.com/aoncodev/portfolio/blob/main/README.md", // Replace with actual URL
    image: "port.jpg",
  },
  {
    id: "02",
    name: "Albazaar Web",
    subtitle: "E-Commerce Platform",
    description:
      "A complete e-commerce platform with features like real-time payment integration, user management, and product catalog. Built with React, Node.js, and MongoDB for a smooth online shopping experience.",
    techStack: ["React", "Node.js", "ExpressJS", "Tailwind", "MongoDB"],
    liveDemo: "http://www.albazaarkorea.com/", // Replace with actual URL
    github: "#", // Replace with actual URL
    image: "albazaar.jpg",
  },
  {
    id: "03",
    name: "Albazaar App",
    subtitle: "E-Commerce Application",
    description:
      "A mobile app for Android and iOS offering a user-friendly e-commerce platform. Built with Flutter for seamless cross-platform performance and Node.js backend for efficient data handling.",
    techStack: ["Flutter", "Node.js", "ExpressJS", "Tailwind", "MongoDB"],
    liveDemo:
      "https://play.google.com/store/apps/details?id=com.albazaar.albazaar_app", // Replace with actual URL
    github: "#", // Replace with actual URL
    image: "albazaar_app.jpg",
  },
  {
    id: "04",
    name: "Coffee Ordering Chatbot",
    subtitle: "Graduation project",
    description:
      "A chatbot designed to streamline the coffee ordering process. Built using Python and machine learning models, this project leverages NLP for a natural conversational experience.",
    techStack: ["Python", "Pytorch", "MongoDB", "Flask"],
    liveDemo:
      "https://github.com/aon123/Coffee-Ordering-Chatbot-Bert/blob/main/README.md", // Replace with actual URL
    github: "https://github.com/aon123/Coffee-Ordering-Chatbot-Bert", // Replace with actual URL
    image:
      "https://camo.githubusercontent.com/13d295f65fa939d4bbfd5066247a48847620f902515de0d4905e515d046fd150/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a42487a4756736b5747535f336a4563595969366d69512e706e67",
  },
  {
    id: "05",
    name: "Time Clock Backend",
    subtitle: "Django-based REST API",
    description:
      "A backend service for managing time clock entries and user schedules using Django. This project includes functionality for user management, clock-in and clock-out tracking, and wage calculation for restaurant staff.",
    techStack: ["Django", "Django REST Framework", "SQLite3"],
    liveDemo: "https://github.com/aoncodev/timeclock_manager_api", // Replace with actual URL
    github: "https://github.com/aoncodev/timeclock_manager_api", // Replace with actual URL
    image: "time.jpg", // Replace with actual image URL
  },
  {
    id: "06",
    name: "Time Clock App",
    subtitle: "Flutter Frontend for Time Manager",
    description:
      "This Flutter app provides an intuitive interface for employees to manage their clock-in and clock-out times. Featuring a secure PIN login screen, users can easily access their schedules and record their work hours with simple clock-in and clock-out buttons. The app seamlessly integrates with the Django-based backend service to ensure accurate time tracking and wage calculation.",
    techStack: ["Flutter", "Dart"],
    liveDemo: "https://github.com/aoncodev/timeclock_app", // Replace with actual URL
    github: "https://github.com/aoncodev/timeclock_app", // Replace with actual URL
    image: "clocks.jpg", // Replace with actual image URL
  },
  // Add more projects as needed
];

export default projects;
