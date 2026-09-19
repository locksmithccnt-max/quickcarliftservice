import { SITE_URL } from "@/config/business";
import JsonLd from "./JsonLd";

type Props = {
  name: string;
  description: string;
  url: string;
};

export default function WebPageSchema({ name, description, url }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
  };
  return <JsonLd data={data} />;
}
