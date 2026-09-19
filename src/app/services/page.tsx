import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";
import { business } from "@/config/business";

const title = "Our Services";
const description =
  "Explore our car lift and transportation services: daily, monthly, office, employee, private, and city-to-city transport across the UAE.";

export const metadata: Metadata = buildMetadata({
  title: `Services | ${business.name}`,
  description,
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <WebPageSchema name={title} description={description} url="/services" />
      <PageHero
        eyebrow="Services"
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
