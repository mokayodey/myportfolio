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
import FullImage from "@/components/FullImage";

export const metadata: Metadata = {
  title: "Cash Loan UX — Tosin Ariyibi",
};

const PROTO = "/prototypes/cash-loan/KE/flow.html";
const PROTO_V2 = "/prototypes/cash-loan-v2/KE/flow.html";
const PROTO_V2_LAUNCHER = "/prototypes/cash-loan-v2/index.html";

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

const SECOND_ROUND_STATS = [
  {
    v: "13",
    l: "Kenya participants — mix of previous M-KOPA borrowers and M-Shwari users",
  },
  {
    v: "8",
    l: "Nigeria participants — mix of non-borrowers and customers who've borrowed from other providers, including M-KOPA",
  },
  { v: "5", l: "Prototypes tested — baseline plus Filter by Amount, Amount Only, Dropdown and a new Slider variant" },
];

const SECOND_ROUND_FLOWS = [
  {
    title: "Filter by amount",
    desc: "Amount chips up front; tapping one reveals repayment options.",
    flow: "B",
    screen: "selectB",
  },
  {
    title: "Amount only (single knob)",
    desc: "One plus/minus control adjusts the amount live.",
    flow: "S",
    screen: "selectS",
  },
  {
    title: "Dropdown",
    desc: "Pick a preset amount from a list, then choose a repayment plan.",
    flow: "DD",
    screen: "selectDD",
  },
  {
    title: "Slider — new this round",
    desc: "Drag a single control to set the amount; daily payment and term update live.",
    flow: "SL",
    screen: "selectSL",
  },
];

const SECOND_ROUND_FINDINGS = [
  {
    title: "1. Visibility still wins",
    body: "Customers preferred Filter by Amount and Slider because the loan limits and repayment options were visible before they had to do anything else.",
    quote: "“Filter by amount — first of all I know what I will get when I look at the screen, I will just click on the amount that I want and proceed.” — KE customer",
  },
  {
    title: "2. Blank-start controls caused real confusion",
    body: "Amount Only and Dropdown both opened on an empty state — no amount shown until the customer tapped a plus button or a dropdown icon — and several customers didn't know what to do next.",
    quote: "“I do not know how to increase the amount I want from here, could you explain to me? What if I want KES 17,000, can I edit the text box?” — KE customer",
  },
];

const SCORECARD = [
  { variant: "Filter by amount", keSeq: "6.63", keSus: "96.5", ngSeq: "5.65", ngSus: "81.7", n: "4 / 5" },
  { variant: "Amount only (single knob)", keSeq: "4.31", keSus: "43.1", ngSeq: "—", ngSus: "—", n: "4 / —" },
  { variant: "Dropdown", keSeq: "7.0", keSus: "73.1", ngSeq: "5.5", ngSus: "76.9", n: "3 / 6" },
  { variant: "Slider", keSeq: "6.40", keSus: "76.9", ngSeq: "5.35", ngSus: "80.0", n: "3 / 5" },
];

const HYPOTHESES = [
  {
    n: "H1",
    t: "Visibility beats interaction",
    verdict: "Supported",
    d: "Users consistently said the main reason they preferred Filter by Amount or Slider was that they could see all available amounts in one view before doing anything.",
  },
  {
    n: "H2",
    t: "Control matters for the amount-sensitive",
    verdict: "Partially supported",
    d: "Some customers who chose the slider caveated that they'd have preferred an amount somewhere in between the preset options — control still matters to a smaller group, just not as the primary driver.",
  },
  {
    n: "H3",
    t: "Low literacy raises the value of no-scroll, no-tap layouts",
    verdict: "Supported",
    d: 'A customer working through the Amount Only prototype described it as "really hard to understand, especially for illiterate people," after struggling to find the amount range at all.',
  },
  {
    n: "H4",
    t: "Trust is set before the UI",
    verdict: "Supported",
    d: "Every take/no-take decision customers made was justified by amount, interest rate, repayment fit, or need — never by the interface itself. The UI affects how easy it is to choose an offer; it doesn't decide whether someone borrows.",
  },
];

