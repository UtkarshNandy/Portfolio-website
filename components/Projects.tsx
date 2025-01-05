import React from "react";

const projectsList = [
  {
    id: 1,
    title: "Fuel Efficient Route Planner",
    description:
      "An app that calculates the most fuel-efficient route based on the user's destinations and vehicle.",
    image: "https://via.placeholder.com/300", // Replace with actual image
    link: "https://example.com/fuel-efficient-route-planner",
  },
  {
    id: 2,
    title: "React Native Wallet App",
    description:
      "A mobile app that minimizes the need for physical ID cards, storing all information securely.",
    image: "https://via.placeholder.com/300", // Replace with actual image
    link: "https://example.com/react-native-wallet-app",
  },
  {
    id: 3,
    title: "Digital Lock Circuit",
    description:
      "A Logisim Evolution project for designing and simulating a digital lock mechanism.",
    image: "https://via.placeholder.com/300", // Replace with actual image
    link: "https://example.com/digital-lock-circuit",
  },
  {
    id: 4,
    title: "Social Media App",
    description:
      "A full-stack application designed for connecting users with a modern, engaging UI.",
    image: "https://via.placeholder.com/300", // Replace with actual image
    link: "https://example.com/social-media-app",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="relative bg-white shadow-md rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
