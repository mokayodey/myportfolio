import type { Metadata } from "next";
import CaseNav from "@/components/CaseNav";
import CaseHero from "@/components/CaseHero";
import Section from "@/components/Section";
import SectionRow from "@/components/SectionRow";
import FullImage from "@/components/FullImage";
import NextCaseStudy from "@/components/NextCaseStudy";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mkobo Bank — Tosin Ariyibi",
};

const researchStats = [
  { v: "84%", l: "had used a mobile banking app before" },
  { v: "87%", l: "don't have access to reliable credit facilities" },
  { v: "84%", l: "prioritize trust & reliability over features or rates" },
  { v: "98%", l: "prioritize fund safety above all else" },
];

const personas = [
  {
    initials: "NO",
    bg: "bg-accent",
    name: "Nkechi Ogbonna",
    meta: "26 · Office Admin · Lagos, Nigeria",
    bio: "Part-time student at the University of Lagos, working as an office administrator at an insurance company. Dedicated and goal-driven — earns ₦80,000 monthly.",
    goals: [
      "Manage her finances and finish her degree",
      "Wants a financial partner for urgent needs",
    ],
    quote:
      '"I come from a traditional Igbo family. I\'d like to give them the world — they\'ve been the backbone of my existence."',
  },
  {
    initials: "AG",
    bg: "bg-ink",
    name: "Adeola Gbadamosi",
    meta: "29 · Security Personnel · Lagos",
    bio: "Moved to Lagos from Osun State for a better life. Works security at Halogen Securities, married with 2 kids, and is working his way up to increase his income.",
    goals: [
      "Needs a financial support partner",
      "Needs a better job to increase earnings",
    ],
    quote:
      '"I moved to Lagos for a better life. I\'m married with 2 kids and want to provide for them uninterruptedly."',
  },
];

const featureInterest = [
  { label: "Send & Receive Money", pct: "23.8%", width: "100%", color: "text-accent", bar: "bg-accent" },
  { label: "Earned Wage Access", pct: "19.0%", width: "80%", color: "text-ink/55", bar: "bg-accent/75" },
  { label: "Bill Payments", pct: "16.7%", width: "70%", color: "text-ink/55", bar: "bg-accent/55" },
  { label: "Transaction History", pct: "16.7%", width: "70%", color: "text-ink/55", bar: "bg-accent/55" },
  { label: "Saving", pct: "14.3%", width: "60%", color: "text-ink/45", bar: "bg-accent/40" },
  { label: "Payment Links", pct: "9.5%", width: "40%", color: "text-ink/40", bar: "bg-accent/28" },
];

const impactStats = [
  { v: "84%", l: "retention rate" },
  { v: "40K", l: "accounts opened in year one" },
  { v: "300%", l: "increase in deposits within 1yr" },
  { v: "3M+", l: "monthly recurring transactions" },
  { v: "100K+", l: "app downloads" },
];

const reviews = [
  {
    quote:
      '"Wow, this app is so reliable, I love it, so efficient. Thumbs up to Mkobo."',
    name: "Stephanas Khobe",
  },
  {
    quote:
      '"Mkobo is very fast and good online banking, easy to use, good services."',
    name: "Moses Uhar",
  },
  {
    quote: '"Excellent."',
    name: "Okey Ajom",
  },
];

const fixes = [
  {
    n: "1.",
    t: "Progressive onboarding",
    d: "Broke KYC into smaller steps, collecting information gradually instead of upfront.",
  },
  {
    n: "2.",
    t: "Tiered access",
    d: "Users could start transacting immediately at limited capacity, unlocking higher limits as they verified more.",
  },
  {
    n: "3.",
    t: "Gamified progress",
    d: "Progress indicators and milestones gave users a sense of achievement and reduced perceived effort.",
  },
];

