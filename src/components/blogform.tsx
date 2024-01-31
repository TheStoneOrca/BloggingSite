"use client";

import { useState } from "react";
import BlogTextArea from "./blogtextarea";
import { Post } from "./clientforms";

export default function BlogForm() {
  const [textContent, setContent] = useState<string>();
  const [error, setError] = useState<string>();

  return (
    <div>
      <form
        onSubmit={(e) => {
          if (!e) return;
          e.preventDefault();
          const result: any = Post(e as any);

          if (result === 200) {
            window.location.href = "/blogs";
          } else {
            setError(result);
          }
        }}
      >
        <div className="flex justify-center">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" required />
        </div>
        <div className="flex justify-center">
          <label htmlFor="Author">Author</label>
          <input type="text" name="author" required />
        </div>
        <input type="hidden" name="content" value={textContent} />
        <BlogTextArea setContent={setContent} />
        <div className="flex justify-center">
          <input type="submit" value="submit" />
        </div>

        {error ? <h1>{error}</h1> : null}
      </form>
    </div>
  );
}
