import { SITE_URL } from "@/config/business";
import JsonLd from "./JsonLd";
import type { Crumb } from "@/components/Breadcrumbs";

type Props = {
  items: Crumb[];
};

export default function BreadcrumbSchema({ items }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.label,
      ...(crumb.href
        ? {
            item: crumb.href.startsWith("http")
              ? crumb.href
              : `${SITE_URL}${crumb.href}`,
          }
        : {}),
    })),
  };

  return <JsonLd data={data} />;
}