export default function MkoboBank() {
  return (
    <div className="min-h-screen w-full bg-canvas text-ink">
      <CaseNav />

      <CaseHero
        eyebrow="Product Design Lead · 2020–2022"
        title="Mkobo Bank — building a digital bank Nigeria's underbanked could trust."
        intro="Led design and brand for a digital microfinance bank from zero — from research and rebrand through MVP launch, onboarding rescue, and 40,000 accounts in year one."
        facts={[
          {
            label: "Role",
            value:
              "Product Design Lead — managed 2 product designers + 1 brand designer",
          },
          {
            label: "Scope",
            value:
              "Brand revitalization, product discovery, MVP design, design system",
          },
          { label: "Platform", value: "iOS & Android" },
        ]}
      />

      <div className="px-4 pt-12 sm:px-5 md:px-14">
        <FullImage
          src="/assets/mkobo-cover.png"
          alt="Mkobo Bank"
          className="rounded"
        />
      </div>

      <SectionRow label="Context">
        <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Nigeria&apos;s banking sector sits on a $9 billion value pool, yet a
          majority of consumers remain underserved — limited rural access,
          affordability barriers, and poor experiences compound across the
          board. Mkobo Microfinance Bank set out to go digital-first, building
          a bank for economically active and salary-earning Nigerians.
        </p>
        <p className="text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          I led the design team through rebrand, discovery, and MVP delivery —
          establishing the design system Mkobo still runs on today.
        </p>
      </SectionRow>

      <Section label="Rebranding for consistency & usability">
        <p className="mb-8 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          The existing Mkobo mark read informal and inconsistent across
          touchpoints. I led a full identity revitalization — a bridge-form
          mark suggesting connection and reliability — and rebuilt the visual
          system used across app, email, and internal dashboards.
        </p>
        <div className="rounded bg-white p-6 md:p-12">
          <FullImage src="/assets/mkobo-rebrand.png" alt="Mkobo rebrand" />
        </div>
      </Section>

      <SectionRow label="Research">
        <p className="mb-7 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          We ran competitive analysis and research across existing and
          potential customers to validate our product direction and
          prioritize features.
        </p>
        <div className="mb-8 flex flex-col gap-6 sm:flex-row">
          <div className="flex-1 rounded bg-muted px-6 py-5">
            <div className="mb-2.5 font-archivo-expanded text-2xl font-extrabold text-accent">
              30 Existing Customers
            </div>
            <div className="text-[13px] font-medium leading-relaxed text-ink/65">
              Mkobo account holders · own a smartphone
            </div>
          </div>
          <div className="flex-1 rounded bg-muted px-6 py-5">
            <div className="mb-2.5 font-archivo-expanded text-2xl font-extrabold text-accent">
              20 Potential Customers
            </div>
            <div className="text-[13px] font-medium leading-relaxed text-ink/65">
              Ages 20–60 · employed or self-employed · own a bank account &
              smartphone
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6">
          {researchStats.map((s) => (
            <div key={s.l} className="border-t border-ink/14 pt-4">
              <div className="font-archivo-expanded text-[26px] font-extrabold text-accent">
                {s.v}
              </div>
              <div className="mt-1.5 text-[13px] font-medium leading-snug text-ink/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {personas.map((p) => (
            <div key={p.name} className="overflow-hidden rounded-md bg-white">
              <div className="flex items-center gap-4 px-6 pb-5 pt-6">
                <div
                  className={`flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full font-archivo-expanded text-lg font-bold text-white ${p.bg}`}
                >
                  {p.initials}
                </div>
                <div>
                  <div className="font-archivo-expanded text-lg font-bold">
                    {p.name}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-ink/55">
                    {p.meta}
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <p className="mb-[18px] text-sm font-normal leading-relaxed text-ink/72">
                  {p.bio}
                </p>
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[.08em] text-accent">
                  Goals & needs
                </div>
                <ul className="m-0 mb-[18px] list-disc pl-[18px] text-sm font-normal leading-relaxed text-ink/72">
                  {p.goals.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
                <p className="m-0 border-t border-ink/12 pt-3.5 text-sm font-normal italic leading-relaxed text-ink/60">
                  {p.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionRow>

      <SectionRow label="Defining the MVP">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
          <div className="flex-1">
            <div className="mb-3 font-archivo-expanded text-[15px] font-bold">
              Must have
            </div>
            <p className="mb-6 text-base font-normal leading-relaxed text-ink/75">
              Account opening, onboarding, send & receive money, earned wage
              access, transaction history, KYC.
            </p>
            <div className="mb-3 font-archivo-expanded text-[15px] font-bold">
              Nice to have
            </div>
            <p className="m-0 text-base font-normal leading-relaxed text-ink/75">
              Savings, pay bills, payment links, request money, aggregated
              balance.
            </p>
          </div>
          <div className="flex-none md:w-[340px]">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[.1em] text-ink/50">
              Feature interest by request volume
            </div>
            <div className="flex flex-col gap-3.5">
              {featureInterest.map((f) => (
                <div key={f.label}>
                  <div className="mb-1.5 flex justify-between text-[13px] font-semibold">
                    <span>{f.label}</span>
                    <span className={f.color}>{f.pct}</span>
                  </div>
                  <div className="h-2 rounded bg-ink/10">
                    <div
                      className={`h-full rounded ${f.bar}`}
                      style={{ width: f.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionRow>

      <div className="px-4 pb-14 sm:px-5 md:px-14 md:pb-20">
        <FullImage
          src="/assets/mkobo-isometric.png"
          alt="Mkobo isometric"
          className="rounded"
        />
      </div>

      <div className="border-b border-ink/12 bg-muted px-4 py-14 sm:px-5 md:px-14 md:py-20">
        <div className="mb-6 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
          The problem after launch
        </div>
        <p className="mb-10 max-w-[760px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Post-MVP, sign-ups dropped off before reaching value. Follow-up
          calls, surveys and Mixpanel behavioural data on 100 failed sign-ups
          showed users abandoning the flow at the ID upload screen — the
          process felt overwhelming and time-consuming, and users wanted to
          see value before completing full KYC.
        </p>
        <div className="mb-14">
          <div className="flex items-end gap-0">
            <div className="w-[38%] flex-none sm:w-[320px]">
              <div className="flex h-[140px] items-start justify-center rounded-l bg-ink/14 pt-4 sm:h-[220px] sm:pt-5">
                <span className="font-archivo-expanded text-2xl font-extrabold sm:text-4xl">
                  100%
                </span>
              </div>
              <div className="mt-4 text-sm font-semibold text-ink/60 sm:text-[15px]">
                Started sign-up
              </div>
            </div>
            <div className="relative w-[32%] flex-none sm:w-[220px]">
              <div className="flex h-[100px] items-start justify-center bg-accent pt-3 sm:h-[160px] sm:pt-4">
                <span className="font-archivo-expanded text-xl font-extrabold text-white sm:text-[36px]">
                  32%
                </span>
              </div>
              <div className="mt-4 text-sm font-semibold text-ink/60 sm:text-[15px]">
                Reached ID upload
              </div>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-3 py-2 font-sans text-xs font-bold text-canvas sm:-top-14 sm:px-[18px] sm:py-2.5 sm:text-[15px]">
                76% drop here — the cliff
              </div>
            </div>
            <div className="w-[24%] flex-none sm:w-[150px]">
              <div className="flex h-[46px] items-start justify-center rounded-r bg-ink/14 pt-2.5 sm:h-[72px]">
                <span className="font-archivo-expanded text-base font-extrabold sm:text-[26px]">
                  10%
                </span>
              </div>
              <div className="mt-4 text-sm font-semibold text-ink/60 sm:text-[15px]">
                Retained
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[680px] border-l-[3px] border-accent py-1 pl-6">
          <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[.12em] text-accent">
            Key takeaway
          </div>
          <p className="m-0 font-archivo-expanded text-lg font-medium italic leading-snug text-ink/90 md:text-xl">
            &quot;Designing for compliance is not enough; how users experience
            compliance determines whether they stay or drop off.&quot;
          </p>
        </div>
      </div>

      <SectionRow label="Reducing drop-offs — research">
        <div className="mb-3.5 text-xs font-semibold uppercase tracking-[.1em] text-accent">
          Methods
        </div>
        <div className="mb-8 flex flex-wrap gap-3">
          <span className="rounded-full bg-muted px-4 py-2 text-[13px] font-semibold">
            Follow-up calls
          </span>
          <span className="rounded-full bg-muted px-4 py-2 text-[13px] font-semibold">
            Surveys
          </span>
          <span className="rounded-full bg-muted px-4 py-2 text-[13px] font-semibold">
            Behavioural data via Mixpanel
          </span>
        </div>
        <div className="mb-9 flex gap-8">
          <div>
            <div className="font-archivo-expanded text-[26px] font-extrabold text-accent md:text-3xl">
              30
            </div>
            <div className="mt-1 text-[13px] font-medium leading-snug text-ink/60">
              customer calls
            </div>
          </div>
          <div>
            <div className="font-archivo-expanded text-[26px] font-extrabold text-accent md:text-3xl">
              100
            </div>
            <div className="mt-1 text-[13px] font-medium leading-snug text-ink/60">
              failed / uncompleted sign-ups analyzed
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[.1em] text-accent">
              Key findings
            </div>
            <p className="m-0 text-base font-normal leading-relaxed text-ink/78">
              Users noted the process was <strong>overwhelming</strong> and{" "}
              <strong>time-consuming</strong>.
            </p>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[.1em] text-accent">
              Core insight
            </div>
            <ul className="m-0 list-disc pl-[18px] text-base font-normal leading-relaxed text-ink/78">
              <li>Users wanted to get started quickly</li>
              <li>Trust needed to be built progressively</li>
              <li>Immediate value mattered more than full completion</li>
            </ul>
          </div>
        </div>
      </SectionRow>

      <SectionRow label="The fix">
        <div className="mb-8 flex flex-col gap-6">
          {fixes.map((f) => (
            <div key={f.t}>
              <div className="font-archivo-expanded text-base font-bold text-accent">
                {f.n} {f.t}
              </div>
              <div className="mt-1.5 text-base font-normal leading-relaxed text-ink/75">
                {f.d}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-10 inline-block rounded border border-ink/16 px-6 py-5">
          <span className="font-archivo-expanded text-xl font-bold text-accent">
            90%+
          </span>
          <span className="text-sm font-medium text-ink/70">
            {" "}
            of users preferred the new flow in usability testing
          </span>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="w-[calc(33.333%-16px)] min-w-[140px] flex-none overflow-hidden rounded">
            <FullImage src="/assets/mkobo-fix-1.png" alt="Onboarding fix 1" />
          </div>
          <div className="w-[calc(33.333%-16px)] min-w-[140px] flex-none overflow-hidden rounded">
            <FullImage src="/assets/mkobo-fix-2.png" alt="Onboarding fix 2" />
          </div>
          <div className="w-[calc(33.333%-16px)] min-w-[140px] flex-none overflow-hidden rounded">
            <FullImage src="/assets/mkobo-fix-3.png" alt="Onboarding fix 3" />
          </div>
        </div>
      </SectionRow>

      <div className="bg-ink px-4 py-16 text-canvas sm:px-5 md:px-14 md:py-[88px]">
        <div className="mb-9 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
          Impact
        </div>
        <div className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {impactStats.map((s) => (
            <div key={s.l}>
              <div className="font-archivo-expanded text-[32px] font-extrabold md:text-[38px]">
                {s.v}
              </div>
              <div className="mt-2 text-[13px] font-medium leading-snug text-canvas/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start gap-8 md:flex-row md:gap-10">
          <div className="flex-none text-center md:text-left">
            <div className="font-archivo-expanded text-4xl font-extrabold md:text-[56px]">
              4.8
            </div>
            <div className="mt-1 text-base tracking-[2px] text-accent">
              ★★★★★
            </div>
            <div className="mt-2 text-xs font-medium text-canvas/50">
              App store rating
            </div>
          </div>
          <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-md bg-canvas/6 p-5">
                <div className="mb-2.5 text-xs tracking-[2px] text-accent">
                  ★★★★★
                </div>
                <p className="mb-3.5 text-sm font-normal leading-relaxed text-canvas/82">
                  {r.quote}
                </p>
                <div className="text-xs font-semibold text-canvas/50">
                  {r.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section label="Beyond the app — employer & ops dashboards">
        <p className="mb-8 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Earned wage access needed an employer-facing side too. I designed
          the web dashboard HR teams use to manage staff, approve requests,
          and track spend against payroll — extending the design system from
          mobile to a data-dense desktop surface.
        </p>
        <div className="overflow-hidden rounded shadow-[0_12px_32px_rgba(28,26,22,.12)]">
          <FullImage
            src="/assets/mkobo-web-dashboard.png"
            alt="Mkobo web dashboard"
          />
        </div>
      </Section>

      <NextCaseStudy href="/work/tida-retail" name="Tida Retail" />
      <Footer />
    </div>
  );
}
