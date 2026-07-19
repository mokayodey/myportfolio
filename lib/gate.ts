const encoder = new TextEncoder();

export const GATED_SLUGS = [
  "cash-loan-ux",
  "tida-retail",
  "affordability-screen",
] as const;

export type GatedSlug = (typeof GATED_SLUGS)[number];

export function isGatedSlug(slug: string): slug is GatedSlug {
  return (GATED_SLUGS as readonly string[]).includes(slug);
}

export function cookieName(slug: GatedSlug): string {
  return `gate_${slug}`;
}

// Constant-time-ish string comparison: pads both inputs to a fixed length so
// the loop always runs the same number of iterations, avoiding a trivial
// early-return timing signal on length mismatches.
function safeEqual(a: string, b: string): boolean {
  const maxLen = 256;
  const aPadded = a.padEnd(maxLen, "\0").slice(0, maxLen);
  const bPadded = b.padEnd(maxLen, "\0").slice(0, maxLen);
  let diff = a.length ^ b.length;
  for (let i = 0; i < maxLen; i++) {
    diff |= aPadded.charCodeAt(i) ^ bPadded.charCodeAt(i);
  }
  return diff === 0;
}

export function checkPassword(input: string): boolean {
  const expected = process.env.CASE_STUDY_PASSWORD;
  if (!expected) return false;
  return safeEqual(input, expected);
}

async function getHmacKey(): Promise<CryptoKey> {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("AUTH_SECRET environment variable is not set");
  }
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function signSlug(slug: GatedSlug): Promise<string> {
  const key = await getHmacKey();
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(slug));
  return toHex(signature);
}

export async function verifySlugToken(
  slug: GatedSlug,
  token: string | undefined,
): Promise<boolean> {
  if (!token) return false;
  const expected = await signSlug(slug);
  return safeEqual(expected, token);
}
