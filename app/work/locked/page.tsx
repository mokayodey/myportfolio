import type { Metadata } from "next";
import CaseNav from "@/components/CaseNav";
import LockedGate from "@/components/LockedGate";
import { isGatedSlug, type GatedSlug } from "@/lib/gate";

export const metadata: Metadata = {
  title: "Protected — Tosin Ariyibi",
};

export default async function LockedPage({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}) {
  const { slug } = await searchParams;
  const safeSlug: GatedSlug =
    slug && isGatedSlug(slug) ? slug : "cash-loan-ux";

  return (
    <div className="min-h-screen w-full bg-canvas text-ink">
      <CaseNav />
      <LockedGate slug={safeSlug} />
    </div>
  );
}
