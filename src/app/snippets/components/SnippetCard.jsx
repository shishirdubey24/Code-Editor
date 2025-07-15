"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Trash2, User } from "lucide-react";
import StarButton from "./StarButton"; // Your local StarButton component
// If you don't have Image, remove this import and use <img> instead.

function SnippetCard({ snippet, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(snippet.id);
      setIsDeleting(false);
    }, 500);
  };

  return (
    <motion.div
      layout
      className="group relative"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="relative h-full bg-[#1e1e2e]/80 backdrop-blur-sm rounded-xl 
        border border-[#313244]/50 hover:border-[#313244] 
        transition-all duration-300 overflow-hidden"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <img
                  src={`/${snippet.language}.png`}
                  alt={`${snippet.language} logo`}
                  className="w-6 h-6 object-contain"
                />
              </div>

              <div className="space-y-1">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-medium">
                  {snippet.language}
                </span>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="size-3" />
                  {new Date(snippet.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <StarButton snippetId={snippet.id} />
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200
                  ${
                    isDeleting
                      ? "bg-red-500/20 text-red-400 cursor-not-allowed"
                      : "bg-gray-500/10 text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                  }
                `}
              >
                {isDeleting ? (
                  <div className="size-3.5 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin" />
                ) : (
                  <Trash2 className="size-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
                {snippet.title}
              </h2>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-md bg-gray-800/50">
                    <User className="size-3" />
                  </div>
                  <span className="truncate max-w-[150px]">{snippet.userName}</span>
                </div>
              </div>
            </div>

            <div className="relative group/code">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-purple-500/5 rounded-lg opacity-0 group-hover/code:opacity-100 transition-all" />
              <pre className="relative bg-black/30 rounded-lg p-4 overflow-hidden text-sm text-gray-300 font-mono line-clamp-3">
                {snippet.code}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SnippetCard;
