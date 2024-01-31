"use client";

import Link from "next/link";

type blogProp = {
  blogid: number;
  postitle: string;
  author: string;
  createdOn: string;
};

export default function BlogCard(blog: blogProp) {
  return (
    <div className="w-44 h-52 bg-slate-200 mr-2 ml-6">
      <Link href={`/blog/${blog.blogid}`}>
        <h1 className="text-2xl">{blog.postitle}</h1>
        <h4>By {blog.author}</h4>
        <h5 className="text-sm">{blog.createdOn}</h5>
      </Link>
    </div>
  );
}
