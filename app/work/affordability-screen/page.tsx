import type { Metadata } from "next";
import CaseNav from "@/components/CaseNav";
import CaseHero from "@/components/CaseHero";
import Section from "@/components/Section";
import SectionRow from "@/components/SectionRow";
import ScreenshotGrid from "@/components/ScreenshotGrid";
import FullImage from "@/components/FullImage";
import NextCaseStudy from "@/components/NextCaseStudy";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Affordability Screen — Tosin Ariyibi",
};

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
    d: "Styled like a disabled input, no label explaining its significance.",
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

const solution1Principles = [
  {
    n: "01",
    t: "Pre-qualify celebration screen",
    d: "Show the eligible amount (ZAR 198,000) with a count-up, the cash illustration, and three benefit rows before asking for effort. Showing the reward first is a proven conversion pattern.",
  },
  {
    n: "02",
    t: "One question per screen",
    d: "Income and spend split into two full screens, each a single large question and input. One question at a time removes ambiguity and leaves no room for distraction.",
  },
  {
    n: "03",
    t: 'Auto-focused keyboard, "Enter here" hint',
    d: 'Focus fires the system keyboard on screen entry — zero tap-to-focus friction. "ZAR Enter here" reads as guidance, not a pre-filled value. Send arrow stays disabled until a digit is entered.',
  },
  {
    n: "04",
    t: "Consent as a centred modal",
    d: 'After both values are entered, a dialog presents the debt-review consent with a tappable "Not sure what this means?" explainer. Impossible to miss; shown once users are already committed.',
  },
  {
    n: "05",
    t: "Progress bar with a named goal",
    d: '"Calculate My Loan Offer — Step X of 3" gives the bar meaning beyond position. Users understand how far they\'ve come and why they\'re doing it.',
  },
  {
    n: "06",
    t: "Trust banner anchored above the keyboard",
    d: 'A shield + "Your information is private…" banner pinned to the top edge of the keyboard, guaranteed in eyeline while typing — anxiety peaks at the moment of entry, not before.',
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

const solution2Principles = [
  {
    n: "01",
    t: "Both fields on one screen",
    d: 'Income and spend sit together with a single "Continue" — fewer transitions for confident, returning users who already know both numbers.',
  },
  {
    n: "02",
    t: "Example-based placeholders",
    d: '"R e.g 20,000" shows both the currency format and a realistic scale, so users know exactly what — and how much — to type.',
  },
  {
    n: "03",
    t: "One deliberate confirmation",
    d: '"Continue" stays disabled until both fields hold a value, so a single tap confirms the whole screen — no per-field submit ambiguity.',
  },
  {
    n: "04",
    t: "Same consent, same trust cue",
    d: 'The debt-review dialog and "M-KOPA will only use this…" banner are shared with Solution 1 — so the A/B test isolates the layout, not the messaging.',
  },
];

const comparisonRows = [
  { l: "Income & spend", s1: "Two separate screens", s2: "Single screen, both fields" },
  { l: "Keyboard", s1: "Auto-focus per field", s2: "Tapped to focus" },
  { l: "Placeholder", s1: "ZAR Enter here", s2: "ZAR e.g. 20,000" },
  { l: "Primary CTA", s1: "Send arrow per field", s2: "Continue, both required" },
  { l: "Progress", s1: "Step X of 3", s2: "No indicator" },
];

const measures = [
  {
    l: "Primary",
    d: "Completion rate on the financial background screen (income + spend confirmed).",
  },
  {
    l: "Secondary",
    d: "Time-to-complete from screen entry to consent confirmation; per-field abandonment split.",
  },
  {
    l: "Qualitative",
    d: 'Comprehension of "debt review" before and after the plain-language expansion.',
  },
  {
    l: "Consent",
    d: 'Consent-dialog drop-off rate, and whether the inline explainer reduces "Not now" taps.',
  },
];

export default function AffordabilityScreen() {
  return (
      <div className="min-h-screen w-full bg-canvas text-ink">
        <CaseNav />

        <CaseHero
          eyebrow="Product Design Lead · M-KOPA · South Africa"
          title="Rescuing the affordability screen that lost 40% of loan applicants."
          intro="The cash-loan flow was haemorrhaging applicants at a single step — the Financial Background screen. I diagnosed why, formed a hypothesis, and designed two competing redesigns to reduce cognitive load, separate consent from input, and rebuild trust at the exact moment users were asked for sensitive data."
          facts={[
            { label: "Role", value: "Product design, prototyping, interaction spec" },
            { label: "Market", value: "South Africa (ZAR)" },
            { label: "Focus", value: "Drop-off on the Financial Background screen" },
          ]}
        />

        {/* the problem */}
        <SectionRow label="The problem">
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
          <div className="flex flex-col gap-4">
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

        {/* hypothesis */}
        <Section label="The hypothesis" bg="muted">
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

        {/* welcome screen spotlight */}
        <div className="flex flex-col gap-10 border-b border-ink/12 px-4 py-14 sm:px-5 md:flex-row md:gap-16 md:px-14 md:py-20">
          <div className="flex-1 md:max-w-[640px]">
            <div className="mb-5 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
              A new screen · the biggest lever
            </div>
            <h2 className="m-0 mb-6 max-w-[560px] font-archivo-expanded text-2xl font-extrabold leading-[1.15] tracking-[-.01em] sm:text-3xl md:text-[34px]">
              A warm welcome before a single question.
            </h2>
            <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
              Before, tapping the offer banner dropped users straight into
              being asked for their income — no context, no reassurance,
              just a form. For a first-time, lower-literacy borrower, that
              cold open is exactly where hesitation starts.
            </p>
            <p className="mb-7 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
              So I introduced a pre-qualify welcome screen — an on-ramp, not
              a gate. It leads with the reward (&quot;You could be eligible
              for up to R 198,000&quot;), sets expectations with three quick
              benefit rows, and only then invites the user forward. It
              reframes the moment from &quot;fill out a form&quot; to
              &quot;claim something that&apos;s already yours.&quot;
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
            <div className="overflow-hidden rounded-[14px] bg-muted shadow-[0_16px_40px_rgba(12,14,12,.16)]">
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
        <div className="border-b border-ink/12 px-4 py-14 sm:px-5 md:px-14 md:py-20">
          <div className="mb-5 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
            Solution 1
          </div>
          <h2 className="m-0 mb-5 max-w-[820px] font-archivo-expanded text-2xl font-extrabold leading-[1.15] tracking-[-.01em] sm:text-3xl md:text-[34px]">
            Progressive reveal — one question per screen
          </h2>
          <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            Split the step into two dedicated full screens — one for income,
            one for spend. Each shows a single large question, a helper line
            and a ZAR field, with the keyboard auto-focused on entry. A trust
            banner stays anchored above the keyboard, visible exactly when
            anxiety peaks. Consent then appears as its own focused modal
            before loading and offers. The bet: one question at a time keeps
            attention undivided — optimised for first-time, lower-literacy,
            anxious users.
          </p>

          <div className="mb-12">
            <ScreenshotGrid items={solution1Screens} cols={4} frame="phone" />
          </div>

          <div className="mb-6 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
            Six design principles behind Solution 1
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {solution1Principles.map((p) => (
              <div key={p.n} className="rounded-md bg-white p-6">
                <div className="mb-2 font-archivo-expanded text-[13px] font-extrabold text-accent">
                  {p.n}
                </div>
                <div className="mb-2.5 font-archivo-expanded text-[17px] font-bold">
                  {p.t}
                </div>
                <p className="m-0 text-[15px] font-normal leading-[1.6] text-ink/72">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* attention analysis */}
        <Section label="Information hierarchy — attention analysis">
          <p className="mb-8 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            A heatmap of the income screen showed attention concentrated
            exactly where it should be — on the question and the input. The
            key fix: the &quot;ZAR 0.00&quot; placeholder read as a
            pre-filled value and caused hesitation, so it became directive
            &quot;ZAR Enter here&quot;.
          </p>
          <div className="flex max-w-[680px] flex-col gap-3.5">
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
        </Section>

        {/* flow summary */}
        <Section label="The redesigned flow" bg="muted">
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

        {/* solution 2 */}
        <div className="border-b border-ink/12 px-4 py-14 sm:px-5 md:px-14 md:py-20">
          <div className="mb-5 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
            Solution 2
          </div>
          <h2 className="m-0 mb-5 max-w-[820px] font-archivo-expanded text-2xl font-extrabold leading-[1.15] tracking-[-.01em] sm:text-3xl md:text-[34px]">
            Single screen — both fields, inline
          </h2>
          <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            An alternative to the same problem: both income and spend on one
            screen with native inputs and a single &quot;Continue&quot; CTA.
            Example-based placeholders (&quot;ZAR e.g. 20,000&quot;) show
            format and scale; one deliberate action confirms both values.
            The shared consent dialog is identical to Solution 1.
            Lower-friction for confident and returning users — the trade-off
            is more visual complexity upfront.
          </p>

          <div className="mb-12">
            <ScreenshotGrid items={solution2Screens} cols={4} frame="phone" />
          </div>

          <div className="mb-6 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
            Four design principles behind Solution 2
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {solution2Principles.map((p) => (
              <div key={p.n} className="rounded-md bg-white p-6">
                <div className="mb-2 font-archivo-expanded text-[13px] font-extrabold text-accent">
                  {p.n}
                </div>
                <div className="mb-2.5 font-archivo-expanded text-[17px] font-bold">
                  {p.t}
                </div>
                <p className="m-0 text-[15px] font-normal leading-[1.6] text-ink/72">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* comparison */}
        <div className="border-b border-ink/12 px-4 py-14 sm:px-5 md:px-14 md:py-20">
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
        </div>

        {/* what to measure */}
        <Section label="What to measure next">
          <div className="flex max-w-[760px] flex-col gap-4">
            {measures.map((m) => (
              <div key={m.l}>
                <span className="font-archivo-expanded text-[15px] font-bold text-accent">
                  {m.l} —{" "}
                </span>
                <span className="text-base font-normal leading-relaxed text-ink/80">
                  {m.d}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* project status */}
        <Section label="Project status" bg="ink" inverted>
          <p className="m-0 max-w-[760px] text-base font-normal leading-relaxed text-canvas/82 md:text-[17px]">
            Both solutions are built and slated for an A/B test against the
            current production flow. This case study documents the
            diagnosis, hypothesis and design decisions — quantitative
            results will be added once the experiment reads out. Shared to
            show recent work and process.
          </p>
        </Section>

        <NextCaseStudy href="/work/cash-loan-ux" name="Cash Loan UX" />
        <Footer />
      </div>
  );
}
