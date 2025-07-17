import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyButton from "./CopyButton";

const CodeBlock = ({ language, code }) => {
  const trimmedCode = code
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n");

  return (
    <div className="my-4 bg-[#0a0a0f] rounded-lg overflow-hidden border border-[#ffffff0a]">
      {/* header with language and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#ffffff08]">
        <div className="flex items-center gap-2">
          <img
            src={`/${language}.png`}
            alt={language}
            className="size-4 object-contain"
          />
          <span className="text-sm text-gray-400">{language || "plaintext"}</span>
        </div>
        <CopyButton code={trimmedCode} />
      </div>

      {/* syntax-highlighted code block */}
      <div className="relative">
        <SyntaxHighlighter
          language={language || "plaintext"}
          style={atomOneDark}
          customStyle={{
            padding: "1rem",
            background: "transparent",
            margin: 0,
          }}
          showLineNumbers={true}
          wrapLines={true}
        >
          {trimmedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
