"use client";

import SignupForm from "@/components/signupform";
import { useEffect } from "react";

export default function SignupPage() {
  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  return <SignupForm />;
}
