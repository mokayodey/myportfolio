import Image from "next/image";
import Link from "next/link";

export default function WorkCard({
  href,
  external = false,
  src,
  eyebrow,
  title,
  className = "",
  objectPosition = "center",
  titleSize = "text-lg md:text-xl",
  imgBrightness = "brightness(.55)",
}: {
  href: string;
  external?: boolean;
  src: string;
  eyebrow: string;
  title: string;
  className?: string;
  objectPosition?: string;
  titleSize?: string;
  imgBrightness?: string;
}) {
  const content = (
    <>
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          objectFit: "cover",
          objectPosition,
          filter: `${imgBrightness} blur(3px)`,
          transform: "scale(1.08)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/72" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
        <div className="mb-1.5 text-[10px] font-semibold uppercase leading-none tracking-[.12em] text-gold md:text-[11px] md:tracking-[.14em]">
          {eyebrow}
        </div>
        <div className={`font-archivo-expanded font-bold leading-tight text-white ${titleSize}`}>
          {title}
        </div>
      </div>
    </>
  );

  const wrapperClass = `work-row relative block overflow-hidden rounded ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClass}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={wrapperClass}>
      {content}
    </Link>
  );
}
