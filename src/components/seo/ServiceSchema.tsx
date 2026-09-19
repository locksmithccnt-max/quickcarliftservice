import { business, SITE_URL } from "@/config/business";
import JsonLd from "./JsonLd";

type Props = {
  name: string;
  description: string;
  url: string;
};

export default function ServiceSchema({ name, description, url }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      areaServed: business.serviceAreas,
      address: {
        "@type": "PostalAddress",
        addressLocality: business.address.city,
        addressCountry: business.address.countryCode,
      },
    },
    areaServed: business.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };

  return <JsonLd data={data} />;
}
