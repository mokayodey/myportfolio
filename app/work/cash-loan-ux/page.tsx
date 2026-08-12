import type { Metadata } from "next";
import CaseNav from "@/components/CaseNav";
import CaseHero from "@/components/CaseHero";
import Section from "@/components/Section";
import SectionRow from "@/components/SectionRow";
import NextCaseStudy from "@/components/NextCaseStudy";
import Footer from "@/components/Footer";
import PrototypeFrame from "@/components/PrototypeFrame";
import CashLoanPrototypeEffect from "@/components/CashLoanPrototypeEffect";
import CaseTOC from "@/components/CaseTOC";

export const metadata: Metadata = {
  title: "Cash Loan UX — Tosin Ariyibi",
};

const PROTO = "/prototypes/cash-loan/KE/flow.html";
const PROTO_SHIPPED = "/prototypes/cash-loan-experiment/KE/flow.html";

const tocSections = [
  { id: "top", label: "About" },
  { id: "result", label: "Goals & impact" },
  { id: "problem", label: "The challenge" },
  { id: "research", label: "Research" },
  { id: "hypothesis", label: "Hypothesis" },
  { id: "design-principles", label: "Design principles" },
  { id: "solutions", label: "Solutions" },
  { id: "iterations", label: "Iterations & trade-offs" },
  { id: "takeaway", label: "Key takeaway" },
];

const FOUR_FLOWS = [
  {
    title: "Filter by amount",
    desc: "Amount chips up front; tapping one reveals repayment options. All eligible amounts visible before any interaction.",
    flow: "B",
    screen: "selectB",
  },
  {
    title: "Amount only (single knob)",
    desc: "One plus/minus control adjusts the amount live; term and daily payment update as you go.",
    flow: "S",
    screen: "selectS",
  },
  {
    title: "Amount + daily (two-knob)",
    desc: "Two independent live controls — amount and daily payment — adjustable at once.",
    flow: "E",
    screen: "selectE",
  },
  {
    title: "Dropdown",
    desc: "A single preset amount shown by default, with the full list of eligible amounts collapsed behind a dropdown.",
    flow: "DD",
    screen: "selectDD",
  },
];

const AFFORDABILITY_FLOWS = [
  {
    title: "Single screen — live filter",
    desc: "Set what you can pay per day and the eligible loans filter live beneath it — no separate amount step.",
    flow: "F",
    screen: "budgetF",
  },
  {
    title: "Guided — step by step",
    desc: "Budget first, then amount, then confirm — scaffolding for first-time and less confident borrowers.",
    flow: "G",
    screen: "budgetG",
  },
];

const RESEARCH_STATS = [
  {
    v: "9",
    l: "Kenya participants — drivers, traders, business owners, repeat & first-time borrowers",
  },
  {
    v: "7",
    l: "Nigeria participants — hairdressers, tradespeople, salary-deduction & heavy fintech borrowers",
  },
  { v: "5", l: "Prototypes tested — baseline plus the four variants above" },
];

const KEY_FINDINGS = [
  {
    title: "1. Visibility beat interaction",
    body: "Every variant that hid the eligible amounts behind a stepper, a live knob, or a collapsed dropdown caused the same failure: users assumed the first number shown was the only amount they qualified for.",
    quote: "“I only thought I qualified for KES 15,000 and not more.”",
  },
  {
    title: "2. Nigeria confused the loan amount with the repayment term",
    body: "Across every Nigerian prototype, participants mistook the repayment term in days for the loan amount in Naira — because the two numbers share a similar numeric range. One participant picked “180 days” and called it “NGN 180,000.”",
  },
  {
    title: "3. “Everything displayed” reads as accessible, unprompted",
    body: "In both markets, participants volunteered — without being asked — that fully-visible layouts would be easier for less tech-savvy or less literate users. They picked different variants for the reason, which elevated it from a preference to a design principle.",
  },
];

