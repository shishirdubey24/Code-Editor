import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
   <button
      onClick={copyToClipboard}
      type="button"
      className="p-2 rounded-md transition duration-200 hover:bg-gray-700 focus:outline-none"
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-gray-300" />
      )}
    </button>
  );
}

export default CopyButton;
