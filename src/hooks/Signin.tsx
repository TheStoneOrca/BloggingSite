"use client";

import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export default function useSignedIn() {
  type userData = {
    isReady: boolean;
    user: object | null;
    isSignedIn: boolean;
  };
  const [user, setUser] = useState<userData>({
    isReady: false,
    user: null,
    isSignedIn: false,
  });

  useEffect(() => {
    try {
      if (!secureLocalStorage.getItem("user_token")) return;
      fetch("/api/auth/getuser", {
        method: "POST",
        body: JSON.stringify(secureLocalStorage.getItem("user_token")),
        headers: { "Content-Type": "application/json" },
      }).then((res) =>
        res.json().then((user) => {
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
  });
  return user;
}
