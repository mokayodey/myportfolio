import type { Metadata } from "next";
import CaseNav from "@/components/CaseNav";
import CaseHero from "@/components/CaseHero";
import Section from "@/components/Section";
import SectionRow from "@/components/SectionRow";
import StatCard from "@/components/StatCard";
import FullImage from "@/components/FullImage";
import NextCaseStudy from "@/components/NextCaseStudy";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Signature Bank — Tosin Ariyibi",
};

export default function SignatureBank() {
  return (
    <div className="min-h-screen w-full bg-canvas text-ink">
      <CaseNav />

      <CaseHero
        eyebrow="Product Design Lead · 2021–2022"
        title="Signature Bank — mobile banking for a digital-first launch."
        intro="Designed the mobile app for Signature Bank's 2022 launch with Interswitch — account opening, cards, and everyday banking, built entirely without a branch visit."
        facts={[
          {
            label: "Role",
            value: "Product designer at Interswitch, embedded with Signature Bank",
          },
          {
            label: "Scope",
            value: "Brand refresh, product design, research, usability testing, UI kit",
          },
          { label: "Platform", value: "iOS & Android" },
        ]}
      />

      <div className="px-4 pt-12 sm:px-5 md:px-14">
        <FullImage
          src="/assets/signature-background.png"
          alt="Signature Bank"
          className="rounded"
        />
      </div>

      <SectionRow label="Background & goals">
        <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          As a product designer at Interswitch, I led the mobile experience
          for Signature Bank — launched in 2022 to empower Nigerians and
          businesses, with Interswitch enhancing its financial
          infrastructure.
        </p>
        <p className="text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          The app was built to handle account opening, card requests, and
          account management entirely without a branch visit — critical to
          the bank&apos;s strategy of acquiring digitally savvy Nigerians as
          early adopters.
        </p>
      </SectionRow>

      <Section label="Branding assets & UI kit">
        <p className="mb-8 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          As a new bank, every touchpoint needed to feel consistent from day
          one. I built a UI kit aligned to Signature Bank&apos;s brand —
          extending beyond aesthetics into the in-app messaging and tone.
        </p>
        <div className="rounded bg-white p-8">
          <FullImage
            src="/assets/signature-branding.png"
            alt="Signature Bank UI kit"
          />
        </div>
      </Section>

      <SectionRow label="Onboarding & dashboard">
        <p className="mb-6 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Onboarding chunks KYC and identity verification into manageable
          sections — users unlock enhanced account privileges as they
          progressively verify more, speeding account opening without
          compromising compliance.
        </p>
        <p className="mb-8 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          The dashboard mirrors the same philosophy: fast access to the
          services people use most.
        </p>
        <FullImage
          src="/assets/signature-onboarding.png"
          alt="Signature Bank onboarding and dashboard"
          className="rounded"
        />
      </SectionRow>

      <SectionRow label="Sending money">
        <p className="mb-8 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Transfers to any bank in Nigeria, designed for simplicity and speed
          — a seamless flow for sending funds to any destination.
        </p>
        <FullImage
          src="/assets/signature-sendmoney.png"
          alt="Signature Bank send money"
          className="rounded"
        />
      </SectionRow>

      <Section label="Card Center" bg="muted">
        <p className="mb-8 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Requesting and managing every card linked to an account, entirely
          in-app — no branch visit required.
        </p>
        <div className="mb-8 flex flex-col gap-6 sm:flex-row">
          <StatCard value="3 clicks" label="to request a new bank card" />
          <StatCard
            value="2–4 clicks"
            label="to activate a card or generate a virtual card"
          />
        </div>
        <div className="overflow-hidden rounded">
          <FullImage
            src="/assets/signature-card.png"
            alt="Signature Bank card center"
          />
        </div>
      </Section>

      <SectionRow label="Paying bills">
        <p className="mb-8 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Data, airtime, electricity, cable TV and more — settled in a few
          clicks, in minutes.
        </p>
        <FullImage
          src="/assets/signature-paybills.png"
          alt="Signature Bank pay bills"
          className="rounded"
        />
      </SectionRow>

      <SectionRow label="Token management">
        <p className="mb-6 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Tokens add two-step authentication for transactions above set
          limits. Rather than requiring a branch visit, users request a hard
          or soft token directly from the app.
        </p>
        <div className="mb-8 inline-block rounded border border-ink/16 px-6 py-5">
          <span className="font-archivo-expanded text-xl font-bold text-accent">
            2–3 steps
          </span>
          <span className="text-sm font-medium text-ink/70">
            {" "}
            to request a token, no branch required
          </span>
        </div>
        <FullImage
          src="/assets/signature-token.png"
          alt="Signature Bank token management"
          className="rounded"
        />
      </SectionRow>

      <NextCaseStudy href="/work/money-master" name="Money Master" />
      <Footer />
    </div>
  );
}
