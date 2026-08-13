export default function SiteNav() {
  return (
    <div
      id="top"
      className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-x-9 gap-y-1.5 border-b border-ink/12 bg-canvas px-4 py-4 sm:px-5 sm:py-7 md:px-14 md:py-7"
    >
      <a
        href="#top"
        className="font-archivo-expanded text-[13px] font-extrabold leading-none tracking-[.02em] sm:text-[15px]"
      >
        Tosin.
      </a>
      <div className="flex gap-3.5 text-[11px] font-semibold uppercase leading-none tracking-[.08em] text-ink sm:gap-9 sm:text-xs">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
