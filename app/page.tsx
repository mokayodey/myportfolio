import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Stat from "@/components/Stat";
import WorkCard from "@/components/WorkCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-canvas text-ink">
      <SiteNav />

      {/* hero */}
      <div className="border-b border-ink/12 px-4 pb-14 pt-16 sm:px-5 md:px-14 md:pb-[72px] md:pt-24">
        <div className="mb-6 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
          Senior Product Designer — Fintech &amp; Health-tech
        </div>
        <h1 className="m-0 max-w-full font-archivo-expanded text-[34px] font-extrabold leading-[1.1] tracking-[-.01em] sm:text-5xl md:max-w-[920px] md:text-[68px] md:leading-[1.04]">
          Designing trust into money &amp; medicine.
        </h1>
        <p className="mt-8 max-w-[620px] text-base font-normal leading-relaxed text-ink/72 md:text-lg">
          Leading end-to-end product design for banks, health platforms and
          fintechs across Africa — turning complex regulated systems into
          experiences people trust.
        </p>
        <div className="mt-10 flex flex-wrap gap-7 md:gap-14">
          <Stat value="10+ yrs" label="years of experience" />
          <Stat value="100M+" label="users served" />
          <Stat value="10M+" label="users served today" />
          <Stat value="$100M+" label="revenue supported" />
        </div>
      </div>

      {/* latest update */}
      <div className="border-b border-ink/12 px-4 py-8 sm:px-5 md:px-14 md:py-10">
        <Link
          href="/work/cash-loan-ux"
          className="group grid overflow-hidden rounded bg-ink text-canvas md:grid-cols-[minmax(0,1.05fr)_minmax(360px,.95fr)]"
        >
          <div className="flex min-h-[320px] flex-col justify-between p-6 sm:p-8 md:min-h-[390px] md:p-10">
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.14em] text-gold md:text-xs">
              <span className="h-2 w-2 rounded-full bg-gold" />
              New case study
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-canvas/55">
                Cash Loan UX · Kenya &amp; Nigeria
              </p>
              <h2 className="max-w-[680px] font-archivo-expanded text-[28px] font-extrabold leading-[1.08] tracking-[-.01em] sm:text-[36px] md:text-[44px]">
                Four flows. Two markets. Five days to real evidence.
              </h2>
              <div className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-gold">
                Read the study
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden bg-accent md:min-h-full">
            <Image
              src="/assets/mkopa-flow-tabs.png"
              alt="Cash loan prototype screens comparing different borrowing flows"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
          </div>
        </Link>
      </div>

      {/* work grid */}
      <div id="work" className="scroll-mt-20 px-4 pb-2 pt-14 sm:px-5 md:px-14">
        <div className="mb-7 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
          Selected Work
        </div>

        <div className="mb-6 flex flex-col gap-6 md:flex-row">
          <WorkCard
            href="/work/affordability-screen"
            src="/assets/mkopa-cover.png"
            eyebrow="01 — M-KOPA · South Africa"
            title="Rescuing the affordability screen that lost 40% of applicants"
            className="h-[280px] md:h-[420px] md:flex-[1.4]"
            titleSize="text-xl md:text-[28px]"
            imgBrightness="brightness(.6)"
          />
          <div className="flex flex-col gap-6 md:flex-1">
            <WorkCard
              href="/work/cash-loan-ux"
              src="/assets/mkopa-cover.png"
              eyebrow="02 — Cash Loan UX · 2026"
              title="Four flows, two markets, one research study."
              className="h-[198px]"
              titleSize="text-lg md:text-[19px]"
              imgBrightness="brightness(.6)"
            />
            <WorkCard
              href="/work/tida-retail"
              src="/assets/tida-cover.png"
              eyebrow="03 — Tida Retail · 2025"
              title="Closing the reconciliation gap in retail POS"
              className="h-[198px]"
              titleSize="text-lg md:text-[19px]"
            />
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <WorkCard
            href="/work/mkobo-bank"
            src="/assets/mkobo-cover.png"
            eyebrow="04 — Mkobo Bank · 2020–2022"
            title="40,000 accounts in year one, from a blank canvas"
            className="h-[220px]"
            titleSize="text-lg md:text-xl"
          />
          <WorkCard
            href="/work/signature-bank"
            src="/assets/signature-card.png"
            eyebrow="05 — Signature Bank · 2022–2024"
            title="Mobile banking for 20M+ customers"
            className="h-[220px]"
            titleSize="text-lg md:text-xl"
            imgBrightness="brightness(.6)"
          />
        </div>

        <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <WorkCard
            href="/work/money-master"
            src="/assets/gkala-onboarding.png"
            eyebrow="06 — Money Master · 2022–2024"
            title="G-Kala, mobile money made simple"
            className="h-[260px]"
            titleSize="text-xl md:text-[22px]"
            objectPosition="top"
            imgBrightness="brightness(.6)"
          />
          <WorkCard
            href="/work/helium-health"
            src="/assets/helium-patient.png"
            eyebrow="07 — Helium Health · 2021–2025"
            title="$1M+ revenue from EMR interoperability"
            className="h-[260px]"
            titleSize="text-xl md:text-[22px]"
          />
        </div>

        <div className="mb-4">
          <WorkCard
            href="https://africa.businessinsider.com/local/lifestyle/transforming-maternal-care-in-nigeria-a-product-designers-role/kknswyv"
            external
            src="/assets/helium-background.png"
            eyebrow="08 — Featured · Business Insider ↗"
            title="Transforming maternal care in Nigeria"
            className="h-[260px]"
            titleSize="text-xl md:text-[22px]"
            imgBrightness="brightness(.5)"
          />
        </div>
      </div>

      {/* about */}
      <div id="about" className="scroll-mt-20 px-4 py-16 sm:px-5 md:px-14 md:py-[72px]">
        <div className="mb-4 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
          About
        </div>
        <p className="mb-5 max-w-[760px] text-[16px] font-normal leading-relaxed text-ink/78 md:text-[17px]">
          Lagos-born, London-based. I&apos;ve spent a decade shaping fintech
          and health-tech products across Africa — from Helium Health&apos;s
          EMR platform to Mkobo&apos;s digital bank. I care about the gap
          between what compliance requires and what users actually
          experience.
        </p>
        <p className="max-w-[760px] text-[16px] font-normal leading-relaxed text-ink/78 md:text-[17px]">
          Currently Product Design Lead at Tida Retail, building
          offline-first POS and BNPL financing for Nigerian SMEs. Previously
          Senior Product Designer at Helium Health and Senior UX Designer at
          Interswitch.
        </p>
      </div>

      {/* AI in the process */}
      <div id="ai" className="scroll-mt-20 border-t border-ink/12 px-4 py-16 sm:px-5 md:px-14 md:py-[72px]">
        <div className="mb-4 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
          The Honest Bit
        </div>
        <h2 className="mb-6 max-w-[820px] font-archivo-expanded text-2xl font-extrabold leading-[1.2] tracking-[-.01em] md:text-[34px]">
          This portfolio was ideated, designed, and built by Claude. I
          directed every decision.
        </h2>
        <p className="mb-6 max-w-[760px] text-[16px] font-normal leading-relaxed text-ink/78 md:text-[17px]">
          Most of the AI-and-design debate is stuck between panic —
          it&apos;s coming for the job — and denial — it can&apos;t do any
          part of it. Neither matches what&apos;s actually happening at the
          desk. AI has no taste, no judgment, and no stake in whether the
          thing works; what it has is speed. My job hasn&apos;t changed:
          understand the problem, know what good looks like, make the call.
          What changed is how long it takes to get from &quot;I think
          this is the right flow&quot; to a version a real person can use
          and break.
        </p>
        <div className="mb-6 max-w-[720px] border-l-[3px] border-accent py-1 pl-6">
          <p className="m-0 font-archivo-expanded text-lg font-medium italic leading-[1.5] text-ink/90 md:text-xl">
            &quot;Directing an AI well is a design skill. It rewards the
            same instinct good design always has — knowing exactly what
            you want, and recognising the moment what you&apos;re looking
            at isn&apos;t it.&quot;
          </p>
        </div>
        <p className="max-w-[760px] text-[16px] font-normal leading-relaxed text-ink/78 md:text-[17px]">
          The Cash Loan UX case study on this page is the clearest proof:
          five competing flows, built as real working code and field-tested
          with borrowers in Kenya and Nigeria, in five days — not five days
          of Figma, five days full stop. This site is the same story at a
          bigger scale: every layout call, every round of revisions, every
          line of the app running under this page, ideated and built
          end-to-end with Claude, directing a real product cycle from brief
          to shipped. If you&apos;re wondering whether I can actually
          direct AI tools to ship product work rather than just talk about
          it — you&apos;re looking at the answer.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="border-t border-ink/14 pt-4">
            <div className="font-archivo-expanded text-base font-bold text-accent">
              Prototyping, not pitching
            </div>
            <div className="mt-1.5 text-sm leading-relaxed text-ink/65">
              Turn a flow idea into working code the same day, so testing
              produces real behavioural signal instead of hypothetical
              opinions about a static screen.
            </div>
          </div>
          <div className="border-t border-ink/14 pt-4">
            <div className="font-archivo-expanded text-base font-bold text-accent">
              Research synthesis
            </div>
            <div className="mt-1.5 text-sm leading-relaxed text-ink/65">
              Compress interview transcripts and usability sessions into
              patterns fast enough to still be useful this week, not next
              quarter.
            </div>
          </div>
          <div className="border-t border-ink/14 pt-4">
            <div className="font-archivo-expanded text-base font-bold text-accent">
              Drafting, not deciding
            </div>
            <div className="mt-1.5 text-sm leading-relaxed text-ink/65">
              AI writes the first pass of copy, code, and layout. Every
              line ships only after I&apos;ve argued with it.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
