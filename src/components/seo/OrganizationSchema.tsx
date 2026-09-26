import { business, SITE_URL } from "@/config/business";
import JsonLd from "./JsonLd";

export default function OrganizationSchema() {
  const hasRealPhone = business.phone && !business.phone.startsWith("[");
  const hasRealEmail = business.email && !business.email.startsWith("[");
  const hasRealStreet =
    business.address.street && !business.address.street.startsWith("[");

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": `${SITE_URL}/#organization`,
    name: business.name,
    description: business.description,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.webp`,
      width: 1376,
      height: 768,
    },
    image: `${SITE_URL}/logo.webp`,
    priceRange: "AED 100–180",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Bank Transfer, WhatsApp Pay",
    areaServed: business.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.city,
      addressRegion: "Abu Dhabi",
      addressCountry: business.address.countryCode,
      ...(hasRealStreet ? { streetAddress: business.address.street } : {}),
    },
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: business.owner.name,
      jobTitle: business.owner.title,
      email: business.owner.email,
    },
  };

  if (hasRealPhone) data.telephone = business.phone;
  if (hasRealEmail) data.email = business.email;

  if (business.coordinates.lat && business.coordinates.lng) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    };
  }

  const sameAs = Object.values(business.socialProfiles).filter(
    (v) => v && !v.startsWith("["),
  );
  if (sameAs.length > 0) data.sameAs = sameAs;

  // Service catalogue
  data.hasOfferCatalog = {
    "@type": "OfferCatalog",
    name: "Car Lift & Transportation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Daily Car Lift" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Monthly Car Lift" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Car Lift" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate & Employee Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "City-to-City Transportation" } },
    ],
  };

  return <JsonLd data={data} />;
}
