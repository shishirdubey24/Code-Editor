// CommentWithCode.jsx
import React from "react";
import CodeBlock from "./CodeBlock";

// Utility to parse comment string into text and code blocks
function CommentWithCode({ content, replies = [] }) {
  const parts = content.split(/(```[\w-]*\n[\s\S]*?\n```)/g);

  return (
    <div className="max-w-none text-white space-y-4">
      {parts.map((part, index) => {
        if (part.startsWith("```")) {
          const match = part.match(/```([\w-]*)\n([\s\S]*?)\n```/);
          if (match) {
            const [, language, code] = match;
            return <CodeBlock language={language} code={code} key={index} />;
          }
        }
        return part.split("\n").map((line, lineIdx) => (
          <p key={`${index}-${lineIdx}`} className="text-gray-300">
            {line}
          </p>
        ));
      })}

      {/* --- Replies --- */}
      {replies.length > 0 && (
        <div className="mt-4 pl-6 border-l border-white/10 space-y-4">
          {replies.map((reply) => (
            <div key={reply._id} className="text-sm text-gray-400">
              <span className="block font-medium text-white mb-1">
                {reply.userName}
              </span>
              <CommentWithCode content={reply.content} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentWithCode;
