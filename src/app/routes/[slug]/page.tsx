import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import RouteCard from "@/components/RouteCard";
import FAQSchema from "@/components/seo/FAQSchema";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { getRouteBySlug, getRouteSlugs, routes } from "@/data/routes";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";
import { telHref, whatsappHref } from "@/config/business";

type Params = { slug: string };

export function generateStaticParams() {
  return getRouteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return {};
  return buildMetadata({
    title: route.metadata.title,
    description: route.metadata.description,
    path: `/routes/${route.slug}`,
  });
}

export default async function RoutePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return notFound();

  const relatedRouteObjects = route.relatedRoutes
    .map((r) => routes.find((rt) => rt.slug === r))
    .filter((r): r is (typeof routes)[number] => Boolean(r));

  const availableServices = route.serviceTypes
    .map((s) => services.find((sv) => sv.slug === s))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const originSlug = route.origin.toLowerCase().replace(/\s+/g, "-");
  const destinationSlug = route.destination.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <WebPageSchema
        name={route.metadata.title}
        description={route.metadata.description}
        url={`/routes/${route.slug}`}
      />
      <FAQSchema items={route.faqs} />

      <PageHero
        eyebrow="Route"
        title={`${route.origin} → ${route.destination}`}
        description={route.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Routes", href: "/routes" },
          { label: `${route.origin} to ${route.destination}` },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              {/* Pricing — shown only when real prices are available */}
              {route.pricing && (
                <div>
                  <h2 className="h3">Fares</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="card border-accent/30 bg-accent-soft">
                      <p className="eyebrow">Sharing seat</p>
                      <p className="mt-2 text-3xl font-bold text-accent">
                        {route.pricing.sharing}{" "}
                        <span className="text-lg font-semibold">{route.pricing.currency}</span>
                      </p>
                      <p className="mt-1 text-sm text-foreground-muted">Per person, one way</p>
                    </div>
                    <div className="card">
                      <p className="eyebrow">Private car</p>
                      <p className="mt-2 text-3xl font-bold text-foreground">
                        {route.pricing.private}{" "}
                        <span className="text-lg font-semibold text-foreground-muted">{route.pricing.currency}</span>
                      </p>
                      <p className="mt-1 text-sm text-foreground-muted">Whole vehicle, one way</p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-foreground-subtle">
                    Call or WhatsApp to confirm availability and finalise your booking.
                  </p>
                </div>
              )}

              {/* Route details */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card">
                  <p className="eyebrow">Pickup</p>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {route.pickupInfo}
                  </p>
                </div>
                <div className="card">
                  <p className="eyebrow">Drop-off</p>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {route.dropoffInfo}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="h3">Scheduling</h2>
                <p className="mt-4 text-foreground-muted">{route.scheduling}</p>
              </div>

              {availableServices.length > 0 && (
                <div>
                  <h2 className="h3">Service types on this route</h2>
                  <ul className="mt-4 space-y-2 text-sm">
                    {availableServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover"
                        >
                          <Icon name="arrow-narrow-right" size={14} />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="h3">
                  FAQs about {route.origin} to {route.destination}
                </h2>
                <div className="mt-4">
                  <FAQAccordion
                    items={route.faqs}
                    idPrefix={`route-${route.slug}`}
                  />
                </div>
              </div>

              {/* Cities */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card">
                  <p className="eyebrow">From</p>
                  <p className="mt-2 font-semibold text-foreground">
                    {route.origin}
                  </p>
                  <Link
                    href={`/locations/${originSlug}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover"
                  >
                    <Icon name="map-pin" size={14} />
                    View {route.origin} page
                  </Link>
                </div>
                <div className="card">
                  <p className="eyebrow">To</p>
                  <p className="mt-2 font-semibold text-foreground">
                    {route.destination}
                  </p>
                  <Link
                    href={`/locations/${destinationSlug}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover"
                  >
                    <Icon name="map-pin" size={14} />
                    View {route.destination} page
                  </Link>
                </div>
              </div>

              {relatedRouteObjects.length > 0 && (
                <div>
                  <h2 className="h3">Related routes</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {relatedRouteObjects.map((r) => (
                      <RouteCard key={r.slug} route={r} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="card">
                  <p className="eyebrow">Book this route</p>
                  <div className="mt-3 flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                    <span className="text-sm font-semibold text-foreground">
                      {route.origin}
                    </span>
                    <Icon name="arrow-narrow-right" size={16} className="text-accent" />
                    <span className="text-sm font-semibold text-foreground">
                      {route.destination}
                    </span>
                  </div>
                  {route.pricing && (
                    <div className="mt-3 grid grid-cols-2 gap-2 text-center text-sm">
                      <div className="rounded-lg border border-accent/30 bg-accent-soft px-3 py-2">
                        <p className="font-bold text-accent">{route.pricing.sharing} {route.pricing.currency}</p>
                        <p className="text-xs text-foreground-muted">Sharing</p>
                      </div>
                      <div className="rounded-lg border border-border bg-surface px-3 py-2">
                        <p className="font-bold text-foreground">{route.pricing.private} {route.pricing.currency}</p>
                        <p className="text-xs text-foreground-muted">Private</p>
                      </div>
                    </div>
                  )}
                  <div className="mt-4 flex flex-col gap-2">
                    <a href={telHref()} className="btn btn-primary">
                      <Icon name="phone" size={16} />
                      Call Now
                    </a>
                    <a
                      href={whatsappHref(
                        undefined,
                        `Hi, I'd like to book a car lift from ${route.origin} to ${route.destination}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <Icon name="whatsapp" size={16} />
                      WhatsApp
                    </a>
                    <Link href="/booking" className="btn btn-ghost">
                      <Icon name="calendar-day" size={16} />
                      Booking form
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
