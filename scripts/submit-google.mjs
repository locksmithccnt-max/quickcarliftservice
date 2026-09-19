/**
 * Google Indexing API — bulk URL submission via Service Account
 * Uses zero external dependencies (built-in Node.js crypto + fetch)
 *
 * SETUP (one-time):
 *  1. Go to https://console.cloud.google.com → New project
 *  2. APIs & Services → Enable "Web Search Indexing API"
 *  3. IAM → Service Accounts → Create → download JSON key
 *  4. Google Search Console → Settings → Users & Permissions
 *     → Add user → paste service account email → set role to "Owner"
 *  5. Place the JSON key file at: scripts/service-account.json
 *
 * Run: node scripts/submit-google.mjs
 *  or: node scripts/submit-google.mjs path/to/service-account.json
 *
 * Quota: 200 requests/day by default. We have 25 URLs — well within limit.
 * Requires: Node 18+
 */

import { readFileSync } from "fs";
import { createSign } from "crypto";

const SITE_URL = "https://www.quickcarliftservice.com";
const KEY_FILE = process.argv[2] || "scripts/service-account.json";
const DELAY_MS = 200; // be polite between requests

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

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

async function getAccessToken(credentials) {
  const now = Math.floor(Date.now() / 1000);

  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: credentials.client_email,
      scope: "https://www.googleapis.com/auth/indexing",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    })
  );

  const sigInput = `${header}.${claims}`;
  const signer = createSign("RSA-SHA256");
  signer.update(sigInput);
  const signature = signer.sign(credentials.private_key, "base64url");
  const jwt = `${sigInput}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const data = await res.json();
  if (!data.access_token) {
    throw new Error(`Auth failed: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

async function notifyUrl(url, token) {
  const res = await fetch(
    "https://indexing.googleapis.com/v3/urlNotifications:publish",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    }
  );
  const data = await res.json();
  if (res.ok) {
    console.log(`  ✅ [${res.status}] ${url}`);
  } else {
    console.log(`  ❌ [${res.status}] ${url} — ${data?.error?.message ?? JSON.stringify(data)}`);
  }
  return res.ok;
}

async function main() {
  let credentials;
  try {
    credentials = JSON.parse(readFileSync(KEY_FILE, "utf8"));
  } catch {
    console.error(`\n❌ Could not read service account key: ${KEY_FILE}`);
    console.error("   Follow the SETUP steps in the comment at the top of this file.\n");
    process.exit(1);
  }

  console.log(`\n🔑 Authenticating as: ${credentials.client_email}`);
  const token = await getAccessToken(credentials);
  console.log("   Access token obtained ✓\n");

  console.log(`📡 Submitting ${URLS.length} URLs to Google Indexing API...\n`);

  let ok = 0;
  let fail = 0;
  for (const path of URLS) {
    const url = `${SITE_URL}${path}`;
    const success = await notifyUrl(url, token);
    success ? ok++ : fail++;
    await sleep(DELAY_MS);
  }

  console.log(`\n📊 Result: ${ok} submitted, ${fail} failed`);
  console.log("   Google typically crawls submitted URLs within hours to a few days.");
  console.log("   Monitor: https://search.google.com/search-console/index\n");
}

main().catch(console.error);
