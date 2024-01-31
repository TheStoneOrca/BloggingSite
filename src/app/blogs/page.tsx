"use client";

import BlogCard from "@/components/blogcard";
import { useEffect, useState } from "react";

type Blogs = {
  postid: number;
  posttitle: string;
  postauthor: string;
  postcontent: string;
  createdWhen: Date;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Array<Blogs> | null>();

  useEffect(() => {
    try {
      fetch("/api/post", { method: "GET" }).then((data) =>
        data.json().then((blogs: { status: number; posts: Array<Blogs> }) => {
          if (blogs.status === 200) {
            setBlogs(blogs.posts);
          } else {
            setBlogs(null);
          }
        })
      );
    } catch (error) {
      throw Error("Unexpected Error while fetching blogs.");
    }
  }, []);

  return (
    <div>
      {blogs ? (
        <div>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.postid}
              title={blog.posttitle}
              blogid={blog.postid}
              author={blog.postauthor}
              createdOn={String(blog.createdWhen)}
            />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
