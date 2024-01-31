"use client";

import Link from "next/link";
import SignInButton from "./signinbutton";
import SignUpButton from "./signupbutton";
import useSignedIn from "@/hooks/Signin";
import { useEffect, useState } from "react";
import SignoutButton from "./signoutbtn";

type user = {
  userid: number;
  username: string;
  password: string;
  role: "member" | "admin" | "owner" | "poster";
  email: string;
  fname: string;
  lname: string;
};

export default function Navbar() {
  const { isReady, user, isSignedIn } = useSignedIn();
  const [userData, setUser] = useState<user | null>();

  useEffect(() => {
    if (isReady) {
      if (isSignedIn) {
        setUser(user);
      } else {
        setUser(null);
      }
    }
  }, [isReady]);
  return (
    <div className="w-full h-12 bg-[#32CD32] flex text-white">
      <div className="flex items-center">
        <Link href="/" className="p-2 text-2xl hover:bg-green-400 h-12  mr-2">
          Home
        </Link>
        <Link
          href="/post"
          className="p-2 text-2xl hover:bg-green-400 h-12  mr-2"
        >
          Post
        </Link>
        {userData && isSignedIn ? (
          <div className="absolute right-4 flex">
            <SignoutButton />
          </div>
        ) : (
          <div className="absolute right-4 flex">
            <SignUpButton />
            <SignInButton />
          </div>
        )}
      </div>
    </div>
  );
}
