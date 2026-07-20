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

      {/* work grid */}
      <div id="work" className="scroll-mt-20 px-4 pb-2 pt-14 sm:px-5 md:px-14">
        <div className="mb-7 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
          Selected Work
        </div>

        <div className="mb-6 flex flex-col gap-6 md:flex-row">
          <WorkCard
            href="/work/cash-loan-ux"
            src="/assets/mkopa-cover.png"
            eyebrow="01 — Cash Loan UX · 2026"
            title="Four flows, two markets, one research study."
            className="h-[280px] md:h-[420px] md:flex-[1.4]"
            titleSize="text-xl md:text-[28px]"
            imgBrightness="brightness(.6)"
          />
          <div className="flex flex-col gap-6 md:flex-1">
            <WorkCard
              href="/work/tida-retail"
              src="/assets/tida-cover.png"
              eyebrow="02 — Tida Retail · 2025"
              title="Closing the reconciliation gap in retail POS"
              className="h-[198px]"
              titleSize="text-lg md:text-[19px]"
            />
            <WorkCard
              href="/work/mkobo-bank"
              src="/assets/mkobo-cover.png"
              eyebrow="03 — Mkobo Bank · 2020–2022"
              title="40,000 accounts in year one, from a blank canvas"
              className="h-[198px]"
              titleSize="text-lg md:text-[19px]"
            />
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <WorkCard
            href="/work/affordability-screen"
            src="/assets/mkopa-cover.png"
            eyebrow="04 — M-KOPA · South Africa"
            title="Rescuing the affordability screen that lost 40% of applicants"
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

      <Footer />
    </div>
  );
}
