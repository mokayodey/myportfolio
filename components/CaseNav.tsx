import Link from "next/link";

export default function CaseNav() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/12 bg-canvas px-4 py-7 md:px-14">
      <Link
        href="/"
        className="font-archivo-expanded text-[15px] font-extrabold leading-none tracking-[.02em]"
      >
        Tosin.
      </Link>
      <Link
        href="/#work"
        className="text-xs font-semibold uppercase leading-none tracking-[.08em] text-ink/60"
      >
        ← All Work
      </Link>
    </div>
  );
}
