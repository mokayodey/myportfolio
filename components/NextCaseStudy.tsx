import Link from "next/link";

export default function NextCaseStudy({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between border-b border-ink/12 px-4 py-10 md:px-14"
    >
      <span className="text-xs font-semibold uppercase leading-none tracking-[.1em] text-ink/50">
        Next case study
      </span>
      <span className="font-archivo-expanded text-xl font-bold sm:text-2xl">
        {name} →
      </span>
    </Link>
  );
}
