"use client";

import { useEffect, useRef } from "react";

// This loads the EXACT SAME widget.js that runs on real businesses' own
// websites - nothing here is a mockup or a recording. A visitor clicking
// "Try AMARA" is genuinely negotiating with the real product, against a
// dedicated showcase business set up specifically for this page (see
// HOW_TO_APPLY.md for how that business is onboarded and protected with
// its own conversation limit).
export default function TryAmaraWidget() {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const apiKey = process.env.NEXT_PUBLIC_AMARA_DEMO_API_KEY;
    const apiUrl = process.env.NEXT_PUBLIC_AMARA_API_URL;
    const widgetUrl = process.env.NEXT_PUBLIC_AMARA_WIDGET_URL;

    if (!apiKey || !apiUrl || !widgetUrl) {
      console.warn(
        "[Try AMARA] Missing NEXT_PUBLIC_AMARA_DEMO_API_KEY / NEXT_PUBLIC_AMARA_API_URL / NEXT_PUBLIC_AMARA_WIDGET_URL - the live demo widget won't appear until these are set.",
      );
      return;
    }

    const script = document.createElement("script");
    script.src = widgetUrl;
    script.setAttribute("data-api-key", apiKey);
    script.setAttribute("data-api-url", apiUrl);
    script.setAttribute("data-business-name", "AMARA Showcase");
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  // The widget renders its own floating bubble (bottom-right) once loaded -
  // this component has nothing visual of its own to render.
  return null;
}
