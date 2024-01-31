"use client";

type user = {
  userid: number;
  username: string;
  password: string;
  role: "member" | "admin" | "owner" | "poster";
  email: string;
  fname: string;
  lname: string;
};
type userData = {
  isReady: boolean;
  user: user | null;
  isSignedIn: boolean;
};

import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export default function useSignedIn() {
  const [user, setUser] = useState<userData>({
    isReady: false,
    user: null,
    isSignedIn: false,
  });

  useEffect(() => {
    try {
      if (secureLocalStorage.getItem("user_token") === null)
        setUser({ isReady: true, user: null, isSignedIn: false });
      fetch("/api/auth/getuser", {
        method: "POST",
        body: JSON.stringify({
          userJWT: secureLocalStorage.getItem("user_token"),
        }),
        headers: { "Content-Type": "application/json" },
      }).then((res) =>
        res.json().then((user: any) => {
          if (user.status === 200) {
            setUser({ isReady: true, user: user.user, isSignedIn: true });
          } else {
            setUser({ isReady: true, user: null, isSignedIn: false });
          }
        })
      );
    } catch (error) {
      console.error(error);
      setUser({ isReady: true, user: null, isSignedIn: false });
    }
  }, []);
  return user;
}
