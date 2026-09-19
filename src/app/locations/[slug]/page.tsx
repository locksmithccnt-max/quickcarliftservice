import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import RouteCard from "@/components/RouteCard";
import ServiceCard from "@/components/ServiceCard";
import FAQSchema from "@/components/seo/FAQSchema";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { getLocationBySlug, getLocationSlugs } from "@/data/locations";
import { services } from "@/data/services";
import { routes } from "@/data/routes";
import { buildMetadata } from "@/lib/metadata";
import { business, telHref, whatsappHref } from "@/config/business";

type Params = { slug: string };

export function generateStaticParams() {
  return getLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.metadata.title,
    description: location.metadata.description,
    path: `/locations/${location.slug}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return notFound();

  const availableServices = location.services
    .map((s) => services.find((sv) => sv.slug === s))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const availableRoutes = location.routes
    .map((r) => routes.find((rt) => rt.slug === r))
    .filter((r): r is (typeof routes)[number] => Boolean(r));

  const availabilityNote = location.isBase
    ? `Based in ${location.city}. We operate our full service directly from here.`
    : `Based in ${business.basedIn}. We serve ${location.city} primarily through inter-emirate routes and dedicated pickup coordination.`;

  return (
    <>
      <WebPageSchema
        name={location.metadata.title}
        description={location.metadata.description}
        url={`/locations/${location.slug}`}
      />
      <FAQSchema items={location.faqs} />

      <PageHero
        eyebrow="Location"
        title={`Car Lift Service in ${location.city}`}
        description={location.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: location.city },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <div className="card">
                <p className="eyebrow">Service availability</p>
                <p className="mt-2 text-foreground-muted">{availabilityNote}</p>
              </div>

              <div>
                <h2 className="h3">
                  Neighbourhoods we serve in {location.city}
                </h2>
                <p className="mt-3 text-sm text-foreground-muted">
                  We coordinate pickup and drop-off in most main residential
                  and business districts, including:
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {location.neighborhoods.map((n) => (
                    <li
                      key={n}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground-muted"
                    >
                      <Icon name="map-pin" size={12} />
                      {n}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-foreground-subtle">
                  Don&apos;t see your area? Contact us — we may still be able to
                  arrange your pickup.
                </p>
              </div>

              {availableServices.length > 0 && (
                <div>
                  <h2 className="h3">
                    Services available in {location.city}
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {availableServices.map((service) => (
                      <ServiceCard key={service.slug} service={service} />
                    ))}
                  </div>
                </div>
              )}

              {availableRoutes.length > 0 && (
                <div>
                  <h2 className="h3">
                    Common routes from and to {location.city}
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {availableRoutes.map((route) => (
                      <RouteCard key={route.slug} route={route} />
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h2 className="h3">FAQs about {location.city}</h2>
                <div className="mt-4">
                  <FAQAccordion
                    items={location.faqs}
                    idPrefix={`loc-${location.slug}`}
                  />
                </div>
              </div>
            </div>

            <aside>
              <div className="sticky top-24 space-y-4">
                <div className="relative overflow-hidden rounded-xl border border-accent/25 bg-gradient-to-br from-accent/10 via-surface to-surface p-5">
                  <div className="glow-accent -right-10 -top-10 h-40 w-40" />
                  <p className="eyebrow">Get a ride in {location.city}</p>
                  <p className="mt-2 text-sm text-foreground-muted">
                    Call, message, or send an enquiry.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <a href={telHref()} className="btn btn-primary">
                      <Icon name="phone" size={16} />
                      Call Now
                    </a>
                    <a
                      href={whatsappHref()}
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

                <div className="card">
                  <p className="eyebrow">Other locations</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {business.serviceAreas
                      .filter((a) => a !== location.city)
                      .map((area) => {
                        const slugForCity = area
                          .toLowerCase()
                          .replace(/\s+/g, "-");
                        return (
                          <li key={area}>
                            <Link
                              href={`/locations/${slugForCity}`}
                              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover"
                            >
                              <Icon name="map-pin" size={14} />
                              {area}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
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
