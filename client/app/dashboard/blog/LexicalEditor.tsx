"use client";

import {
  LexicalComposer,
  InitialConfigType,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { ToolbarPlugin } from "./ToolbarPlugin";
import { $generateHtmlFromNodes } from "@lexical/html";

export default function LexicalEditor({
  onChange,
}: {
  onChange: (html: string) => void;
}) {
  const initialConfig: InitialConfigType = {
    namespace: "BlogEditor",
    theme: {
      paragraph: "mb-3 text-base",
    },
    onError(error) {
      console.error("Lexical Error:", error);
    },
    editorState: null,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="border border-white/20 rounded p-4 bg-white text-black">
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="min-h-[300px] outline-none p-2" />
          }
          placeholder={
            <p className="text-gray-400">Write your blog content here...</p>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin
          onChange={(editorState, editor) => {
            editorState.read(() => {
              const htmlString = $generateHtmlFromNodes(editor, null);
              onChange(htmlString);
            });
          }}
        />
      </div>
    </LexicalComposer>
  );
}