const RECOMMENDATIONS = [
  {
    p: "P0",
    text: "In Nigeria, visually separate loan amount from repayment term — larger type on the amount, an explicit currency prefix, and distance between the two controls.",
  },
  {
    p: "P0",
    text: "Always show the full eligible amount range before requiring interaction — never hide it behind a stepper or a closed dropdown.",
  },
  {
    p: "P1",
    text: "Make it unmistakable when an amount can be changed — some users never noticed the plus/minus controls existed.",
  },
  {
    p: "P1",
    text: "Show one daily-repayment figure at a time — two-knob's competing numbers were the single biggest source of confusion in testing.",
  },
];

const cashLoanPrinciples = [
  {
    n: "01",
    t: "Meet customers where they are",
    q: "I prefer 94 shillings per day",
    d: 'Customers in both markets reasoned from the daily payment, not the loan size, so the affordability-first flow opens with "what can you comfortably pay?" instead of "how much do you want to borrow?" — meeting the mental model people already had, rather than the one the production flow assumed.',
  },
  {
    n: "02",
    t: "Make the complex feel simple",
    q: "Two live numbers on one screen didn't give users more control — it gave them a contradiction they couldn't resolve.",
    d: "The two-knob variant let customers adjust amount and daily payment independently, and it scored worst in both markets. The fix wasn't more control, it was less: show one number at a time.",
  },
  {
    n: "03",
    t: "Earn trust",
    q: "Volunteered unprompted, in both markets",
    d: "Participants in both Kenya and Nigeria said — without being asked — that seeing every eligible amount up front, rather than behind a stepper or a closed dropdown, would be easier for less tech-savvy or less literate users. Full visibility read as trustworthy, not just convenient.",
  },
  {
    n: "04",
    t: "Build for real-world constraints",
    q: "The strongest option differed by market",
    d: "Kenya and Nigeria didn't converge on one winner, and Nigerian participants specifically confused the repayment term in days with the loan amount in Naira. Rather than force a single global flow, the two markets shipped different variants — Filter by Amount for Kenya, Amount Only for Nigeria — with the Nigerian build visually separating amount from term.",
  },
];

