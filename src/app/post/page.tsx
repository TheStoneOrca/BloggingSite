"use client";

import BlogForm from "@/components/blogform";
import useSignedIn from "@/hooks/Signin";
import { useEffect, useState } from "react";

export default function BlogPostPage() {
  const { isReady, user, isSignedIn } = useSignedIn();
  const [userdata, setUserData] = useState<object | null>();

  useEffect(() => {
    if (isReady) {
      if (isSignedIn) {
        if (user?.role === "member") {
          // window.location.href = "/";
        }
        setUserData(user);
      } else {
        setUserData(null);
      }
    }
  }, [isReady]);

  return (
    <div>
      <BlogForm />
    </div>
  );
}
