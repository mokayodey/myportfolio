import type { Metadata } from "next";
import CaseNav from "@/components/CaseNav";
import CaseHero from "@/components/CaseHero";
import Section from "@/components/Section";
import SectionRow from "@/components/SectionRow";
import StatCard from "@/components/StatCard";
import Stat from "@/components/Stat";
import FullImage from "@/components/FullImage";
import NextCaseStudy from "@/components/NextCaseStudy";
import Footer from "@/components/Footer";
import CaseTOC from "@/components/CaseTOC";

export const metadata: Metadata = {
  title: "Tida Retail — Tosin Ariyibi",
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
];

export default function TidaRetail() {
  return (
      <div className="min-h-screen w-full bg-canvas text-ink">
        <CaseNav />

        <CaseHero
          id="top"
          eyebrow="Product Design Lead · 2025–Present"
          title="Tida Retail — the sale and the payment were never the same event."
          intro="A design lead's account of unifying two disconnected systems of record inside Nigerian retail — without asking a single merchant to change how they work."
          facts={[
            {
              label: "Role",
              value: "Product Design Lead — research, systems design & investor narrative",
            },
            {
              label: "Scope",
              value: "Offline-first UX, multi-provider hardware integration, BNPL financing with Mkobo",
            },
            { label: "Platform", value: "Tablet + Bluetooth hardware, offline-first" },
          ]}
        />

        <div className="px-4 sm:px-5 md:px-14">
          <div className="mt-12 flex items-end justify-center overflow-hidden rounded bg-muted px-0 pt-10">
            <FullImage
              src="/assets/tida-device-contactless.png"
              alt="Tida Retail device"
              className="w-full max-w-[820px]"
            />
          </div>
        </div>

        {/* thesis */}
        <div className="border-b border-ink/12 px-4 py-16 sm:px-5 md:px-14 md:py-20">
          <p className="m-0 max-w-[820px] font-archivo-expanded text-xl font-semibold leading-snug tracking-[-.005em] text-ink md:text-[34px]">
            Everyone framed this as a payments problem. It wasn&apos;t. It was
            a trust problem — the store owner didn&apos;t trust their own
            numbers, and we weren&apos;t going to earn that trust by asking
            them to change how they run their shop.
          </p>
        </div>

        <div className="flex pt-10 lg:gap-10 lg:pl-14">
          <CaseTOC sections={tocSections} />
          <div className="min-w-0 flex-1">

        {/* goals & impact */}
        <div id="result" className="scroll-mt-24 px-4 py-16 sm:px-5 md:px-14 md:py-24">
          <div className="mb-9 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
            Proving the thesis — pilot results
          </div>
          <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/75 md:text-[17px]">
            Before scaling nationally, we needed to de-risk the core bet —
            that closing the interface gap would close the trust gap too.
            Two pilots, in different retail contexts, tested it.
          </p>
          <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                name: "Addide",
                sub: "Mid-sized retail store, Lagos · 10-store pilot",
                rows: [
                  { l: "Revenue leakage", before: "2%–10%", after: "0%" },
                  { l: "Reconciliation time", before: "1–2hrs", after: "<10min" },
                  { l: "Recorded revenue", before: "Inconsistent", after: "+5%" },
                ],
              },
              {
                name: "Ace Supermarket",
                sub: "Retail store operating across Nigeria · 5-store pilot",
                rows: [
                  { l: "Revenue leakage", before: "5%–10%", after: "0%" },
                  { l: "Reconciliation time", before: "1–2hrs", after: "<10min" },
                  { l: "Recorded revenue", before: "Inconsistent", after: "+10.9%" },
                ],
              },
            ].map((card) => (
              <div key={card.name} className="rounded-md bg-white p-8">
                <div className="mb-0.5 font-archivo-expanded text-lg font-bold">
                  {card.name}
                </div>
                <div className="mb-6 text-xs font-medium text-ink/50">
                  {card.sub}
                </div>
                <div className="flex flex-col gap-3.5">
                  {card.rows.map((r) => (
                    <div
                      key={r.l}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <span className="text-sm font-medium text-ink/65">
                        {r.l}
                      </span>
                      <span className="text-[13px] font-medium text-ink/40 line-through">
                        {r.before}
                      </span>
                      <span className="font-archivo-expanded text-xl font-extrabold text-accent">
                        {r.after}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="m-0 max-w-[720px] text-base font-normal italic leading-relaxed text-ink/75 md:text-[17px]">
            Two very different stores, the same result: when the interface
            gap closed, the leakage went to zero and reconciliation dropped
            from hours to minutes. That consistency, more than either number
            alone, is what took this from pilot to platform bet.
          </p>
        </div>

        {/* the challenge */}
        <SectionRow id="problem" label="Context">
          <p className="mb-6 text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            In Nigerian retail, a sale and a payment are two disconnected
            events, run on two disconnected systems, reconciled by a human
            being at the end of a long shift. Three pieces of infrastructure
            sit between a customer and a recorded sale — and none of them
            talk to each other.
          </p>
          <div className="flex flex-col gap-px overflow-hidden rounded bg-ink/12">
            {[
              {
                title: "Payment terminal",
                desc: "Processes debit cards and bank transfers — usually one of 2–3 competing providers per store",
              },
              {
                title: "POS software",
                desc: "Records the sale and tracks inventory — with no knowledge of whether payment ever succeeded",
              },
              {
                title: "End-of-day reconciliation",
                desc: "A cashier manually matches sales against payment slips — the system's only source of truth",
              },
            ].map((row) => (
              <div
                key={row.title}
                className="flex flex-col gap-2 bg-canvas px-5 py-4 sm:flex-row sm:justify-between sm:gap-6"
              >
                <div className="flex-none font-archivo-expanded text-[15px] font-bold sm:w-[220px]">
                  {row.title}
                </div>
                <div className="text-sm font-normal text-ink/60">
                  {row.desc}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[760px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            This isn&apos;t only a large-retailer problem — it&apos;s mostly a
            small-retailer one. An estimated 97% of Nigeria&apos;s retail
            transactions run through small, independent shops rather than
            large chains, and most of those retailers keep no formal record
            of their own performance at all. That&apos;s not incidental to
            the credit problem — it&apos;s the cause of it. Credit
            facilities for small businesses exist; what most of these
            retailers lack isn&apos;t access to lenders, it&apos;s a
            verifiable trail of their own numbers that a lender could use to
            judge them creditworthy.
          </p>
          <p className="m-0 mt-3 max-w-[760px] text-sm font-normal italic leading-relaxed text-ink/55">
            Sources: Boston Consulting Group (2022), cited in Oxford Business
            Group&apos;s Nigeria 2024 report; PwC Nigeria MSME Survey 2024
            (lack of documentation cited among the core barriers to credit
            access).
          </p>
        </SectionRow>

        <SectionRow label="Cost of the gap" bg="muted">
          <p className="mb-10 max-w-[760px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            Manual reconciliation isn&apos;t just slow — it&apos;s a silent
            tax on the business. Every mismatch is either a loss no one
            notices, or an hour spent chasing a number that should never have
            needed chasing. The shape of that tax changes with the size of
            the store, but nobody escapes it.
          </p>

          <div className="mb-4 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
            Large retail — from our own research
          </div>
          <div className="mb-10 flex flex-wrap gap-10 md:gap-14">
            <Stat
              value="+2hrs"
              label="lost to manual reconciliation, daily, per store"
              size="lg"
            />
            <Stat
              value="Zero"
              label="real-time visibility into how the business is actually doing"
              size="lg"
            />
            <Stat
              value="+5%"
              label="of daily revenue leaking out through unmatched sales"
              size="lg"
            />
          </div>

          <div className="mb-4 text-xs font-semibold uppercase leading-none tracking-[.14em] text-ink/50">
            Small retail — the national picture
          </div>
          <div className="mb-4 flex flex-wrap gap-10 md:gap-14">
            <Stat
              value="1 in 4"
              label="informal business owners keep no business records at all"
              size="lg"
            />
            <Stat
              value="38%"
              label="of those who do keep records only track them mentally — nothing written down"
              size="lg"
            />
            <Stat
              value="44%"
              label="of informal businesses earn under ₦20,000 (~$12) a day — no margin left to absorb any of it"
              size="lg"
            />
          </div>
          <p className="m-0 max-w-[760px] text-sm font-normal italic leading-relaxed text-ink/55">
            Sources: Moniepoint 2025 Informal Economy Report (400 informal
            business owners surveyed across Nigeria&apos;s six geopolitical
            zones) — &quot;One in four informal business owners do not keep
            business records,&quot; and of those who do, &quot;38% say they
            keep track of their business mentally, without any written
            records.&quot; Moniepoint 2024 Informal Economy Report — 44% of
            informal businesses earn below ₦20,000 daily.
          </p>
        </SectionRow>

        {/* research */}
        <div className="px-4 sm:px-5 md:px-14">
          <FullImage
            src="/assets/tida-detail.png"
            alt="Tida Retail detail"
            className="mt-16 rounded"
          />
        </div>

        <SectionRow id="research" label="Research">
          <p className="mb-7 text-base font-normal leading-relaxed text-ink/78 md:text-[17px]">
            Rather than start from what a POS system could do, I started from
            the shift itself — sitting with cashiers through open and close,
            and separately interviewing the owners who&apos;d have to trust
            the numbers it produced.
          </p>
          <div className="mb-8 flex flex-col gap-6 sm:flex-row">
            <StatCard value="30" label="store managers & owners interviewed" />
            <StatCard value="30" label="cashiers observed through live shifts" />
          </div>
          <p className="text-base font-normal leading-relaxed text-ink/78 md:text-[17px]">
            The two groups wanted almost opposite things — cashiers wanted
            the reconciliation pain gone; owners wanted proof nothing had
            been hidden from them. Any solution had to satisfy both at once,
            or it would be rejected by whichever side lost. The &quot;cost of
            the gap&quot; figures above, and the reframe below, both came
            directly out of these interviews.
          </p>
        </SectionRow>

        {/* hypothesis */}
        <Section id="hypothesis" label="The reframe">
          <div className="mb-5 max-w-[760px] border-l-[3px] border-accent py-1 pl-6">
            <p className="m-0 font-archivo-expanded text-lg font-medium leading-relaxed text-ink/90 md:text-[26px]">
              &quot;Cashiers navigate an average of three separate hardware
              interfaces per transaction — every extra step is another place
              for a mismatch to be born, and another reason for an owner not
              to trust their own till.&quot;
            </p>
          </div>
          <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-ink/72 md:text-[17px]">
            The insight wasn&apos;t &quot;reconciliation is slow.&quot; It was
            that every extra interface in the transaction path was a fresh
            point of failure — and fixing that meant collapsing interfaces,
            not adding a dashboard on top of them.
          </p>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { v: "98%", l: "of cashiers spend +2hrs on end-of-day reconciliation" },
              { v: "80%", l: "of stores run multiple competing payment providers" },
              { v: "76%", l: "of cashiers have missed or misquoted a payment" },
              { v: "100%", l: "have no single point of truth for payment" },
              { v: "100%", l: "have experienced a reconciliation mismatch" },
            ].map((s) => (
              <div key={s.l} className="border-t border-ink/14 pt-3.5">
                <div className="font-archivo-expanded text-2xl font-extrabold text-accent">
                  {s.v}
                </div>
                <div className="mt-1.5 text-xs font-medium leading-snug text-ink/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* design principles */}
        <Section id="design-principles" label="Design principles">
          <div className="flex max-w-[820px] flex-col">
            {[
              {
                n: "01",
                t: "Collapse interfaces, don't add one",
                d: "Every hardware switch a cashier makes is a place a mismatch can start. The fix connects payment and sale in real time — it doesn't hand the cashier a fourth screen to check.",
              },
              {
                n: "02",
                t: "Trust is earned by the terminal that's already there",
                d: "Owners didn't need a new provider to trust — they needed the provider they already used to finally talk to their sales record.",
              },
              {
                n: "03",
                t: "Make the absence of a problem visible",
                d: "A silent success (a matched transaction) needed to feel as concrete to an owner as a loud failure — otherwise the trust gap would just move downstream.",
              },
            ].map((p, i, arr) => (
              <div
                key={p.n}
                className={`flex gap-5 border-t border-ink/14 py-6 sm:gap-7 ${
                  i === arr.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="w-8 flex-none font-archivo-expanded text-xl font-extrabold text-accent sm:w-10 sm:text-2xl">
                  {p.n}
                </div>
                <div>
                  <div className="mb-1.5 font-archivo-expanded text-base font-bold sm:text-lg">
                    {p.t}
                  </div>
                  <div className="text-sm font-normal leading-relaxed text-ink/72 sm:text-base">
                    {p.d}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* solutions */}
        <Section id="solutions" label="Product architecture" bg="ink" inverted>
          <p className="mb-10 max-w-[720px] text-base font-normal leading-relaxed text-canvas/72 md:text-[17px]">
            The interface is one action — confirm payment. Behind it, three
            systems have to agree on the same truth within seconds,
            offline-first, with no room for a cashier to notice the
            plumbing.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                t: "POS Software",
                d: "Sends payment notification →\nreceives payment confirmation ←",
              },
              {
                t: "Payment Terminal",
                d: "Sends transaction status →\nreceives transaction status API ←",
              },
              {
                t: "Transaction API",
                d: "Syncs with merchant backend ↓\nclosing the loop in real time",
              },
            ].map((b) => (
              <div
                key={b.t}
                className="flex-1 rounded-md border border-canvas/20 p-5"
              >
                <div className="mb-2 font-archivo-expanded text-[15px] font-bold">
                  {b.t}
                </div>
                <div className="whitespace-pre-line text-[13px] font-normal leading-relaxed text-canvas/60">
                  {b.d}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <SectionRow label="At the till">
          <div className="flex flex-col gap-6">
            {[
              {
                t: "Automatic payment validation",
                d: "The system only records a sale after successful payment confirmation — no more selling on trust that reconciliation will catch up later.",
              },
              {
                t: "Single action payment trigger",
                d: "Cashiers initiate or confirm payment directly from TidaOS instead of switching devices mid-transaction.",
              },
              {
                t: "Visual payment status & feedback",
                d: "Real-time status prevents duplicate charges — and makes a successful match visible, not just a silent absence of error.",
              },
            ].map((item) => (
              <div key={item.t}>
                <div className="font-archivo-expanded text-base font-bold text-accent">
                  {item.t}
                </div>
                <div className="mt-1.5 text-base font-normal leading-relaxed text-ink/75">
                  {item.d}
                </div>
              </div>
            ))}
          </div>
        </SectionRow>

        <Section label="Why bank transfer, specifically" bg="ink" inverted>
          <p className="mb-8 max-w-[760px] text-base font-normal leading-relaxed text-canvas/82 md:text-lg">
            Cards auto-confirm at the terminal — the till already knows the
            moment a card payment clears. A bank transfer doesn&apos;t. The
            customer moves money peer-to-peer, and the cashier is left
            squinting at a phone notification to decide whether to hand over
            the goods. That gap sits on top of the single largest payment
            rail in the country.
          </p>
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { v: "₦1.07qn", l: "moved via instant bank transfer (NIP) in 2024 — up 78% year on year" },
              { v: "11.2bn", l: "instant transfers processed nationally in 2024" },
              { v: "₦18.3tn", l: "moved via card/POS in the same year — under 2% the size of transfer volume" },
            ].map((s) => (
              <div key={s.v} className="border-t border-canvas/20 pt-4">
                <div className="font-archivo-expanded text-[28px] font-extrabold md:text-[34px]">
                  {s.v}
                </div>
                <div className="mt-1.5 text-[13px] font-medium leading-snug text-canvas/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          <p className="m-0 max-w-[760px] text-sm font-normal italic leading-relaxed text-canvas/55">
            Source: NIBSS 2024 e-payments data. Bank transfer is not an
            alternative payment method in Nigerian retail — it is the
            default one. Confirming it inside TidaOS, without a second
            device or a second glance at a phone, was the highest-leverage
            fix available.
          </p>
        </Section>

        <div className="px-4 sm:px-5 md:px-14">
          <div className="flex items-center justify-center overflow-hidden rounded bg-muted px-0 py-10">
            <FullImage
              src="/assets/tida-ui-transfer-confirm.png"
              alt="Tida Retail transfer confirmation"
              className="max-w-[900px] rounded-md"
            />
          </div>
          <div className="mt-3.5 text-[13px] font-medium text-ink/50">
            Pending transfers matched to the open sale by sender name and
            amount — the cashier confirms without leaving the till or
            opening a banking app
          </div>
        </div>

        <Section label="The product">
          <p className="mb-10 max-w-[760px] text-base font-normal leading-relaxed text-ink/78 md:text-lg">
            Two surfaces, one system of record: a web admin where owners
            manage inventory with full confidence in the numbers, and a
            tablet POS where cashiers collect payment across every method a
            customer might use — cash, card, transfer, or wallet — without
            leaving the till.
          </p>
          <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <FullImage
                src="/assets/tida-ui-products-list.png"
                alt="Tida Retail products list"
                className="rounded-md border border-ink/12"
              />
              <div className="mt-2.5 text-[13px] font-medium text-ink/50">
                Inventory, priced and stocked per location — owners see the
                same numbers the till reconciles against
              </div>
            </div>
            <div>
              <FullImage
                src="/assets/tida-ui-add-product.png"
                alt="Tida Retail add product"
                className="rounded-md border border-ink/12"
              />
              <div className="mt-2.5 text-[13px] font-medium text-ink/50">
                Adding a product to inventory — margin and selling price
                calculated live from purchase price
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <FullImage
                src="/assets/tida-ui-pos-cart.png"
                alt="Tida Retail POS cart"
                className="rounded-md border border-ink/12"
              />
              <div className="mt-2.5 text-[13px] font-medium text-ink/50">
                The till — items, quantities and total stay in view through
                the whole transaction
              </div>
            </div>
            <div>
              <FullImage
                src="/assets/tida-ui-pos-payment.png"
                alt="Tida Retail POS payment"
                className="rounded-md border border-ink/12"
              />
              <div className="mt-2.5 text-[13px] font-medium text-ink/50">
                Collecting payment — cash, card, transfer or wallet, all
                logged against the same sale record
              </div>
            </div>
          </div>
        </Section>

        {/* iterations & trade-offs */}
        <Section id="iterations" label="Trade-offs I made deliberately">
          <p className="mb-9 max-w-[760px] text-base font-normal leading-relaxed text-ink/82 md:text-lg">
            Asking merchants to switch payment providers would have created
            friction, distrust, and a far longer sales cycle. Every decision
            below trades a &quot;more correct&quot; architecture for one
            merchants would actually adopt.
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Speed over control",
                d: "Owning our own payment rails would give full control, but take months we didn't have. Integrating existing providers got real merchants live in weeks.",
              },
              {
                t: "Standard connectors over bespoke integration",
                d: "Rather than custom-code each provider, we designed one integration layer — accepting short-term rigidity for long-term speed onboarding new providers.",
              },
              {
                t: "Invisibility over ownership of the moment",
                d: "Merchants kept their terminal exactly as it was. Tida gave up the chance to “own” the payment moment in exchange for zero behaviour change at the till.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-md border-l-4 border-accent bg-white p-6"
              >
                <div className="mb-2.5 font-archivo-expanded text-sm font-bold">
                  {c.t}
                </div>
                <p className="m-0 text-sm font-normal leading-relaxed text-ink/68">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </Section>

          </div>
        </div>

        <NextCaseStudy href="/work/helium-health" name="Helium Health" />
        <Footer />
      </div>
  );
}
