import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LocationCard from "@/components/LocationCard";
import CTABanner from "@/components/CTABanner";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { locations } from "@/data/locations";
import { buildMetadata } from "@/lib/metadata";
import { business } from "@/config/business";

const title = "Service Locations";
const description =
  "Where we operate: Abu Dhabi (our home base), Dubai, Ajman, and Al Ain. See details of coverage, neighbourhoods, and routes for each location.";

export const metadata: Metadata = buildMetadata({
  title: `Locations | ${business.name}`,
  description,
  path: "/locations",
});

export default function LocationsIndexPage() {
  return (
    <>
      <WebPageSchema name={title} description={description} url="/locations" />
      <PageHero
        eyebrow="Locations"
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <LocationCard key={loc.slug} location={loc} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
