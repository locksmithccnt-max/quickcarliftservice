import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RouteCard from "@/components/RouteCard";
import CTABanner from "@/components/CTABanner";
import Icon from "@/components/Icon";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { routes } from "@/data/routes";
import { buildMetadata } from "@/lib/metadata";
import { business, telHref, whatsappHref } from "@/config/business";

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

      {/* Pricing context strip */}
      <section className="border-y border-border bg-background-soft py-4">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span className="font-semibold text-foreground">Dubai ↔ Abu Dhabi:</span>
              <span className="inline-flex items-center gap-1.5 text-accent font-semibold">
                <Icon name="users" size={14} />
                Sharing 100 AED
              </span>
              <span className="inline-flex items-center gap-1.5 text-foreground-muted">
                <Icon name="car" size={14} />
                Private 160 AED
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a href={telHref()} className="btn btn-primary btn-sm">
                <Icon name="phone" size={14} />
                Call to book
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <Icon name="whatsapp" size={14} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

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
