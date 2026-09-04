import { useEffect } from "react";

const GTM_ID = "GTM-N4WXM93";
const YM_ID = 50412993;
const AHREFS_KEY = "Fu5ZI8/blKtMubhk03NIBQ";
const IDLE_DELAY = 3500;

function injectScript(src, attrs) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  Object.keys(attrs || {}).forEach((k) => s.setAttribute(k, attrs[k]));
  document.head.appendChild(s);
}

function loadGTM() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  injectScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
}

function loadYandexMetrika() {
  if (window.ym) return;
  window.ym =
    window.ym ||
    function () {
      (window.ym.a = window.ym.a || []).push(arguments);
    };
  window.ym.l = 1 * new Date();
  injectScript("https://mc.yandex.ru/metrika/tag.js");
  window.ym(YM_ID, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
}

function loadAhrefs() {
  injectScript("https://analytics.ahrefs.com/analytics.js", {
    "data-key": AHREFS_KEY,
  });
}

export default function Analytics() {
  useEffect(() => {
    let done = false;
    let timer = null;

    const events = ["scroll", "pointerdown", "keydown", "touchstart", "wheel"];

    const cleanup = () => {
      if (timer) clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, start));
    };

    const start = () => {
      if (done) return;
      done = true;
      cleanup();
      loadGTM();
      loadYandexMetrika();
      loadAhrefs();
    };

    const arm = () => {
      events.forEach((e) =>
        window.addEventListener(e, start, { passive: true, once: true })
      );
      timer = setTimeout(start, IDLE_DELAY);
    };

    if (document.readyState === "complete") arm();
    else window.addEventListener("load", arm, { once: true });

    return () => {
      window.removeEventListener("load", arm);
      cleanup();
    };
  }, []);

  return null;
}
