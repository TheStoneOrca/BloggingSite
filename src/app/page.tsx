"use client";

import BlogCard from "@/components/blogcard";
import { useEffect, useState } from "react";

type Blogs = {
  postid: number;
  postitle: string;
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
        <div className="h-full">
          <div className="flex justify-center">
            <h1 className="text-3xl">Blogs</h1>
          </div>
          <br />
          <div className="w-full bg-[#F5F5F5] h-[837px] flex">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.postid}
                postitle={blog.postitle}
                blogid={blog.postid}
                author={blog.postauthor}
                createdOn={String(blog.createdWhen)}
              />
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
