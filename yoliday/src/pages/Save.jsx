import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const SavePage = () => {
  const [savedCards, setSavedCards] = useState([]);

  // Load saved cards from localStorage
  useEffect(() => {
    const storedCards = localStorage.getItem("savedCards");
    if (storedCards) {
      setSavedCards(JSON.parse(storedCards));
    }
  }, []);

  // Clear all cards from both state and localStorage
  const clearAllCart = () => {
    setSavedCards([]); // Clear state
    localStorage.removeItem("savedCards"); // Clear localStorage
  };

  return (
    <div className="pt-64 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-8">Saved Projects</h2>

      <button
        onClick={clearAllCart}
        className="bg-red-500 text-white px-4 py-2 rounded mb-4">
        Clear All Cart
      </button>

      <div className="border-4 border-black p-8 bg-white rounded-lg">
        <div className="max-h-96 overflow-y-auto">
          {savedCards.length > 0 ? (
            savedCards.map((card, index) => (
              <Cards
                key={index}
                title={card.title}
                description={card.description}
                author={card.author}
                image={card.image}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">No saved projects yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavePage;