export default function CashLoanUX() {
  return (
      <div className="min-h-screen w-full bg-canvas text-ink">
        <CashLoanPrototypeEffect />
        <CaseNav />

        <CaseHero
          id="top"
          eyebrow="Product Design Lead · M-KOPA · Kenya & Nigeria"
          title="Cash loan UX — finding the offer flow that actually reads across two markets."
          intro="Designed and tested four competing ways to let customers pick a cash loan amount and repayment plan for a leading asset-financing fintech operating in Kenya and Nigeria — then ran moderated research across both markets to find out which one actually worked."
          facts={[
            {
              label: "Role",
              value: "Product Design Lead — flow design, prototyping, research plan",
            },
            { label: "Markets", value: "Kenya & Nigeria" },
            {
              label: "Method",
              value: "Moderated in-person usability interviews, sequential monadic",
            },
          ]}
        />

        <div className="flex pt-10 lg:gap-10 lg:pl-14">
          <CaseTOC sections={tocSections} />
          <div className="min-w-0 flex-1">

        {/* goals & impact */}
        <Section id="result" label="Goals & impact" bg="ink" inverted>
          <div className="mb-1.5 text-[11px] font-semibold uppercase leading-none tracking-[.1em] text-gold">
            The goal
          </div>
          <p className="mb-7 max-w-[760px] text-base font-normal leading-relaxed text-canvas/82 md:text-[17px]">
            The underlying goal was to improve conversion on the cash-loan
            flow, and a big lever for that was giving customers more
            personalized offers. Previously, the loan engine gave each
            customer a single eligible amount with one fixed repayment date.
            It could now offer several eligible amounts — and for any given
            amount, several repayment plans, each trading term length
            against daily payment. That flexibility was the whole point, but
            it only helps conversion if customers can actually make sense of
            it. The goal was to find a way to present a genuinely larger set
            of offers — more amounts, more repayment plans per amount —
            without customers getting lost or picking the wrong one.
          </p>
          <div className="mb-1.5 text-[11px] font-semibold uppercase leading-none tracking-[.1em] text-gold">
            What we achieved
          </div>
          <p className="mb-8 max-w-[760px] text-base font-normal leading-relaxed text-canvas/82 md:text-[17px]">
            Testing surfaced a clear winner in each market and ruled one
            variant out entirely. Filter by Amount and Amount Only were
            refined into production builds and are now live as an A/B test
            against the current flow, gathering real behavioural data on
            whether the added personalization actually moves conversion.
          </p>
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-md border border-canvas/20 p-5">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[.1em] text-gold">
                Kenya winner — Filter by amount
              </div>
              <div className="font-archivo-expanded text-2xl font-extrabold text-canvas md:text-[28px]">
                SEQ 6.25 · SUS 81
              </div>
            </div>
            <div className="rounded-md border border-canvas/20 p-5">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[.1em] text-gold">
                Nigeria winner — Amount only
              </div>
              <div className="font-archivo-expanded text-2xl font-extrabold text-canvas md:text-[28px]">
                SEQ 5.25 · 65% task outcome
              </div>
            </div>
          </div>
          <div className="max-w-[760px] border-l-[3px] border-gold py-1 pl-6">
            <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[.12em] text-gold">
              Ruled out
            </div>
            <p className="m-0 font-archivo-expanded text-lg font-medium italic leading-[1.5] text-canvas/90">
              Amount + daily (two-knob) scored worst in both markets — SEQ
              4.44 in Kenya, and a 0% task outcome rate in Nigeria. Two live
              numbers on one screen didn&apos;t give users more control; it
              gave them a contradiction they couldn&apos;t resolve.
            </p>
          </div>
        </Section>

        {/* the challenge */}
        <SectionRow id="problem" label="The challenge">
          <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            M-KOPA had just expanded what the loan engine could offer.
            Instead of a single eligible amount with one fixed repayment
            date, customers could now choose from several eligible amounts —
            and for any given amount, several repayment plans, each trading
            term length against daily payment. It was a real increase in
            personalization, but it created a new problem: how do you
            present a genuinely larger set of offers without burying the
            choice that actually matters to the customer?
          </p>
          <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            The production flow was still built for the old, simpler
            shape — pick an amount, then tap through to see what
            you&apos;d pay back — a mental model that no longer matched what
            the product could now offer. We also suspected it was backwards
            to begin with: most customers already know what they can afford{" "}
            <em>per day</em>, not how much they want to borrow in the
            abstract.
          </p>
          <p className="text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            I designed four competing interaction models for choosing an
            amount and repayment plan, plus an affordability-first flow that
            flips the opening question from &quot;how much do you want?&quot;
            to &quot;what can you pay per day?&quot; — then ran research in
            both Kenya and Nigeria to see which actually held up with real
            borrowers.
          </p>
        </SectionRow>

        {/* research */}
        <Section id="research" label="Research">
          <p className="mb-8 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            Moderated in-person usability interviews combined a
            borrowing-history intake with a prototype comparison — sequential
            monadic, with each participant shown a rotating subset of three
            variants to keep sessions short while preserving comparability
            across the full set.
          </p>
          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {RESEARCH_STATS.map((s) => (
              <div key={s.l} className="rounded-md bg-white p-[22px]">
                <div className="mb-2 font-archivo-expanded text-2xl font-extrabold text-accent md:text-[30px]">
                  {s.v}
                </div>
                <div className="text-[13px] font-medium leading-[1.5] text-ink/65">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          <div className="mb-6 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
            What we heard
          </div>
          <div className="flex flex-col gap-7">
            {KEY_FINDINGS.map((k) => (
              <div key={k.title}>
                <div className="mb-2 font-archivo-expanded text-[17px] font-bold text-accent">
                  {k.title}
                </div>
                <p
                  className={`text-base font-normal leading-[1.6] text-ink/78 ${
                    k.quote ? "mb-2.5" : "m-0"
                  }`}
                >
                  {k.body}
                </p>
                {k.quote && (
                  <p className="m-0 rounded bg-white px-[18px] py-3.5 text-[15px] font-normal italic leading-[1.55] text-ink/70">
                    {k.quote}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-ink/12 pt-12">
            <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
              To keep the test a fair comparison, only the amount-selection
              step differed between variants — everything after it was
              identical. Once a customer had chosen their loan, all five
              flows funnelled into the same review-and-confirm screen and the
              same disbursement success screen. Holding these steps constant
              meant any difference in how well people understood their loan
              could be traced back to the one thing under test: how they
              picked the amount.
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-7">
              <div className="flex-none">
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[.1em] text-ink/50">
                  5 ways to pick an amount · the variable
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    "Today (baseline)",
                    "Filter by amount",
                    "Amount only",
                    "Amount + daily",
                    "Dropdown",
                  ].map((p) => (
                    <div
                      key={p}
                      className="rounded-full bg-muted px-4 py-[9px] text-[13px] font-semibold text-ink/85"
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-none items-center font-archivo-expanded text-[26px] font-bold text-accent">
                →
              </div>
              <div className="min-w-[220px] flex-1 rounded-[10px] bg-ink px-7 py-6 text-canvas">
                <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[.1em] text-gold">
                  Identical from here on · held constant
                </div>
                <div className="flex flex-wrap items-center gap-3.5 font-archivo-expanded text-xl font-bold">
                  <span>Review & confirm</span>
                  <span className="text-gold">→</span>
                  <span>Success</span>
                </div>
                <p className="mt-3.5 text-sm font-normal leading-[1.55] text-canvas/72">
                  Every variant ended on these same two screens, so
                  comprehension differences could only come from the
                  selection step above.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col rounded-lg bg-white p-6">
                <div className="mb-2 flex items-baseline gap-2.5">
                  <span className="font-archivo-expanded text-[13px] font-extrabold text-accent">
                    01
                  </span>
                  <span className="font-archivo-expanded text-base font-bold text-ink">
                    Review & confirm
                  </span>
                </div>
                <p className="mb-4.5 text-sm font-normal leading-relaxed text-ink/72">
                  Amount, daily payment, term and total laid out for the
                  customer to check before agreeing.
                </p>
                <PrototypeFrame
                  src={`${PROTO}?flow=B&screen=review`}
                  screen="review"
                  title="Review & confirm"
                />
              </div>
              <div className="flex flex-col rounded-lg bg-white p-6">
                <div className="mb-2 flex items-baseline gap-2.5">
                  <span className="font-archivo-expanded text-[13px] font-extrabold text-accent">
                    02
                  </span>
                  <span className="font-archivo-expanded text-base font-bold text-ink">
                    Success
                  </span>
                </div>
                <p className="mb-4.5 text-sm font-normal leading-relaxed text-ink/72">
                  Disbursement confirmed — the same closing screen no matter
                  which selection model got the customer here.
                </p>
                <PrototypeFrame
                  src={`${PROTO}?flow=B&screen=success`}
                  screen="success"
                  title="Success"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* hypothesis */}
        <Section id="hypothesis" label="The hypothesis" bg="muted">
          <p className="max-w-[820px] font-archivo-expanded text-lg font-medium leading-snug text-ink md:text-2xl md:leading-[1.4]">
            If customers choose based on what they can comfortably pay per
            day — instead of how much they want to borrow — they&apos;ll
            pick an amount faster and with more confidence, in Kenya and in
            Nigeria alike.
          </p>
        </Section>

        {/* design principles */}
        <Section id="design-principles" label="Design principles">
          <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            M-KOPA designs against five company-wide UX principles — the same
            framework behind the Affordability Screen redesign. Four of them
            showed up directly in what this research surfaced.
          </p>
          <div className="flex flex-col">
            {cashLoanPrinciples.map((p, i, arr) => (
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
          {/* four flows */}
          <div className="mb-16">
            <div className="mb-5 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
              Four flows, one question
            </div>
            <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
              Rather than guess, I built four working prototypes of the same
              decision — choosing a loan amount and repayment plan — each
              testing a different interaction model, plus the existing
              production flow as a baseline.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {FOUR_FLOWS.map((f) => (
                <div
                  key={f.title}
                  className="flex flex-col rounded-lg bg-white p-6"
                >
                  <div className="mb-2 font-archivo-expanded text-base font-bold text-accent">
                    {f.title}
                  </div>
                  <p className="mb-4.5 text-sm font-normal leading-relaxed text-ink/72">
                    {f.desc}
                  </p>
                  <PrototypeFrame
                    src={`${PROTO}?flow=${f.flow}&screen=${f.screen}`}
                    screen={f.screen}
                    title={f.title}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* affordability-first idea */}
          <div className="mb-16 border-t border-ink/12 pt-14">
            <div className="mb-5 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
              The affordability-first idea
            </div>
            <div className="mb-12 flex flex-col gap-10 md:flex-row md:gap-16">
              <div className="max-w-[720px] flex-1">
                <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
                  Every amount-first variant asked the same opening
                  question — <em>how much do you want to borrow?</em> — and
                  left customers to work out whether the repayment was
                  affordable. But across both markets, the number people
                  actually reasoned from wasn&apos;t the loan size. It was
                  the daily payment:{" "}
                  <em>
                    &quot;I prefer 94 shillings per day,&quot; &quot;I will
                    check if I can pay fast to see the amount I have to pay
                    daily.&quot;
                  </em>
                </p>
                <p className="text-base font-normal leading-relaxed text-ink/82 md:text-lg">
                  So I prototyped a fifth direction that flips the question:
                  start with{" "}
                  <em>&quot;what can you comfortably pay?&quot;</em>, then
                  surface only the loans that fit that budget. I built it two
                  ways — a single live screen that filters offers as you set
                  a daily figure, and a guided step-by-step version that
                  walks first-time borrowers through budget, then amount,
                  then confirmation.
                </p>
              </div>
              <div className="flex flex-none flex-col gap-5 md:w-[280px]">
                <div className="border-t border-ink/20 pt-4">
                  <div className="mb-1.5 font-archivo-expanded text-2xl font-extrabold text-accent md:text-[30px]">
                    Daily payment
                  </div>
                  <div className="text-sm font-medium leading-relaxed text-ink/70">
                    the figure customers named again and again as the one
                    they decide on
                  </div>
                </div>
                <div className="border-t border-ink/20 pt-4">
                  <div className="mb-1.5 font-archivo-expanded text-2xl font-extrabold text-accent md:text-[30px]">
                    Two builds
                  </div>
                  <div className="text-sm font-medium leading-relaxed text-ink/70">
                    a fast single-screen filter and a guided flow for less
                    confident borrowers
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {AFFORDABILITY_FLOWS.map((f) => (
                <div
                  key={f.title}
                  className="flex flex-col rounded-lg bg-white p-6"
                >
                  <div className="mb-2 font-archivo-expanded text-base font-bold text-accent">
                    {f.title}
                  </div>
                  <p className="mb-4.5 text-sm font-normal leading-relaxed text-ink/72">
                    {f.desc}
                  </p>
                  <PrototypeFrame
                    src={`${PROTO}?flow=${f.flow}&screen=${f.screen}`}
                    screen={f.screen}
                    title={f.title}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* test it yourself */}
          <div className="border-t border-ink/12 pt-14">
            <div className="mb-5 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
              Test the flows yourself
            </div>
            <p className="mb-7 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
              Pick one of the five flows, choose a market (Kenya or Nigeria),
              then tap the <b className="font-bold">M-KOPA</b> app icon on
              the phone&apos;s home screen to launch it — just as
              participants did in testing. The{" "}
              <b className="font-bold">All flows</b> icon returns you here to
              try another.
            </p>
            <iframe
              src="/prototypes/cash-loan/index.html"
              title="Cash loan prototype — try all flows"
              loading="lazy"
              className="mb-4 h-[640px] w-full max-w-[460px] rounded-md border-0 bg-muted md:h-[900px]"
            />
          </div>
        </Section>

        {/* iterations & trade-offs */}
        <Section id="iterations" label="Iterations & trade-offs">
          <div className="mb-6 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
            Recommendations
          </div>
          <div className="flex max-w-[760px] flex-col gap-5">
            {RECOMMENDATIONS.map((r, i) => (
              <div key={i}>
                <span className="font-archivo-expanded text-[15px] font-bold text-accent">
                  {r.p} —{" "}
                </span>
                <span className="text-base font-normal leading-relaxed text-ink/80">
                  {r.text}
                </span>
              </div>
            ))}
          </div>
          <div className="mb-16 mt-8 max-w-[760px] rounded-md bg-ink p-6 text-canvas">
            <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[.1em] text-gold">
              Decision
            </div>
            <p className="m-0 font-archivo-expanded text-[17px] font-medium leading-[1.5]">
              Advance Filter by Amount for Kenya and Amount Only for Nigeria
              into design refinement. Drop the two-knob variant entirely.
            </p>
          </div>

          <div className="mb-6 border-t border-ink/12 pt-14 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
            How this was built
          </div>
          <div className="mb-16 flex flex-col gap-10 md:flex-row md:gap-16">
            <div className="max-w-[720px] flex-1">
              <div className="mb-2.5 font-archivo-expanded text-lg font-bold">
                Five production-grade prototypes, built and shipped in the
                time a single Figma flow usually takes.
              </div>
              <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
                I designed and built these flows in partnership with Claude.
                Rather than clicking through static Figma frames, I described
                each interaction model and iterated on real, working code —
                live steppers, chips that filter offers in real time, two
                knobs recalculating against each other, a dropdown that
                actually opens. The kind of behaviour that only reveals its
                problems when a user can genuinely touch it.
              </p>
              <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
                That fidelity mattered. The core finding — that Nigerian
                users mistook the repayment term for the loan amount — only
                surfaced because the prototype responded like the real
                thing. A tap-through Figma mockup would have hidden it. We
                then deployed each build to{" "}
                <b className="font-bold">Netlify</b> as an installable web
                app, so moderators ran the sessions on participants&apos; own
                phones, full-screen, indistinguishable from production.
              </p>
              <p className="text-base font-normal leading-relaxed text-ink/82 md:text-lg">
                Working this way let me spend my judgement where it counts —
                on the interaction models, the research design, and reading
                the findings — instead of on redrawing frames. It&apos;s how
                one designer took five competing directions from idea to
                field-ready in five days.
              </p>
            </div>
            <div className="flex flex-none flex-col gap-7 md:w-[260px]">
              <div className="border-t border-ink/20 pt-4">
                <div className="mb-1.5 font-archivo-expanded text-2xl font-extrabold text-accent md:text-[40px]">
                  5
                </div>
                <div className="text-sm font-medium leading-relaxed text-ink/70">
                  interactive flows built, not mocked — each fully operable
                </div>
              </div>
              <div className="border-t border-ink/20 pt-4">
                <div className="mb-1.5 font-archivo-expanded text-2xl font-extrabold text-accent md:text-[40px]">
                  2
                </div>
                <div className="text-sm font-medium leading-relaxed text-ink/70">
                  markets, localised to KES & NGN, deployed live on Netlify
                </div>
              </div>
              <div className="border-t border-ink/20 pt-4">
                <div className="mb-1.5 font-archivo-expanded text-2xl font-extrabold text-accent md:text-[40px]">
                  5 days
                </div>
                <div className="text-sm font-medium leading-relaxed text-ink/70">
                  idea to field-ready — a fraction of a traditional
                  prototyping cycle
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-ink/12 pt-14">
            <div className="mb-6 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
              What shipped
            </div>
            <div className="mb-11 flex flex-col gap-10 md:flex-row md:gap-16">
              <div className="max-w-[720px] flex-1">
                <div className="mb-2.5 font-archivo-expanded text-lg font-bold">
                  Two winners shipped — and they&apos;ll settle it in
                  production.
                </div>
                <p className="mb-5 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
                  The research pointed to two directions worth backing:{" "}
                  <b className="font-bold">Amount only (single knob)</b> and{" "}
                  <b className="font-bold">Dropdown</b>. Both were refined
                  into production builds and are now being rolled out as an
                  A/B test against the current live experience —{" "}
                  <b className="font-bold">Flow 1 (Today)</b> — so the final
                  call is made on real behaviour at scale, not just
                  moderated sessions.
                </p>
                <p className="text-base font-normal leading-relaxed text-ink/82 md:text-lg">
                  The two shipped screens are embedded below, exactly as
                  they went out.
                </p>
              </div>
              <div className="flex flex-none flex-col gap-6 md:w-[280px]">
                <div className="border-t border-ink/20 pt-4">
                  <div className="mb-1.5 font-archivo-expanded text-2xl font-extrabold text-accent md:text-[30px]">
                    A / B
                  </div>
                  <div className="text-sm font-medium leading-relaxed text-ink/70">
                    both winners tested live against the current baseline
                    (Flow 1)
                  </div>
                </div>
                <div className="border-t border-ink/20 pt-4">
                  <div className="mb-1.5 font-archivo-expanded text-2xl font-extrabold text-accent md:text-[30px]">
                    In market
                  </div>
                  <div className="text-sm font-medium leading-relaxed text-ink/70">
                    rolled out and gathering data now
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col rounded-lg bg-white p-6">
                <div className="mb-2 font-archivo-expanded text-base font-bold text-accent">
                  Amount only — shipped
                </div>
                <p className="mb-4.5 text-sm font-normal leading-relaxed text-ink/72">
                  The single-knob build that went to production.
                </p>
                <PrototypeFrame
                  src={`${PROTO_SHIPPED}?flow=S&screen=selectS`}
                  screen="selectS"
                  title="Amount only — shipped"
                  desktopHeight={560}
                />
              </div>
              <div className="flex flex-col rounded-lg bg-white p-6">
                <div className="mb-2 font-archivo-expanded text-base font-bold text-accent">
                  Dropdown — shipped
                </div>
                <p className="mb-4.5 text-sm font-normal leading-relaxed text-ink/72">
                  The dropdown build that went to production.
                </p>
                <PrototypeFrame
                  src={`${PROTO_SHIPPED}?flow=DD&screen=selectDD`}
                  screen="selectDD"
                  title="Dropdown — shipped"
                  desktopHeight={560}
                />
              </div>
            </div>
            <div className="max-w-[760px] border-l-[3px] border-accent py-1 pl-6">
              <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[.12em] text-accent">
                Disclaimer
              </div>
              <p className="m-0 text-base font-normal leading-relaxed text-ink/80">
                The A/B test is live and results are still coming in — this
                section documents recent work and process rather than a
                final outcome. I&apos;ll update it with the winning variant
                and its metrics once the experiment concludes.
              </p>
            </div>
          </div>
        </Section>

        {/* key takeaway */}
        <Section id="takeaway" label="Key takeaway" bg="ink" inverted>
          <p className="max-w-[820px] font-archivo-expanded text-lg font-medium leading-snug text-canvas md:text-2xl md:leading-[1.4]">
            No single flow won everywhere, and that was the finding: showing
            the full eligible range up front and asking what customers could
            pay each day beat every design that made them work for the
            number. Letting Kenya and Nigeria diverge instead of forcing one
            universal winner is what took five competing directions from
            idea to two shipped, in-market experiments in five days.
          </p>
        </Section>

          </div>
        </div>

        <NextCaseStudy href="/work/mkobo-bank" name="Mkobo Bank" />
        <Footer />
      </div>
  );
}
