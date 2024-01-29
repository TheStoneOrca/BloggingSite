import Link from "next/link";
import SignInButton from "./signinbutton";
import SignUpButton from "./signupbutton";
import useSignedIn from "@/hooks/Signin";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { isReady, user, isSignedIn } = useSignedIn();
  const [userData, setUser] = useState<object | null>();

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
        <Link
          href="/home"
          className="p-2 text-2xl hover:bg-green-400 h-12 ml-2 mr-2"
        >
          Home
        </Link>
        <Link
          href="/blogs"
          className="p-2 text-2xl hover:bg-green-400 h-12 mr-2"
        >
          Blogs
        </Link>
        <div className="absolute right-4 flex">
          <SignUpButton />
          <SignInButton />
        </div>
      </div>
    </div>
  );
}
