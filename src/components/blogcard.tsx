"use client";

import Link from "next/link";

type blogProp = {
  blogid: number;
  title: string;
  author: string;
  createdOn: string;
};

export default function BlogCard(blog: blogProp) {
  return (
    <div className="w-44 h-52 bg-slate-200">
      <Link href={`/blog/${blog.blogid}`}>
        <h1>{blog.title}</h1>
        <h4>{blog.author}</h4>
        <h5>{blog.createdOn}</h5>
      </Link>
    </div>
  );
}
