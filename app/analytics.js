/*
  Promptly analytics.
  Sends anonymous usage events (which course, which lesson, where people stop,
  which questions they get wrong) to Plausible or Umami, if one is set up in config.js.
  No names, emails or other personal details are ever sent.
  Nothing is sent when the app is opened as a local file, or when provider is "none".
*/
const Analytics = (() => {
  const cfg = ((window.PROMPTLY_CONFIG || {}).analytics) || {};
  let provider = null;
  const pending = [];

  function addScript(src, attrs, onload) {
    const s = document.createElement("script");
    s.defer = true;
    s.src = src;
    for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v);
    if (onload) s.addEventListener("load", onload);
    document.head.appendChild(s);
  }

  function flush() {
    while (pending.length && window.umami && typeof window.umami.track === "function") {
      const [name, props] = pending.shift();
      window.umami.track(name, props);
    }
  }

  function init() {
    if (!location.protocol.startsWith("http")) return; // local file: don't track
    if (cfg.provider === "plausible" && cfg.plausibleDomain) {
      // Queue events until Plausible's script has loaded.
      window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };
      addScript(cfg.plausibleScript || "https://plausible.io/js/script.js", { "data-domain": cfg.plausibleDomain });
      provider = "plausible";
    } else if (cfg.provider === "umami" && cfg.umamiWebsiteId) {
      addScript(cfg.umamiScript || "https://cloud.umami.is/script.js", { "data-website-id": cfg.umamiWebsiteId }, flush);
      provider = "umami";
    }
  }

  // Keep property values short and simple (text or numbers only).
  function clean(props) {
    const out = {};
    for (const [k, v] of Object.entries(props || {})) {
      if (v === undefined || v === null) continue;
      out[k] = typeof v === "number" ? v : String(v).slice(0, 100);
    }
    return out;
  }

  function track(name, props) {
    const p = clean(props);
    if (cfg.debug) console.log("[analytics]", name, p);
    if (!provider) return;
    try {
      if (provider === "plausible") window.plausible(name, { props: p });
      else { pending.push([name, p]); flush(); }
    } catch (e) { /* never let analytics break the app */ }
  }

  init();
  return { track };
})();
