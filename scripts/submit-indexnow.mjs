/**
 * IndexNow bulk submission — Bing, Yandex, and all IndexNow-compatible engines
 * Run: node scripts/submit-indexnow.mjs
 * Requires: Node 18+ (uses built-in fetch)
 * Must run AFTER the site is live at https://www.quickcarliftservice.com
 */

const KEY = "78a52ce6b430d1f9";
const HOST = "www.quickcarliftservice.com";
const SITE_URL = `https://${HOST}`;

const URLS = [
  "/",
  "/about",
  "/services",
  "/services/daily-car-lift",
  "/services/monthly-car-lift",
  "/services/office-transportation",
  "/services/employee-transportation",
  "/services/private-car-lift",
  "/services/city-to-city-transportation",
  "/locations",
  "/locations/abu-dhabi",
  "/locations/dubai",
  "/locations/ajman",
  "/locations/al-ain",
  "/routes",
  "/routes/abu-dhabi-to-dubai",
  "/routes/dubai-to-abu-dhabi",
  "/routes/abu-dhabi-to-ajman",
  "/routes/ajman-to-abu-dhabi",
  "/routes/abu-dhabi-to-al-ain",
  "/routes/al-ain-to-abu-dhabi",
  "/booking",
  "/contact",
  "/faq",
  "/fleet",
];

const FULL_URLS = URLS.map((p) => `${SITE_URL}${p}`);

// IndexNow endpoints — submitting to one notifies all partners
const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",      // routes to Bing, Yandex, Seznam, Naver, etc.
  "https://www.bing.com/indexnow",           // Bing direct
];

async function submitToEndpoint(endpoint) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList: FULL_URLS,
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  const text = await res.text().catch(() => "");
  console.log(`[${res.status}] ${endpoint} — ${res.statusText} ${text ? `(${text.trim()})` : ""}`);
  return res.status;
}

async function main() {
  console.log(`\n🚀 IndexNow — submitting ${FULL_URLS.length} URLs\n`);
  FULL_URLS.forEach((u) => console.log(`  → ${u}`));
  console.log();

  for (const endpoint of ENDPOINTS) {
    await submitToEndpoint(endpoint);
  }

  console.log("\n✅ Done. Bing typically indexes within minutes to hours.");
  console.log("   Check: https://www.bing.com/webmasters/about");
}

main().catch(console.error);
