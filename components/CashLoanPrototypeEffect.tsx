"use client";

import { useEffect } from "react";

type PrototypeWindow = Window & { show?: (screen: string) => void };

// Forces each deep-linked prototype iframe to its target screen and injects
// "embed" styling that hides the prototype's own flow switcher/launcher
// chrome. Only works same-origin — see CLAUDE_CODE_host_prototype.md.
export default function CashLoanPrototypeEffect() {
  useEffect(() => {
    const enhance = (f: HTMLIFrameElement) => {
      const screen = f.getAttribute("data-deep-screen");
      try {
        const w = f.contentWindow as PrototypeWindow | null;
        const d = f.contentDocument;
        if (!d || !d.body) return;
        d.body.classList.add("test-mode", "embed");
        if (!d.getElementById("__embed-style")) {
          const st = d.createElement("style");
          st.id = "__embed-style";
          st.textContent =
            "@media(max-width:600px){.device{width:372px!important;height:788px!important;" +
            "border:10px solid #0c0e0c!important;border-radius:44px!important;" +
            "box-shadow:0 24px 60px rgba(12,14,12,.28)!important;}" +
            "body{padding:20px 0!important;background:transparent!important;" +
            "min-height:auto!important;justify-content:center!important;}}" +
            ".switcher,.launcher-link{display:none!important;}body{background:transparent!important;}";
          (d.head || d.documentElement).appendChild(st);
        }
        if (screen && w && typeof w.show === "function") w.show(screen);
      } catch {
        // cross-origin or not-ready; ignored
      }
    };

    const iframes = Array.from(
      document.querySelectorAll<HTMLIFrameElement>("iframe[data-deep-screen]"),
    );
    const run = () =>
      iframes.forEach((f) =>
        [0, 150, 400, 800, 1400].forEach((t) => setTimeout(() => enhance(f), t)),
      );
    iframes.forEach((f) => f.addEventListener("load", run));
    run();
    return () => iframes.forEach((f) => f.removeEventListener("load", run));
  }, []);

  return null;
}
