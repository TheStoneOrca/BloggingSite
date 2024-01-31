"use client";

import "./blogconfig.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Blogs = {
  postid: number;
  postitle: string;
  postauthor: string;
  postcontent: string;
  createdWhen: Date;
};

type FetchData = {
  status: 404 | 200 | 500;
  postDetails: Blogs;
};

export default function BlogIdPage() {
  const [blogInfo, setBlogData] = useState<Blogs | null>();

  const { id } = useParams();

  useEffect(() => {
    try {
      fetch(`/api/post/${id}`, { method: "GET" }).then((data) =>
        data.json().then((blogData: FetchData) => {
          if (blogData.status === 200) {
            setBlogData(blogData.postDetails);
          } else {
            setBlogData(null);
            throw Error("Unexpected Error");
          }
        })
      );
    } catch (error) {
      console.error(error);
      throw new Error("Unexpected Error: error");
    }
  }, []);

  return (
    <div>
      {blogInfo ? (
        <div>
          <div className="text-center text-5xl">
            {blogInfo.postitle}
            <div className="text-center text-2xl">{blogInfo.postauthor}</div>
          </div>
          <hr />
          <br />
          <div dangerouslySetInnerHTML={{ __html: blogInfo.postcontent }}></div>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}
