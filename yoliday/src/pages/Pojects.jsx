import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import PortfollioNavbar from "./PortfollioNavbar";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [savedCards, setSavedCards] = useState(() => {
    // Retrieve saved cards from localStorage on component mount
    const storedCards = localStorage.getItem("savedCards");
    return storedCards ? JSON.parse(storedCards) : [];
  });

  const navigate = useNavigate();

  const projects = [
    {
      title: "Kemampuan Merangkum Tulisan",
      description: "Lorem ipsum dolor sit amet consectetur...",
      author: "Al-Baij Sammaan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTriarVFvdFWUe9t-hiAS8h7EvjWIjFn_NFw&s",
    },
    {
      title: "Creative Writing Project",
      description: "Lorem ipsum dolor sit amet consectetur...",
      author: "Jane Doe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJ9uWZN_ZItZpMhhrMzhaFCUdNsx3p8N6CA&s",
    },
    {
      title: "Technical Report",
      description: "Lorem ipsum dolor sit amet consectetur...",
      author: "John Smith",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwEFZO5MxHsQphA5CKZBJUSJH8wqKKVXAvg&s",
    },
    {
      title: "Research Paper Summary",
      description: "Lorem ipsum dolor sit amet consectetur...",
      author: "Anna Lee",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgHYxB3mM-JHaHHcDuzQqqT469sO015r2Vw&s",
    },
    {
      title: "Genarative Product",
      description: "Lorem ipsum dolor sit amet consectetur...",
      author: "Anna Lee",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9LPtkoxA5nkY3fZOAxmw4yR7nAL4-HM3wA&s",
    },
    {
      title: "Research Paper Summary",
      description: "Lorem ipsum dolor sit amet consectetur...",
      author: "Anna Lee",
      image:
        "data:image/jpeg;base64,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",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || project.author === filter;
    return matchesSearch && matchesFilter;
  });

  // Function to handle saving a card
  const onAddToCart = (card) => {
    setSavedCards((prevCards) => {
      const updatedCards = [...prevCards, card];
      // Store the updated cards in localStorage
      localStorage.setItem("savedCards", JSON.stringify(updatedCards));
      alert(`${card.title} has been added to your cart!`); // Alert message
      return updatedCards;
    });
  };

  const goToSavePage = () => {
    navigate("/save");
  };

  return (
    <div>
      <PortfollioNavbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filter={filter}
        setFilter={setFilter}
      />

      <button
        onClick={goToSavePage}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        View Saved Projects
      </button>

      <div className="pt-56 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold text-center mb-8">My Projects</h2>

        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search Projects..."
            className="p-2 border border-orange-500 rounded focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="p-2 border border-orange-500 rounded focus:outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Authors</option>
            <option value="Al-Baij Sammaan">Al-Baij Sammaan</option>
            <option value="Jane Doe">Jane Doe</option>
            <option value="John Smith">John Smith</option>
            <option value="Anna Lee">Anna Lee</option>
          </select>
        </div>

        <div className="border-4 border-black p-8 bg-white rounded-lg">
          <div className="max-h-96 overflow-y-auto">
            {filteredProjects.map((project, index) => (
              <Cards
                key={index}
                title={project.title}
                description={project.description}
                author={project.author}
                image={project.image}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
