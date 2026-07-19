import type { Metadata } from "next";
import CaseNav from "@/components/CaseNav";
import CaseHero from "@/components/CaseHero";
import Section from "@/components/Section";
import SectionRow from "@/components/SectionRow";
import FullImage from "@/components/FullImage";
import NextCaseStudy from "@/components/NextCaseStudy";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Money Master — Tosin Ariyibi",
};

export default function MoneyMaster() {
  return (
    <div className="min-h-screen w-full bg-canvas text-ink">
      <CaseNav />

      <CaseHero
        eyebrow="Product Design Lead · 2022–2023"
        title="Money Master — banking Nigeria&apos;s underserved by mobile number alone."
        intro="Designed G-Kala, the personal banking app for Moneymaster PSB — a Glo-backed Payment Service Bank built to reach rural and underbanked Nigerians through their phone number alone."
        facts={[
          {
            label: "Role",
            value:
              "Lead designer — personal & corporate internet banking, mobile & web",
          },
          {
            label: "Scope",
            value:
              "Research, UX design, usability testing, design system, brand & UI kit",
          },
          {
            label: "Partner",
            value: "Interswitch, for Moneymaster PSB (a Glo subsidiary)",
          },
        ]}
      />

      <div className="px-4 pt-12 sm:px-5 md:px-14">
        <FullImage
          src="/assets/gkala-onboarding.png"
          alt="G-Kala onboarding"
          className="rounded"
        />
      </div>

      <SectionRow label="Background & goals">
        <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          In a bid to enhance financial inclusion, the Central Bank of
          Nigeria sanctioned three new Payment Service Banks in August 2020
          to close gaps in banking access. Moneymaster PSB — a subsidiary of
          Glo, Nigeria&apos;s second-largest telecom — was among them,
          mandated to keep at least 25% of its physical presence (ATMs and
          POS) in rural areas.
        </p>
        <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Interswitch partnered with Moneymaster to build its financial
          infrastructure. I was the primary designer, leading personal and
          corporate internet banking across mobile and web.
        </p>
        <p className="text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          The goal for G-Kala, the personal banking app: a bank manageable
          entirely through a registered Nigerian mobile number — leveraging
          NCC&apos;s directive linking numbers to NIN and BVN, and
          Moneymaster&apos;s access to Glo&apos;s NIN-linked subscriber base,
          to reach rural and underserved communities.
        </p>
      </SectionRow>

      <SectionRow label="User persona">
        <p className="mb-8 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          I built personas to ground the target audience — centered on users
          transitioning from USSD banking, often designed for feature
          phones, into confident smartphone users navigating a full digital
          banking experience for the first time.
        </p>
        <FullImage
          src="/assets/gkala-persona.png"
          alt="G-Kala user persona"
          className="rounded"
        />
      </SectionRow>

      <SectionRow label="Onboarding & account opening">
        <p className="mb-8 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Onboarding was streamlined to a Glo mobile number, or a BVN lookup
          for users on other networks — opening a full account in under 5
          minutes.
        </p>
        <div className="mb-8 inline-block rounded border border-ink/16 px-6 py-5">
          <span className="font-archivo-expanded text-xl font-bold text-accent">
            {"<5 min"}
          </span>
          <span className="text-sm font-medium text-ink/70">
            {" "}
            to open a new account, start to finish
          </span>
        </div>
        <FullImage
          src="/assets/gkala-onboarding.png"
          alt="G-Kala account opening"
          className="rounded"
        />
      </SectionRow>

      <SectionRow label="Dashboard, Find Us & menu">
        <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          The dashboard was designed around the most common daily
          transactions, with the account balance card kept front and center.
          Since Moneymaster has no physical branches, a &quot;Find Us&quot;
          feature helps users locate the nearest G-Kala agent for cash
          in/out.
        </p>
        <FullImage
          src="/assets/gkala-dashboard.png"
          alt="G-Kala dashboard, Find Us and menu"
          className="rounded"
        />
      </SectionRow>

      <SectionRow label="Sending money">
        <p className="mb-8 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Transfers to G-Kala accounts, other banks, or a phone number all
          follow the same streamlined flow — anticipating the
          recipient&apos;s bank so users skip hunting through a full list of
          every Nigerian bank, cutting steps versus the market standard.
        </p>
        <FullImage
          src="/assets/gkala-sendmoney.png"
          alt="G-Kala send money"
          className="rounded"
        />
      </SectionRow>

      <SectionRow label="Paying bills">
        <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          Airtime, data, electricity, cable TV and more, settled in 3–4
          taps, with saved beneficiaries for repeat payments.
        </p>
        <div className="mb-8 inline-block rounded border border-ink/16 px-6 py-5">
          <span className="font-archivo-expanded text-xl font-bold text-accent">
            3–4 taps
          </span>
          <span className="text-sm font-medium text-ink/70">
            {" "}
            to settle any bill
          </span>
        </div>
        <FullImage
          src="/assets/gkala-paybills.png"
          alt="G-Kala pay bills"
          className="rounded"
        />
      </SectionRow>

      <Section label="Usability testing & validation" bg="muted">
        <p className="mb-12 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
          We ran an unmoderated remote usability test across two core
          prototype flows to validate the design direction ahead of launch —
          measuring where users hesitated, misclicked, or dropped off
          entirely.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-md bg-white p-8">
            <div className="mb-1 font-archivo-expanded text-xl font-bold">
              Log in &amp; send money
            </div>
            <p className="mb-6 text-sm font-normal leading-[1.55] text-ink/62">
              &quot;Now that you have an account, log in and send money to a
              GTB account from your G-Kala wallet.&quot;
            </p>
            <div className="mb-6 rounded-md bg-muted px-[22px] py-5">
              <div className="font-archivo-expanded text-2xl font-extrabold leading-none text-accent md:text-[40px]">
                3x faster
              </div>
              <div className="mt-1 text-[13px] font-medium leading-[1.4] text-ink/65">
                than account creation — 32s vs. 104s to complete
              </div>
            </div>
            <div className="flex gap-7">
              <div>
                <div className="font-archivo-expanded text-lg font-bold">
                  74%
                </div>
                <div className="mt-1 text-xs font-medium leading-[1.4] text-ink/55">
                  fewer misclicks than sign-up
                </div>
              </div>
              <div>
                <div className="font-archivo-expanded text-lg font-bold">
                  8
                </div>
                <div className="mt-1 text-xs font-medium leading-[1.4] text-ink/55">
                  tester responses
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-white p-8">
            <div className="mb-1 font-archivo-expanded text-xl font-bold">
              Create an account
            </div>
            <p className="mb-6 text-sm font-normal leading-[1.55] text-ink/62">
              &quot;You&apos;ve decided to switch from your bank app to
              G-Kala. Sign up for a G-Kala account.&quot;
            </p>
            <div className="mb-6 rounded-md bg-muted px-[22px] py-5">
              <div className="font-archivo-expanded text-2xl font-extrabold leading-none text-accent md:text-[40px]">
                38.5%
              </div>
              <div className="mt-1 text-[13px] font-medium leading-[1.4] text-ink/65">
                completed sign-up unassisted — the clearest signal for where
                to simplify next
              </div>
            </div>
            <div className="flex gap-7">
              <div>
                <div className="font-archivo-expanded text-lg font-bold">
                  13
                </div>
                <div className="mt-1 text-xs font-medium leading-[1.4] text-ink/55">
                  tester responses
                </div>
              </div>
              <div>
                <div className="font-archivo-expanded text-lg font-bold">
                  104s
                </div>
                <div className="mt-1 text-xs font-medium leading-[1.4] text-ink/55">
                  average time on task
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 max-w-[680px] border-l-[3px] border-accent py-1 pl-6">
          <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[.12em] text-accent">
            Key takeaway
          </div>
          <p className="m-0 font-archivo-expanded text-lg font-medium italic leading-[1.5] text-ink/90">
            Once users had an account, the core banking flow was fast and
            intuitive — validating the design and pointing us squarely at
            sign-up as the next thing to fix.
          </p>
        </div>
      </Section>

      <NextCaseStudy href="/work/cash-loan-ux" name="Cash Loan UX" />
      <Footer />
    </div>
  );
}
