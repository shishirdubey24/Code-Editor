"use client";
import { useEditorStore } from "@/src/store/useCodeEditor";
import { LANGUAGE_CONFIG } from "../_Monaco/Index";
import { useEffect, useState, useRef } from "react";
import { RotateCcwIcon, ShareIcon, TypeIcon } from "lucide-react";
import useMounted from "@/src/hook/useMounted";
import { motion } from "framer-motion";
import { Editor } from "@monaco-editor/react";
import Image from "next/image";

const EditorPannel = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const { language, theme, fontSize, editor, setFontSize, setEditor } = useEditorStore();
  const mounted = useMounted();
  const debounceTimer = useRef(null);

  useEffect(() => {
    const savedCode = localStorage.getItem(`editor-code-${language}`);
    const newCode = savedCode || LANGUAGE_CONFIG[language].defaultCode;
    if (editor) editor.setValue(newCode);
  }, [language, editor]);

  useEffect(() => {
    const savedFontSize = localStorage.getItem("editor-font-size");
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
  }, [setFontSize]);

  const handleChange = (value) => {
    if (!value) return;
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      localStorage.setItem(`editor-code-${language}`, value);
    }, 1000);
  };

  const handleRefresh = () => {
    const defaultCode = LANGUAGE_CONFIG[language].defaultCode;
    if (editor) editor.setValue(defaultCode);
    localStorage.removeItem(`editor-code-${language}`);
  };

  const handleFontSizeChange = (e) => {
    const size = Math.min(Math.max(parseInt(e.target.value), 12), 24);
    setFontSize(size);
    localStorage.setItem("editor-font-size", size.toString());
  };

  const handleShare = () => {
    if (!editor) return;
    const code = editor.getValue();
    const title = prompt("Enter a title for your snippet:");
    if (!title || !code) return;

    const newSnippet = {
      id: Date.now(),
      title,
      code,
      language,
      createdAt: new Date().toISOString(),
    };

    const existingSnippets = JSON.parse(localStorage.getItem("snippets") || "[]");
    existingSnippets.push(newSnippet);
    localStorage.setItem("snippets", JSON.stringify(existingSnippets));

    alert("Snippet saved locally!");
  };

  if (!mounted) return null;

  return (
    <div className="relative bg-[#12121a]/90 backdrop-blur rounded-xl border border-white/[0.05] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1e1e2e] ring-1 ring-white/5 text-white text-xs">
            <Image src={"/" + language + ".png"} alt="Logo" width={24} height={24} />
          </div>
          <div>
            <h2 className="text-sm font-medium text-white">Code Editor</h2>
            <p className="text-xs text-gray-500">Write and execute your code</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Font Size Control */}
          <div className="flex items-center gap-3 px-3 py-2 bg-[#1e1e2e] rounded-lg ring-1 ring-white/5">
            <TypeIcon className="size-4 text-gray-400" />
            <input
              type="range"
              min="12"
              max="24"
              value={fontSize}
              onChange={handleFontSizeChange}
              className="w-20 h-1 bg-gray-600 rounded-lg cursor-pointer"
            />
            <span className="text-sm font-medium text-gray-400 min-w-[2rem] text-center">
              {fontSize}
            </span>
          </div>

          {/* Reset Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRefresh}
            className="p-2 bg-[#1e1e2e] hover:bg-[#2a2a3a] rounded-lg ring-1 ring-white/5 transition-colors"
            aria-label="Reset to default code"
          >
            <RotateCcwIcon className="size-4 text-gray-400" />
          </motion.button>

          {/* Share Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg overflow-hidden bg-gradient-to-r
            from-blue-500 to-blue-600 opacity-90 hover:opacity-100 transition-opacity"
          >
            <ShareIcon className="size-4 text-white" />
            <span className="text-sm font-medium text-white">Share</span>
          </motion.button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="relative group rounded-xl overflow-hidden ring-1 ring-white/[0.05]">
        <Editor
          height="600px"
          theme={theme}
          onMount={(editor) => setEditor(editor)}
          onChange={handleChange}
          options={{
            minimap: { enabled: false },
            fontSize,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            padding: { top: 16, bottom: 16 },
            renderWhitespace: "selection",
            fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
            fontLigatures: true,
            cursorBlinking: "smooth",
            smoothScrolling: true,
            contextmenu: true,
            renderLineHighlight: "all",
            lineHeight: 1.6,
            letterSpacing: 0.5,
            roundedSelection: true,
            scrollbar: {
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
          }}
        />
      </div>
    </div>
  );
};

export default EditorPannel;
