import type { Metadata } from "next";
import CaseNav from "@/components/CaseNav";
import CaseHero from "@/components/CaseHero";
import Section from "@/components/Section";
import SectionRow from "@/components/SectionRow";
import ScreenshotGrid from "@/components/ScreenshotGrid";
import FullImage from "@/components/FullImage";
import StatCard from "@/components/StatCard";
import NextCaseStudy from "@/components/NextCaseStudy";
import Footer from "@/components/Footer";
import CaseTOC from "@/components/CaseTOC";

export const metadata: Metadata = {
  title: "Affordability Screen — Tosin Ariyibi",
};

const tocSections = [
  { id: "top", label: "About" },
  { id: "result", label: "Goals & impact" },
  { id: "problem", label: "The challenge" },
  { id: "research", label: "Research" },
  { id: "hypothesis", label: "Hypothesis" },
  { id: "design-principles", label: "Design principles" },
  { id: "solutions", label: "Solutions" },
  { id: "iterations", label: "Iterations & trade-offs" },
  { id: "flow", label: "Final flow" },
];

const problems = [
  {
    t: "1 · Anxiety-inducing consent, placed wrong",
    d: 'Cold, dense legal copy mid-screen — "debt review", "credit bureaus" — alarming with no plain-language alternative.',
  },
  {
    t: "2 · No trust signal at point of entry",
    d: "Users were asked for sensitive income data with nothing explaining why or what happens next.",
  },
  {
    t: '3 · Confusing "remaining balance" field',
    d: "Styled like a disabled input with no label explaining its significance — users had no way to tell whether this number determined their loan eligibility. It was also redundant: it had no bearing on the offer they'd actually receive.",
  },
  {
    t: "4 · No progress indicator",
    d: 'No "Step X of Y" — a key driver of abandonment in multi-step forms.',
  },
  {
    t: '5 · "Agree & continue" conflated two actions',
    d: "Agreeing to terms and navigating forward at the most anxiety-prone moment.",
  },
  {
    t: "6 · Consent buried under inputs",
    d: "Trust-building and legal agreement were afterthoughts below the functional elements.",
  },
];

const oldScreens = [
  { src: "/assets/mkopa-old-home.png", caption: "Home — offer banner (entry point)" },
  { src: "/assets/mkopa-old-empty.png", caption: "Financial background — both fields, dense consent" },
  { src: "/assets/mkopa-old-focus.png", caption: "Income focused — no progress, no trust cue" },
  { src: "/assets/mkopa-old-filled.png", caption: 'Filled — confusing "remaining balance", fused CTA' },
];

const hypothesisPoints = [
  "Users abandon when they hit unexpected legal language mid-form.",
  "First-time smartphone users with low financial literacy abandon when they don't understand a term they're asked to agree to.",
  "A focused, separate consent moment makes the commitment feel deliberate, not alarming.",
  "A visible progress bar reduces uncertainty and increases commitment.",
  "One question at a time reduces decision fatigue and perceived complexity.",
];

const welcomeReasons = [
  {
    n: "01",
    t: "Reward first, effort second",
    d: "Seeing the eligible amount up front gives a reason to continue before any work is asked of them.",
  },
  {
    n: "02",
    t: "Personal, by first name",
    d: '"Great news, Yohanna!" is deliberate — it makes the moment feel casual and friendly, like a person talking, not a system processing an application.',
  },
  {
    n: "03",
    t: "Expectations set early",
    d: '"We may ask a few quick questions" and "Find out in under 2 minutes" tell users what\'s coming, so the income question no longer feels like an ambush.',
  },
];

const solution1Screens = [
  { src: "/assets/s1-welcome.png", caption: "Pre-qualify — reward shown first (R198,000)" },
  { src: "/assets/s1-b.png", caption: "Income — Step 1 of 3, keyboard + trust row" },
  { src: "/assets/s1-d.png", caption: "Spend — Step 2 of 3, one question only" },
  { src: "/assets/s1-f.png", caption: "Consent — focused modal, plain-language explainer" },
];

