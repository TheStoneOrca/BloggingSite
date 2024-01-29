import Link from "next/link";

export default function SignUpButton() {
  return (
    <div>
      <Link href="/login" className="p-3 hover:bg-green-400">
        Sign Up
      </Link>
    </div>
  );
}
