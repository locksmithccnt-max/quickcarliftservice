import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import BookingForm from "@/components/BookingForm";
import ServiceSchema from "@/components/seo/ServiceSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  getServiceBySlug,
  getServiceSlugs,
  services,
} from "@/data/services";
import { locations } from "@/data/locations";
import { buildMetadata } from "@/lib/metadata";
import { telHref, whatsappHref } from "@/config/business";

type Params = { slug: string };

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metadata.title,
    description: service.metadata.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  const related = service.relatedServices
    .map((s) => services.find((sv) => sv.slug === s))
    .filter((s): s is (typeof services)[number] => Boolean(s));
  const relatedLocations = service.relatedLocations
    .map((l) => locations.find((loc) => loc.slug === l))
    .filter((l): l is (typeof locations)[number] => Boolean(l));

  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.metadata.description}
        url={`/services/${service.slug}`}
      />
      <FAQSchema items={service.faqs} />

      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <div>
                <h2 className="h3">Overview</h2>
                <p className="mt-4 text-foreground-muted">
                  {service.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="h3">Who this service is for</h2>
                <ul className="mt-4 space-y-3">
                  {service.whoIsItFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon
                        name="check"
                        size={18}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="h3">How it works</h2>
                <ol className="mt-4 grid gap-4 sm:grid-cols-3">
                  {service.howItWorks.map((step, i) => (
                    <li key={step.title} className="card">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-accent-soft text-sm font-semibold text-accent">
                        {i + 1}
                      </span>
                      <h3 className="mt-4 text-base font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-foreground-muted">
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="h3">Coverage &amp; availability</h2>
                <p className="mt-4 text-foreground-muted">
                  {service.coverage}
                </p>
              </div>

              <div>
                <h2 className="h3">FAQs about {service.title}</h2>
                <div className="mt-4">
                  <FAQAccordion
                    items={service.faqs}
                    idPrefix={`svc-${service.slug}`}
                  />
                </div>
              </div>

              {(related.length > 0 || relatedLocations.length > 0) && (
                <div className="grid gap-8 sm:grid-cols-2">
                  {related.length > 0 && (
                    <div>
                      <h2 className="h3">Related services</h2>
                      <ul className="mt-4 space-y-2 text-sm">
                        {related.map((r) => (
                          <li key={r.slug}>
                            <Link
                              href={`/services/${r.slug}`}
                              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover"
                            >
                              <Icon name="arrow-narrow-right" size={14} />
                              {r.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {relatedLocations.length > 0 && (
                    <div>
                      <h2 className="h3">Available in</h2>
                      <ul className="mt-4 space-y-2 text-sm">
                        {relatedLocations.map((l) => (
                          <li key={l.slug}>
                            <Link
                              href={`/locations/${l.slug}`}
                              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover"
                            >
                              <Icon name="map-pin" size={14} />
                              {l.city}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="card">
                  <p className="eyebrow">Enquire about this service</p>
                  <p className="mt-2 text-sm text-foreground-muted">
                    Share your trip details and we&apos;ll reply with a fare
                    and pickup plan.
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
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-background-soft">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="h2">Book {service.title}</h2>
            <p className="mt-3 text-foreground-muted">
              Send us the details of your trip and we&apos;ll follow up shortly.
            </p>
            <div className="mt-8 card">
              <BookingForm defaultService={service.slug} />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