const mkopaPrinciples = [
  {
    n: "01",
    t: "Meet customers where they are",
    q: "Built for me",
    d: 'Auto-focused keyboards remove tap friction, and directive placeholder copy ("ZAR Enter here") reads as guidance rather than a pre-filled value — details that matter most to someone opening a loan app for the first time. Example-based placeholders ("R e.g. 20,000") show format and scale without assuming anyone already knows the currency conventions.',
  },
  {
    n: "02",
    t: "Make the complex feel simple",
    q: "A financial app that doesn't make me feel stressed",
    d: 'Solution 1 asks one question per screen, so nothing competes for attention. A progress bar with a named goal ("Calculate My Loan Offer — Step 2 of 3") turns an abstract wait into something the user can actually track.',
  },
  {
    n: "03",
    t: "Earn trust",
    q: "With M-KOPA I always understand what I've agreed to",
    d: 'The debt-review consent moved out of the dense mid-form paragraph and into its own focused modal, with a tappable "Not sure what this means?" explainer. A trust banner stays anchored above the keyboard — visible exactly when anxiety about handing over financial data peaks, not before.',
  },
  {
    n: "04",
    t: "Celebrate progress",
    q: "I'm not repaying M-KOPA, I'm investing in my future.",
    d: 'The pre-qualify welcome screen leads with the reward, not the effort: the eligible amount animates in before a single question is asked, reframing the moment from "fill out a form" to "claim something that\'s already yours."',
  },
  {
    n: "05",
    t: "Build for real-world constraints",
    q: "Works every day, everywhere, always.",
    d: "Both solutions were designed and tested for first-time, lower-literacy, anxious borrowers specifically — not just confident, connected power users — so the flow that shipped had to hold up for the customers most likely to drop off, not the easiest ones to design for.",
  },
];

const attentionBars = [
  { l: "Question + ZAR input", v: 68 },
  { l: "Green submit key", v: 14 },
  { l: "Step counter + progress bar", v: 9 },
  { l: "Trust row (when visible)", v: 6 },
  { l: "App bar + sub-headline", v: 3 },
];

const flowSteps = [
  { n: "01", t: "Home — Congratulations offer card" },
  { n: "02", t: "Pre-qualify — ZAR 198,000 animates in" },
  { n: "03", t: "Income — Step 1 of 3, keyboard, trust row" },
  { n: "04", t: 'Spend — Step 2 of 3, "ZAR Enter here"' },
  { n: "05", t: "Consent — plain-language debt review" },
  { n: "06", t: "Loading — shimmer skeleton, ~2s" },
  { n: "07", t: "Offers — five options, expandable rows" },
];

const solution2Screens = [
  { src: "/assets/s1-welcome.png", caption: "Pre-qualify welcome — shared entry point" },
  { src: "/assets/s2-c.png", caption: 'Both fields, one screen — "R e.g" example placeholders' },
  { src: "/assets/s2-a.png", caption: "Filled — single Continue confirms both" },
  { src: "/assets/s2-b.png", caption: "Consent — shared dialog, dismissible" },
];

const comparisonRows = [
  { l: "Income & spend", s1: "Two separate screens", s2: "Single screen, both fields" },
  { l: "Keyboard", s1: "Auto-focus per field", s2: "Tapped to focus" },
  { l: "Placeholder", s1: "ZAR Enter here", s2: "ZAR e.g. 20,000" },
  { l: "Primary CTA", s1: "Send arrow per field", s2: "Continue, both required" },
  { l: "Progress", s1: "Step X of 3", s2: "No indicator" },
];

