"use client";

import { FORMAT_TEXT_COMMAND, SELECTION_CHANGE_COMMAND } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";

export function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        return true;
      },
      0
    );
  }, [editor]);

  const applyFormat = (format: "bold" | "italic" | "underline") => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  return (
    <div className="flex gap-2 mb-4 border-b border-gray-300 pb-2">
      <button
        onClick={() => applyFormat("bold")}
        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        Bold
      </button>
      <button
        onClick={() => applyFormat("italic")}
        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        Italic
      </button>
      <button
        onClick={() => applyFormat("underline")}
        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        Underline
      </button>
    </div>
  );
}
