"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

function StarButton({ snippetId }) {
  const [isStarred, setIsStarred] = useState(false);
  const [starCount, setStarCount] = useState(0);

  // Load initial state from localStorage
  useEffect(() => {
    const storedStars = JSON.parse(localStorage.getItem("stars") || "{}");
    const userStars = JSON.parse(localStorage.getItem("userStarred") || "[]");

    setStarCount(storedStars[snippetId] || 0);
    setIsStarred(userStars.includes(snippetId));
  }, [snippetId]);

  const handleStar = () => {
    const storedStars = JSON.parse(localStorage.getItem("stars") || "{}");
    const userStars = JSON.parse(localStorage.getItem("userStarred") || "[]");

    let newCount = storedStars[snippetId] || 0;
    let newUserStars = [...userStars];

    if (isStarred) {
      // Unstar
      newCount = Math.max(0, newCount - 1);
      newUserStars = newUserStars.filter(id => id !== snippetId);
    } else {
      // Star
      newCount += 1;
      newUserStars.push(snippetId);
    }

    storedStars[snippetId] = newCount;

    localStorage.setItem("stars", JSON.stringify(storedStars));
    localStorage.setItem("userStarred", JSON.stringify(newUserStars));

    setStarCount(newCount);
    setIsStarred(!isStarred);
  };

  return (
    <button
      className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
        transition-all duration-200 ${
          isStarred
            ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
            : "bg-gray-500/10 text-gray-400 hover:bg-gray-500/20"
        }`}
      onClick={handleStar}
    >
      <Star
        className={`w-4 h-4 ${isStarred ? "fill-yellow-500" : "fill-none group-hover:fill-gray-400"}`}
      />
      <span className={`text-xs font-medium ${isStarred ? "text-yellow-500" : "text-gray-400"}`}>
        {starCount}
      </span>
    </button>
  );
}

export default StarButton;
