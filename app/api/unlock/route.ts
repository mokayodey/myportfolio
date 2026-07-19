import { NextRequest, NextResponse } from "next/server";
import { checkPassword, cookieName, isGatedSlug, signSlug } from "@/lib/gate";

export async function POST(req: NextRequest) {
  let body: { slug?: unknown; password?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const { slug, password } = body;
  if (typeof slug !== "string" || !isGatedSlug(slug) || typeof password !== "string") {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (!checkPassword(password)) {
    // Small artificial delay to slow down naive brute-forcing.
    await new Promise((resolve) => setTimeout(resolve, 300));
    return NextResponse.json({ ok: false, error: "Incorrect password" }, { status: 401 });
  }

  const token = await signSlug(slug);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(cookieName(slug), token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    // No maxAge/expires — session cookie, cleared when the browser closes,
    // matching the original "unlock persists for browser session" behavior.
  });
  return res;
}