const RECOMMENDATIONS = [
  {
    p: "P0",
    text: "Advance Filter by Amount and Slider as the two strongest performers — both read clearly in Kenya and Nigeria across two rounds of testing.",
  },
  {
    p: "P0",
    text: "Reconsider Amount Only in its current form — a blank starting state with only a plus/minus control scored critically (KE SEQ 4.31, SUS 43.1) in follow-up testing; customers often couldn't find the amount at all.",
  },
  {
    p: "P1",
    text: "In Nigeria, visually separate loan amount from repayment term — larger type on the amount, an explicit currency prefix, and distance between the two controls.",
  },
  {
    p: "P1",
    text: "Make it unmistakable when an amount can be changed on any control-based variant — some users never located the plus/minus or dropdown affordance.",
  },
];

const cashLoanPrinciples = [
  {
    n: "01",
    t: "Meet customers where they are",
    q: "I prefer 94 shillings per day",
    d: "Customers in both markets reasoned from the daily payment, not the loan size — the shipped repayment cards lead with that figure (“KES 30 daily”) rather than the term, meeting the mental model people already had instead of the one the production flow assumed.",
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
    q: "It took two rounds, and a bigger, more varied sample, to trust the answer",
    d: "A first round pointed to a different winner in each market — a plausible read on a small sample. A second, larger round across both markets (13 Kenyan and 8 Nigerian participants) is what actually decided the shipping call: Filter by Amount and Slider read clearly everywhere, and it caught a real usability problem in Amount Only that the first round had missed. Nigerian participants also specifically confused the repayment term in days with the loan amount in Naira, which still needs its own fix regardless of which variant ships.",
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
            A first round of testing pointed to a different winner in each
            market — worth a second look at scale before committing either
            way. A second, larger round tested further and is what actually
            decided what shipped: two flows, Filter by Amount and Slider,
            read clearly in both markets, while Amount Only turned out to
            have a real usability problem. Those two went through a final
            design pass in Figma before shipping into a live A/B test
            against the current flow.
          </p>
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-md border border-canvas/20 p-5">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[.1em] text-gold">
                Filter by amount
              </div>
              <div className="font-archivo-expanded text-2xl font-extrabold text-canvas md:text-[28px]">
                KE SEQ 6.63 · NG SEQ 5.65
              </div>
            </div>
            <div className="rounded-md border border-canvas/20 p-5">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[.1em] text-gold">
                Slider
              </div>
              <div className="font-archivo-expanded text-2xl font-extrabold text-canvas md:text-[28px]">
                KE SEQ 6.40 · NG SEQ 5.35
              </div>
            </div>
          </div>
          <div className="max-w-[760px] border-l-[3px] border-gold py-1 pl-6">
            <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[.12em] text-gold">
              Ruled out
            </div>
            <p className="m-0 font-archivo-expanded text-lg font-medium italic leading-[1.5] text-canvas/90">
              Amount Only (single knob) scored critically in the second
              round: SEQ 4.31, SUS 43.1 in Kenya. Its blank starting state,
              with only a plus/minus control, meant customers often
              couldn&apos;t find the amount at all — which is why it didn&apos;t
              advance despite being part of the original shortlist.
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
            amount and repayment plan — then ran research in both Kenya and
            Nigeria to see which actually held up with real borrowers.
          </p>
        </SectionRow>

        {/* research */}
        <Section id="research" label="Research">
          <p className="mb-8 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            The first step wasn&apos;t testing — it was looking. I ran a
            competitive analysis across direct and indirect competitors to
            see how they actually presented loan offers: what they showed
            up front, what they hid behind interaction, how they handled
            repayment choice. That scan is what shaped the four interaction
            models built for this study.
          </p>
          <p className="mb-8 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            Moderated in-person usability interviews then combined a
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
            What we tested
          </div>
          <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            Four working prototypes of the same decision — choosing a loan
            amount and repayment plan — each testing a different
            interaction model drawn from the competitive scan, plus the
            existing production flow as a baseline.
          </p>
          <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
            <div className="mb-6 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
              A second, larger round
            </div>
            <p className="mb-8 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
              The first round is what triggered this one. A different winner
              in each market, on a sample of 9 and 7, wasn&apos;t a confident
              enough foundation for a production decision — it needed a
              bigger, more varied sample before anything shipped. It also
              gave a clear signal on what to drop: two-knob&apos;s competing
              numbers were the single biggest source of confusion, so this
              round replaced it with a new alternative, Slider, instead.
            </p>
            <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {SECOND_ROUND_STATS.map((s) => (
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
              What we tested, again
            </div>
            <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
              Same underlying prototype, refined: two-knob dropped, Slider
              added, both markets running through the same live builds.
            </p>
            <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {SECOND_ROUND_FLOWS.map((f) => (
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
                    src={`${PROTO_V2}?flow=${f.flow}&screen=${f.screen}`}
                    screen={f.screen}
                    title={f.title}
                  />
                </div>
              ))}
            </div>
            <div className="mb-6 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
              What we heard, again
            </div>
            <div className="mb-10 flex flex-col gap-7">
              {SECOND_ROUND_FINDINGS.map((k) => (
                <div key={k.title}>
                  <div className="mb-2 font-archivo-expanded text-[17px] font-bold text-accent">
                    {k.title}
                  </div>
                  <p className="mb-2.5 text-base font-normal leading-[1.6] text-ink/78">
                    {k.body}
                  </p>
                  <p className="m-0 rounded bg-white px-[18px] py-3.5 text-[15px] font-normal italic leading-[1.55] text-ink/70">
                    {k.quote}
                  </p>
                </div>
              ))}
            </div>
            <div className="mb-6 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
              Scorecard at a glance
            </div>
            <div className="max-w-[820px] overflow-hidden overflow-x-auto rounded-lg border border-ink/14">
              <div className="min-w-[620px]">
                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr_.8fr] bg-ink text-canvas">
                  <div className="px-4 py-3.5 text-[13px] font-bold">Variant</div>
                  <div className="px-4 py-3.5 text-[13px] font-bold">KE SEQ</div>
                  <div className="px-4 py-3.5 text-[13px] font-bold">KE SUS</div>
                  <div className="px-4 py-3.5 text-[13px] font-bold">NG SEQ</div>
                  <div className="px-4 py-3.5 text-[13px] font-bold">NG SUS</div>
                  <div className="px-4 py-3.5 text-[13px] font-bold">n (KE/NG)</div>
                </div>
                {SCORECARD.map((row, i) => (
                  <div
                    key={row.variant}
                    className={`grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr_.8fr] border-t border-ink/10 text-sm leading-[1.4] ${
                      i % 2 === 1 ? "bg-white/60" : ""
                    }`}
                  >
                    <div className="px-4 py-3.5 font-semibold">{row.variant}</div>
                    <div className="px-4 py-3.5 text-ink/72">{row.keSeq}</div>
                    <div className="px-4 py-3.5 text-ink/72">{row.keSus}</div>
                    <div className="px-4 py-3.5 text-ink/72">{row.ngSeq}</div>
                    <div className="px-4 py-3.5 text-ink/72">{row.ngSus}</div>
                    <div className="px-4 py-3.5 text-ink/72">{row.n}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* hypothesis */}
        <Section id="hypothesis" label="The hypothesis" bg="muted">
          <p className="mb-10 max-w-[820px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            The first round of research generated four hypotheses about why
            some flows read clearly and others didn&apos;t. The second,
            larger round tested every one of them again against a bigger
            sample — here&apos;s what held up.
          </p>
          <div className="flex flex-col">
            {HYPOTHESES.map((h, i, arr) => (
              <div
                key={h.n}
                className={`flex flex-col gap-2.5 border-t border-ink/14 py-7 sm:flex-row sm:gap-7 ${
                  i === arr.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex flex-none items-center gap-3 sm:w-[140px] sm:flex-col sm:items-start sm:gap-2.5">
                  <div className="font-archivo-expanded text-xl font-extrabold text-accent sm:text-2xl">
                    {h.n}
                  </div>
                  <div
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[.06em] ${
                      h.verdict === "Supported"
                        ? "bg-accent/10 text-accent"
                        : "bg-ink/8 text-ink/55"
                    }`}
                  >
                    {h.verdict}
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 font-archivo-expanded text-lg font-bold">
                    {h.t}
                  </div>
                  <div className="text-base font-normal leading-relaxed text-ink/72">
                    {h.d}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          {/* test it yourself */}
          <div>
            <div className="mb-5 text-xs font-semibold uppercase leading-none tracking-[.14em] text-accent">
              Test the flows yourself
            </div>
            <p className="mb-7 max-w-[720px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
              This is the same prototype used in the second round of
              testing — five flows, including the new Slider variant, now
              running in Kenya, Nigeria and South Africa. Pick a flow,
              choose a market, then tap the{" "}
              <b className="font-bold">M-KOPA</b> app icon on the
              phone&apos;s home screen to launch it — just as participants
              did in testing. The <b className="font-bold">All flows</b>{" "}
              icon returns you here to try another.
            </p>
            <iframe
              src={PROTO_V2_LAUNCHER}
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
              Advance Filter by Amount and Slider for both Kenya and
              Nigeria — the second, larger round of research is what
              decided this. Amount Only scored critically and didn&apos;t
              advance.
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
                  The second, larger round is what decided this — it&apos;s
                  the round that actually informed the shipping decision, not
                  the first: <b className="font-bold">Filter by amount</b> and{" "}
                  <b className="font-bold">Slider</b> read clearly in both
                  markets, so both went through a final design pass in Figma
                  before the production build. They&apos;re now rolling out
                  as an A/B test against the current live experience —{" "}
                  <b className="font-bold">Flow 1 (Today)</b> — so the final
                  call is made on real behaviour at scale, not just
                  moderated sessions.
                </p>
                <p className="text-base font-normal leading-relaxed text-ink/82 md:text-lg">
                  The two shipped screens are below — Slider shown in its
                  final Figma design, Filter by amount in the tested build.
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
                  Filter by amount — shipped
                </div>
                <p className="mb-4.5 text-sm font-normal leading-relaxed text-ink/72">
                  The strongest performer across both rounds of testing.
                  Opens empty, with helper copy nudging the first tap.
                </p>
                <PrototypeFrame
                  src={`${PROTO_V2}?flow=B&screen=selectB`}
                  screen="selectB"
                  title="Filter by amount — shipped"
                  desktopHeight={560}
                />
              </div>
              <div className="flex flex-col rounded-lg bg-white p-6">
                <div className="mb-2 font-archivo-expanded text-base font-bold text-accent">
                  Slider — shipped
                </div>
                <p className="mb-4.5 text-sm font-normal leading-relaxed text-ink/72">
                  The new variant from round two, shown here after its final
                  design pass in Figma. Opens empty too, with helper copy
                  nudging the first drag.
                </p>
                <div className="flex items-start justify-center overflow-hidden rounded-md bg-muted">
                  <FullImage
                    src="/assets/cashloan-slider-shipped.png"
                    alt="Slider — final shipped design"
                  />
                </div>
              </div>
            </div>
            <p className="mb-8 max-w-[760px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
              One decision came directly out of that refinement: neither
              flow pre-selects an amount. We&apos;d noticed a meaningful
              share of users didn&apos;t realise the amount and repayment
              plan were interactive at all until nudged — a pre-filled
              number reads as &quot;this is what I qualify for,&quot; full
              stop, not as a starting point. So both screens open empty,
              with short helper copy nudging the first interaction
              (&quot;Tap an amount to see your repayment options,&quot;
              &quot;Drag the slider to choose an amount&quot;). The bet: let
              people discover through doing that they have real choice,
              rather than hand them one number and hope they notice the
              other four.
            </p>
            <p className="mb-8 max-w-[760px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
              The repayment cards themselves lead with the daily figure, not
              the term — &quot;KES 30 daily&quot; sits larger and first, with
              the day count secondary. That&apos;s the same signal from
              research carried all the way into the card layout: customers
              reasoned from what they&apos;d pay each day, so that&apos;s the
              number carrying the visual weight.
            </p>
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
            The first round&apos;s ambiguity — a different winner in each
            market, on a small sample — is exactly what the second round was
            for. Testing deeper, on a bigger sample, is what actually
            decided what shipped: Filter by Amount and Slider read clearly
            in Kenya and Nigeria alike, while every flow that opened on a
            blank state lost people, no matter how minimal it looked. Two
            rounds of research on five competing directions is what took a
            plausible but shaky per-market split to two better-evidenced
            flows, live in production.
          </p>
        </Section>

          </div>
        </div>

        <NextCaseStudy href="/work/mkobo-bank" name="Mkobo Bank" />
        <Footer />
      </div>
  );
}