export default function AffordabilityScreen() {
  return (
      <div className="min-h-screen w-full bg-canvas text-ink">
        <CaseNav />

        <CaseHero
          id="top"
          eyebrow="Product Design Lead · M-KOPA · South Africa"
          title="Rescuing the affordability screen that lost 40% of loan applicants."
          intro="The cash-loan flow was haemorrhaging applicants at a single step — the Financial Background screen. I diagnosed why, formed a hypothesis, and designed two competing redesigns to reduce cognitive load, separate consent from input, and rebuild trust at the exact moment users were asked for sensitive data."
          facts={[
            { label: "Role", value: "Product design, prototyping, interaction spec" },
            { label: "Market", value: "South Africa (ZAR)" },
            { label: "Focus", value: "Drop-off on the Financial Background screen" },
          ]}
        />

        <div className="flex pt-10 lg:gap-10 lg:pl-14">
          <CaseTOC sections={tocSections} />
          <div className="min-w-0 flex-1">

        {/* impacts */}
        <Section id="result" label="Goals & impact" bg="ink" inverted>
          <div className="mb-1.5 text-[11px] font-semibold uppercase leading-none tracking-[.1em] text-gold">
            The goal
          </div>
          <p className="mb-7 max-w-[760px] text-base font-normal leading-relaxed text-canvas/82 md:text-[17px]">
            The goal was simple to state: improve conversion on the
            cash-loan flow. That question sent us into the behavioural
            data — funnel and screen-level analytics — looking for exactly
            where applicants were giving up. One step stood out
            immediately: the Financial Background screen, where over 40%
            of applicants dropped off before ever seeing an offer.
          </p>
          <div className="mb-1.5 text-[11px] font-semibold uppercase leading-none tracking-[.1em] text-gold">
            What shipped
          </div>
          <p className="mb-8 max-w-[760px] text-base font-normal leading-relaxed text-canvas/82 md:text-[17px]">
            Solution 2 — the single-screen version — shipped to production
            for South African cash-loan applicants, alongside the new
            pre-qualify welcome screen. Early data says it worked:
            conversion from the start of the flow through to loan
            disbursement nearly doubled, and completion of the financial
            background screen — the exact step that was losing 40% of
            applicants — jumped sharply.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-md border border-canvas/20 p-5">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[.1em] text-gold">
                Start of flow → loan disbursement
              </div>
              <div className="font-archivo-expanded text-2xl font-extrabold text-canvas md:text-[28px]">
                23.8% → 47.4%
              </div>
            </div>
            <div className="rounded-md border border-canvas/20 p-5">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[.1em] text-gold">
                Financial background → submitted
              </div>
              <div className="font-archivo-expanded text-2xl font-extrabold text-canvas md:text-[28px]">
                51% → 81%
              </div>
            </div>
          </div>
        </Section>

        {/* the challenge */}
        <SectionRow id="problem" label="The challenge">
          <p className="mb-6 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            The cash-loan application had a{" "}
            <b className="font-bold">drop-off rate over 40%</b> on the
            Financial Background screen — where users enter monthly income
            and spend before seeing an offer. The original screen showed both
            fields at once, an auto-calculated &quot;remaining balance&quot;,
            a dense consent paragraph, and a single &quot;Agree &amp;
            continue&quot; button that fused legal agreement with navigation.
            No progress indicator, no explanation of why the data was needed.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {problems.map((p) => (
              <div key={p.t} className="rounded-md bg-white px-5 py-5">
                <div className="mb-1.5 font-archivo-expanded text-[15px] font-bold text-accent">
                  {p.t}
                </div>
                <div className="text-[15px] font-normal leading-relaxed text-ink/72">
                  {p.d}
                </div>
              </div>
            ))}
          </div>
        </SectionRow>

        {/* old UI screens */}
        <Section label="The screen we were losing people on">
          <p className="mb-8 max-w-[720px] text-base font-normal leading-relaxed text-ink/72">
            From the home-screen offer banner (&quot;Cash Loans up to ZAR
            198,000&quot;), applicants landed on the Financial Background
            screen. Over 40% dropped here — before ever seeing an offer.
          </p>
          <ScreenshotGrid items={oldScreens} cols={4} frame="phone" />
        </Section>

        {/* research */}
        <Section id="research" label="Research">
          <p className="mb-8 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            Before writing a hypothesis, I went back to the people who had
            actually dropped off. We called 30 customers who had started a
            loan application on this screen but never completed it, to hear
            in their own words where it broke down.
          </p>
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <StatCard value="30" label="drop-off customers called directly" />
            <StatCard
              value="80%"
              label="didn't understand why the information was needed, or what it would be used for"
            />
          </div>
          <p className="max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            The pattern was consistent: customers were being asked for
            sensitive financial data with no explanation of why, and the
            long consent text sitting in the middle of the form felt
            overwhelming rather than reassuring.
          </p>
        </Section>

        {/* hypothesis */}
        <Section id="hypothesis" label="The hypothesis" bg="muted">
          <p className="mb-8 max-w-[820px] font-archivo-expanded text-lg font-medium leading-snug text-ink md:text-2xl md:leading-[1.4]">
            If we reduce cognitive load at each step, separate consent from
            input, explain legal terms in plain language, and give a clear
            sense of progress and purpose — completion on the financial
            background screen should increase.
          </p>
          <div className="flex max-w-[720px] flex-col gap-2.5">
            {hypothesisPoints.map((point) => (
              <div
                key={point}
                className="text-base font-normal leading-[1.7] text-ink/80 md:text-[17px]"
              >
                • {point}
              </div>
            ))}
          </div>
        </Section>

        {/* design principles */}
        <Section id="design-principles" label="Design principles">
          <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            M-KOPA designs against five company-wide UX principles — a
            shared framework the whole product and design team works from,
            not something invented per project. Here&apos;s how they showed
            up in this redesign specifically.
          </p>
          <div className="flex flex-col">
            {mkopaPrinciples.map((p, i, arr) => (
              <div
                key={p.n}
                className={`flex gap-5 border-t border-ink/14 py-7 sm:gap-7 ${
                  i === arr.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="w-8 flex-none font-archivo-expanded text-xl font-extrabold text-accent sm:w-10 sm:text-2xl">
                  {p.n}
                </div>
                <div>
                  <div className="mb-1 font-archivo-expanded text-lg font-bold">
                    {p.t}
                  </div>
                  <div className="mb-2.5 text-[13px] italic text-ink/45">
                    &quot;{p.q}&quot;
                  </div>
                  <div className="text-base font-normal leading-relaxed text-ink/72">
                    {p.d}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* solutions */}
        <Section id="solutions" label="Solutions" bg="muted">
          {/* welcome screen spotlight */}
          <div className="mb-16 flex flex-col gap-10 md:flex-row md:gap-16">
            <div className="flex-1 md:max-w-[640px]">
              <div className="mb-5 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
                A new screen · the biggest lever
              </div>
              <h3 className="m-0 mb-6 max-w-[560px] font-archivo-expanded text-2xl font-extrabold leading-[1.15] tracking-[-.01em] sm:text-3xl md:text-[34px]">
                A warm welcome before a single question.
              </h3>
              <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
                Before, tapping the offer banner dropped users straight into
                being asked for their income — no context, no reassurance,
                just a form. For a first-time, lower-literacy borrower, that
                cold open is exactly where hesitation starts.
              </p>
              <p className="mb-7 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
                So I introduced a pre-qualify welcome screen — an on-ramp,
                not a gate. It leads with the reward (&quot;You could be
                eligible for up to R 198,000&quot;), sets expectations with
                three quick benefit rows, and only then invites the user
                forward. It reframes the moment from &quot;fill out a
                form&quot; to &quot;claim something that&apos;s already
                yours.&quot;
              </p>
              <div className="flex flex-col gap-3.5">
                {welcomeReasons.map((r) => (
                  <div key={r.n} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex-none font-archivo-expanded text-[13px] font-extrabold text-accent">
                      {r.n}
                    </span>
                    <div>
                      <div className="mb-1 font-archivo-expanded text-[15px] font-bold">
                        {r.t}
                      </div>
                      <div className="text-[15px] font-normal leading-relaxed text-ink/72">
                        {r.d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-none md:w-[280px]">
              <div className="overflow-hidden rounded-[14px] bg-canvas shadow-[0_16px_40px_rgba(12,14,12,.16)]">
                <FullImage
                  src="/assets/s1-welcome.png"
                  alt="The pre-qualify welcome screen"
                />
              </div>
              <div className="mt-3 text-center text-xs font-semibold leading-snug text-ink/60">
                The pre-qualify welcome screen
              </div>
            </div>
          </div>

          {/* solution 1 */}
          <div className="mb-16 border-t border-ink/12 pt-14">
            <div className="mb-5 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
              Solution 1
            </div>
            <h3 className="m-0 mb-5 max-w-[820px] font-archivo-expanded text-2xl font-extrabold leading-[1.15] tracking-[-.01em] sm:text-3xl md:text-[34px]">
              Progressive reveal — one question per screen
            </h3>
            <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
              Split the step into two dedicated full screens — one for
              income, one for spend. Each shows a single large question, a
              helper line and a ZAR field, with the keyboard auto-focused on
              entry. A trust banner stays anchored above the keyboard,
              visible exactly when anxiety peaks. Consent then appears as
              its own focused modal before loading and offers. The bet: one
              question at a time keeps attention undivided — optimised for
              first-time, lower-literacy, anxious users.
            </p>
            <ScreenshotGrid items={solution1Screens} cols={4} frame="phone" />
          </div>

          {/* solution 2 */}
          <div className="border-t border-ink/12 pt-14">
            <div className="mb-5 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
              Solution 2
            </div>
            <h3 className="m-0 mb-5 max-w-[820px] font-archivo-expanded text-2xl font-extrabold leading-[1.15] tracking-[-.01em] sm:text-3xl md:text-[34px]">
              Single screen — both fields, inline
            </h3>
            <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
              An alternative to the same problem: both income and spend on
              one screen with native inputs and a single &quot;Continue&quot;
              CTA. Example-based placeholders (&quot;ZAR e.g. 20,000&quot;)
              show format and scale; one deliberate action confirms both
              values. The shared consent dialog is identical to Solution 1.
              Lower-friction for confident and returning users — the
              trade-off is more visual complexity upfront.
            </p>
            <ScreenshotGrid items={solution2Screens} cols={4} frame="phone" />
          </div>
        </Section>

        {/* iterations & trade-offs */}
        <Section id="iterations" label="Iterations & trade-offs">
          <div className="mb-6 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
            Attention analysis
          </div>
          <p className="mb-8 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            A heatmap of the income screen showed attention concentrated
            exactly where it should be — on the question and the input. The
            key fix: the &quot;ZAR 0.00&quot; placeholder read as a
            pre-filled value and caused hesitation, so it became directive
            &quot;ZAR Enter here&quot;.
          </p>
          <div className="mb-16 flex max-w-[680px] flex-col gap-3.5">
            {attentionBars.map((bar) => (
              <div key={bar.l}>
                <div className="mb-1.5 flex justify-between text-[13px] font-semibold">
                  <span>{bar.l}</span>
                  <span>{bar.v}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${bar.v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6 border-t border-ink/12 pt-14 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
            Solution 1 vs Solution 2
          </div>
          <div className="max-w-[820px] overflow-hidden overflow-x-auto rounded-lg border border-ink/14">
            <div className="min-w-[560px]">
              <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-ink text-canvas">
                <div className="px-4 py-3.5 text-[13px] font-bold" />
                <div className="px-4 py-3.5 text-[13px] font-bold">
                  Solution 1
                </div>
                <div className="px-4 py-3.5 text-[13px] font-bold">
                  Solution 2
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={row.l}
                  className={`grid grid-cols-[1.2fr_1fr_1fr] border-t border-ink/10 text-sm leading-[1.4] ${
                    i % 2 === 1 ? "bg-white/60" : ""
                  }`}
                >
                  <div className="px-4 py-3.5 font-semibold">{row.l}</div>
                  <div className="px-4 py-3.5 text-ink/72">{row.s1}</div>
                  <div className="px-4 py-3.5 text-ink/72">{row.s2}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="m-0 mt-7 max-w-[720px] text-base font-normal leading-relaxed text-ink/72">
            Solution 2 is the faster path for confident users; Solution 1 is
            the safer path for anxious ones. The two were built to be tested
            against each other.
          </p>
        </Section>

        {/* final flow */}
        <Section id="flow" label="Final flow" bg="muted">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {flowSteps.map((s) => (
              <div key={s.n} className="rounded bg-white p-5">
                <span className="font-archivo-expanded text-xs font-extrabold text-accent">
                  {s.n}
                </span>
                <div className="mt-2 text-sm font-semibold leading-snug">
                  {s.t}
                </div>
              </div>
            ))}
          </div>
        </Section>

          </div>
        </div>

        <NextCaseStudy href="/work/cash-loan-ux" name="Cash Loan UX" />
        <Footer />
      </div>
  );
}
