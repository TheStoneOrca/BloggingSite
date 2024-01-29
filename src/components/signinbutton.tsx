import Link from "next/link";

export default function SignInButton() {
  return (
    <div>
      <Link href="/signup" className="p-3 hover:bg-green-400">
        Sign In
      </Link>
    </div>
  );
}
