import Link from "next/link";

export default function Header() {
  return (
    <div className="flex gap-2">
      <Link href="/">Home</Link>
      <Link href="/">About</Link>
      <Link href="/">Projects</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
