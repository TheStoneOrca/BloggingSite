"use client";

import LoginForm from "@/components/loginform";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    document.title = "Log In";
  }, []);
  return <LoginForm />;
}
