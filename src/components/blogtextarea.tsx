"use client";

import {
  BubbleMenu,
  EditorContent,
  EditorProvider,
  FloatingMenu,
  useEditor,
} from "@tiptap/react";
import Heading from "@tiptap/extension-heading";
import StarterKit from "@tiptap/starter-kit";
import "./textareastyle.css";
import BlogButtons from "./blogbuttons";
import { useState } from "react";

const content = `<h1>HI!</h1>`;
const extensions = [
  StarterKit.configure({
    heading: false,
  }),
  Heading.configure({ levels: [1, 2, 3, 4] }),
];

export default function BlogTextArea({ setContent }: any) {
  const editor = useEditor({
    extensions,
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div>
      <div className="flex justify-center">
        <BlogButtons editor={editor} />
      </div>
      <div className="flex justify-center">
        <EditorContent editor={editor} name="content" />
      </div>
    </div>
  );
}
