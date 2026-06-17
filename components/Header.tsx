"use client";

import { useState } from "react";
import {
  Home,
  UserCircle2,
  FolderGit2,
  MessageSquareMore,
  Sun,
  Moon,
} from "lucide-react";
import NavLink from "./NavLink";
import Link from "next/link";

export default function Header() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <header
      className="bg-white flex items-center gap-1 border border-zinc-300 max-w-min px-1.5 py-1 mx-auto my-3 rounded-full text-[14px] text-zinc-800"
      style={{ boxShadow: "0 0 20px rgba(0,0,0,0.12)" }}
    >
      <Link
        className="flex items-center gap-2 p-1.5 rounded-full border border-transparent hover:bg-zinc-100 hover:border-zinc-200 transition-colors"
        href="/"
      >
        <Home size={18} />
      </Link>

      <span className="border-r border-zinc-300 h-5.5" />

      <NavLink href="/" label="About" icon={UserCircle2} />
      <NavLink href="/" label="Projects" icon={FolderGit2} />
      <NavLink href="/" label="Contact" icon={MessageSquareMore} />

      <span className="border-r border-zinc-300 h-5.5" />

      <button
        className="flex items-center gap-2 p-1.5 rounded-full border border-transparent hover:bg-zinc-100 hover:border-zinc-200 transition-colors cursor-pointer"
        onClick={() => setIsDark((d) => !d)}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    </header>
  );
}
