/*
  PROMPTLY SETTINGS
  =================
  Edit the values in quotes below. See README.md → "Analytics" and "Feedback link"
  for step-by-step instructions.
*/
window.PROMPTLY_CONFIG = {
  analytics: {
    // Which analytics service to use: "none", "plausible" or "umami".
    provider: "umami",

    // Plausible: the domain you added in your Plausible dashboard,
    // e.g. "yourname.github.io"
    plausibleDomain: "",
    // Only change this if your Plausible dashboard gives you a different script address.
    plausibleScript: "https://plausible.io/js/script.js",

    // Umami: the "Website ID" from your Umami dashboard
    // (looks like 1a2b3c4d-1234-5678-9abc-1234567890ab)
    umamiWebsiteId: "ab2ad0fd-67f8-4a08-9ec8-09044b001f1b",
    umamiScript: "https://cloud.umami.is/script.js",

    // true = also print every event to the browser console (for checking it works)
    debug: false
  },

  // A link for the "Send feedback" button, e.g. a Google Form address,
  // or "mailto:you@example.com". Leave empty to hide the button.
  feedbackUrl: ""
};
