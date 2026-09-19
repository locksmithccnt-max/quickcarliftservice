import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RouteCard from "@/components/RouteCard";
import CTABanner from "@/components/CTABanner";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { routes } from "@/data/routes";
import { buildMetadata } from "@/lib/metadata";
import { business } from "@/config/business";

const title = "Popular Routes";
const description =
  "Direct inter-emirate car lift routes: Abu Dhabi to Dubai, Dubai to Abu Dhabi, Ajman to Abu Dhabi, Al Ain to Abu Dhabi, and more.";

export const metadata: Metadata = buildMetadata({
  title: `Routes | ${business.name}`,
  description,
  path: "/routes",
});

export default function RoutesIndexPage() {
  return (
    <>
      <WebPageSchema name={title} description={description} url="/routes" />
      <PageHero
        eyebrow="Routes"
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Routes" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2">
            {routes.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
