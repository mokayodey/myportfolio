"use client";

import { useState, type KeyboardEvent } from "react";
import type { GatedSlug } from "@/lib/gate";

export default function LockedGate({ slug }: { slug: GatedSlug }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function check() {
    if (loading) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, password }),
      });
      if (res.ok) {
        // Full navigation (not client-side routing) so middleware re-checks
        // the freshly-set cookie on the server before rendering the page.
        window.location.href = `/work/${slug}`;
        return;
      }
      setError("Incorrect password");
      setPassword("");
    } catch {
      setError("Something went wrong — try again");
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") check();
  }

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-ink px-6 py-24 text-center text-canvas">
      <div className="text-xs font-semibold uppercase leading-none tracking-[.14em] text-gold">
        Protected case study
      </div>
      <div className="max-w-[360px] font-archivo text-2xl font-extrabold">
        This work is password-protected
      </div>
      <div className="max-w-[320px] text-[15px] font-normal text-canvas/70">
        Enter the password to view it.
      </div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
        onKeyDown={onKeyDown}
        autoFocus
        disabled={loading}
        className="w-[260px] max-w-[80vw] rounded-lg border border-canvas/30 bg-[#2a2823] px-4 py-3 text-[15px] font-medium text-canvas outline-none disabled:opacity-60"
      />
      <button
        onClick={check}
        disabled={loading}
        className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-white disabled:opacity-60"
      >
        {loading ? "Checking…" : "Unlock"}
      </button>
      <div className="min-h-[16px] text-[13px] font-medium text-gold">{error}</div>
    </div>
  );
}
