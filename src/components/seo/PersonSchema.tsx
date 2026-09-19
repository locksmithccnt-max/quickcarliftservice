import { business, SITE_URL } from "@/config/business";
import JsonLd from "./JsonLd";

export default function PersonSchema() {
  const sameAs = Object.values(business.socialProfiles).filter(
    (v) => v && !v.startsWith("["),
  );

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: business.owner.name,
    jobTitle: business.owner.title,
    email: business.owner.email,
    image: `${SITE_URL}${business.owner.photo}`,
    url: `${SITE_URL}/about`,
    worksFor: {
      "@type": "LocalBusiness",
      name: business.name,
      url: SITE_URL,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    knowsAbout: [
      "Car lift services UAE",
      "Inter-emirate transportation",
      "Abu Dhabi to Dubai commute",
      "Monthly car lift plans",
      "Corporate transportation UAE",
    ],
  };

  if (sameAs.length > 0) data.sameAs = sameAs;

  return <JsonLd data={data} />;
}
