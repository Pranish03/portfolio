import Image from "next/image";

export default function Home() {
  return (
    <div className="py-30 flex justify-center gap-20">
      <div>
        <Image
          src="/profile.jpg"
          alt="my photo"
          width={140}
          height={140}
          className="rounded-full border border-zinc-400"
        />
      </div>
      <div>
        <h1 className="text-5xl font-semibold text-zinc-900 mb-4">
          Hi, I&apos;m Pranish
        </h1>
        <p className="text-zinc-700 max-w-md">
          I build clean, fast web apps and love working close to the metal —
          from systems programming to modern UIs.
        </p>
      </div>
    </div>
  );
}
