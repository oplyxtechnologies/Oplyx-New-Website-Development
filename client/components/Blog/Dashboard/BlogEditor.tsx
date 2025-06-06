"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $getRoot } from "lexical";

type Props = {
  onChange: (content: string) => void;
};

const editorConfig = {
  namespace: "BlogEditor",
  theme: {
    paragraph: "mb-2 text-sm text-white",
  },
  onError(error: Error) {
    console.error("Lexical error:", error);
  },
};

export default function BlogEditor({ onChange }: Props) {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="min-h-[150px] outline-none text-white" />
        }
        placeholder={
          <p className="text-white/40">Write your blog content here...</p>
        }
        ErrorBoundary={() => null}
      />
      <HistoryPlugin />
      <OnChangePlugin
        onChange={(editorState) => {
          editorState.read(() => {
            const content = $getRoot().getTextContent();
            onChange(content);
          });
        }}
      />
    </LexicalComposer>
  );
}
