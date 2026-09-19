export const business = {
  name: "Quick Car Lift Service",
  tagline:
    "Reliable Car Lift & Transportation Across Abu Dhabi, Dubai, Ajman & Al Ain",
  description:
    "Quick Car Lift Service provides reliable daily, monthly, and corporate car lift and transportation services based in Abu Dhabi, serving Abu Dhabi, Dubai, Ajman, and Al Ain.",
  phone: "+971 54 330 8261",
  whatsapp: "971543308261",
  email: "fawad.shakeel14@gmail.com",
  website: "https://www.quickcarliftservice.com",
  address: {
    street: "[ADD REAL ABU DHABI ADDRESS IF ELIGIBLE]",
    city: "Abu Dhabi",
    country: "UAE",
    countryCode: "AE",
  },
  coordinates: {
    lat: null as number | null, // "[ADD VERIFIED LAT]"
    lng: null as number | null, // "[ADD VERIFIED LNG]"
  },
  openingHours: "[ADD REAL HOURS]",
  googleMapsUrl: "[ADD VERIFIED MAP URL IF APPLICABLE]",
  owner: {
    name: "Fawad Shakeel",
    title: "Founder & Owner",
    email: "fawad.shakeel14@gmail.com",
    photo: "/images/fawad-shakeel.jpg",
  },
  socialProfiles: {
    facebook: "https://www.facebook.com/share/1C3BBRRCo1/",
    instagram: "https://www.instagram.com/quick.taxi.uae",
    tiktok: "https://www.tiktok.com/@wpc.trip",
  },
  serviceAreas: ["Abu Dhabi", "Dubai", "Ajman", "Al Ain"] as const,
  basedIn: "Abu Dhabi",
};

export type Business = typeof business;

/**
 * Build a `tel:` URL from the configured phone.
 * Returns a `#` placeholder if no real phone has been added yet.
 */
export function telHref(value: string = business.phone) {
  if (!value || value.startsWith("[")) return "#";
  return `tel:${value.replace(/\s+/g, "")}`;
}

/**
 * Build a WhatsApp URL from the configured WhatsApp number.
 * Returns a `#` placeholder if no real number has been added yet.
 */
export function whatsappHref(
  value: string = business.whatsapp,
  message?: string,
) {
  if (!value || value.startsWith("[")) return "#";
  const digits = value.replace(/[^\d]/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailHref(value: string = business.email) {
  if (!value || value.startsWith("[")) return "#";
  return `mailto:${value}`;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.quickcarliftservice.com";
