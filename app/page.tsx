import Image from "next/image";

export default function Home() {
  return (
    <div className="py-20 max-w-190 mx-auto">
      <Image
        src="/profile.jpg"
        alt="profile"
        width={120}
        height={120}
        className="mb-5 rounded-[10px]"
      />
      <h1 className="text-[38px] text-zinc-900 mb-5 leading-12">
        Hi I&apos;m Pranish Chaulagain —{" "}
        <span className="text-zinc-900/70">
          full stack developer & ML enthusiast.
        </span>
      </h1>
      <p className="text-zinc-700 mb-5">
        I&apos;m a developer who loves building things from scratch, whether
        it&apos;s a backend system, a compiler, or just a clean UI. I spend my
        free time messing with algorithms and AI/ML, trying to understand how
        things actually work.
      </p>
      <div className=" flex items-center gap-5 mb-5">
        <button className="bg-neutral-900 font-medium border border-neutral-900 text-white px-2.75 py-2 rounded-[10px] cursor-pointer hover:bg-neutral-800 hover:border-neutral-800 transition-colors">
          View Work
        </button>
        <button className="bg-neutral-100 font-medium border border-neutral-900 text-neutral-900 px-2.75 py-2 rounded-[10px] cursor-pointer hover:bg-neutral-200 transition-colors">
          Contact
        </button>
      </div>
    </div>
  );
}
