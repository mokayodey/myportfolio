import { NextRequest, NextResponse } from "next/server";
import { cookieName, isGatedSlug, verifySlugToken } from "@/lib/gate";

export async function proxy(req: NextRequest) {
  const slug = req.nextUrl.pathname.replace(/^\/work\//, "");
  if (!isGatedSlug(slug)) return NextResponse.next();

  const token = req.cookies.get(cookieName(slug))?.value;
  const authorized = await verifySlugToken(slug, token);
  if (authorized) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/work/locked";
  url.search = `?slug=${slug}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/work/cash-loan-ux", "/work/tida-retail", "/work/affordability-screen"],
};
