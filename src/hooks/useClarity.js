import { useEffect, useState } from "react";

const STORAGE_KEY = "clarity-consent";
const CONSENT_EVENT = "clarity-consent-changed";
const CLARITY_PROJECT_ID = "wlt5bsa8nh";

let scriptInjected = false;

function injectClarityScript() {
  if (scriptInjected || typeof window === "undefined") return;
  scriptInjected = true;
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
}

export function resetClarityConsent() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function useClarityConsent() {
  const [consent, setConsentState] = useState(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(STORAGE_KEY);
  });

  useEffect(() => {
    if (consent === "accepted") injectClarityScript();
  }, [consent]);

  useEffect(() => {
    const handler = () => {
      setConsentState(localStorage.getItem(STORAGE_KEY));
    };
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  const setConsent = (value) => {
    if (value === null) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, value);
    }
    setConsentState(value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  return [consent, setConsent];
}
