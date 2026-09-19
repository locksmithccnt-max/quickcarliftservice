import Link from "next/link";
import type { Metadata } from "next";
import Icon from "@/components/Icon";
import ServiceCard from "@/components/ServiceCard";
import LocationCard from "@/components/LocationCard";
import RouteCard from "@/components/RouteCard";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";
import FAQSchema from "@/components/seo/FAQSchema";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { routes } from "@/data/routes";
import { globalFaqs } from "@/data/faqs";
import { business, telHref, whatsappHref, SITE_URL } from "@/config/business";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${business.name} | ${business.tagline}`,
  description: business.description,
  path: "/",
});

const whyChooseUs = [
  {
    title: "On-time service",
    description:
      "We plan pickups around your arrival time so you're not left waiting or running late.",
    icon: "clock" as const,
  },
  {
    title: "Professional drivers",
    description:
      "Courteous, licensed drivers who know Abu Dhabi, Dubai, Ajman, and Al Ain well.",
    icon: "shield" as const,
  },
  {
    title: "City-to-city coverage",
    description:
      "Direct inter-emirate routes with regular commuter and one-off trip options.",
    icon: "route" as const,
  },
  {
    title: "Easy booking",
    description:
      "Book by call, WhatsApp, or online form. We reply with a fare and pickup plan.",
    icon: "sparkles" as const,
  },
  {
    title: "Flexible scheduling",
    description:
      "Single trips, monthly commutes, and shift-based staff transport plans.",
    icon: "calendar-month" as const,
  },
  {
    title: "Transparent pricing",
    description:
      "Fixed monthly rates for commutes and clear per-trip pricing for one-off rides.",
    icon: "check" as const,
  },
];

const steps = [
  {
    title: "Book",
    description:
      "Share your pickup, drop-off, date, and time by call, WhatsApp, or our form.",
  },
  {
    title: "Confirm",
    description:
      "We confirm your seat, share the fare, and coordinate the driver details.",
  },
  {
    title: "Ride",
    description:
      "Meet the driver at the agreed pickup point and travel on time to your destination.",
  },
];

const popularRouteSlugs = [
  "abu-dhabi-to-dubai",
  "dubai-to-abu-dhabi",
  "ajman-to-abu-dhabi",
  "al-ain-to-abu-dhabi",
];

export default function HomePage() {
  const homeFaqs = globalFaqs.slice(0, 6);
  const popularRoutes = popularRouteSlugs
    .map((slug) => routes.find((r) => r.slug === slug))
    .filter((r): r is (typeof routes)[number] => Boolean(r));

  return (
    <>
      <WebPageSchema
        name={`${business.name} | ${business.tagline}`}
        description={business.description}
        url="/"
      />
      <FAQSchema items={homeFaqs} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background glows */}
        <div className="glow-accent -left-32 -top-32 h-[500px] w-[500px]" />
        <div className="glow-accent bottom-0 right-0 h-64 w-64 bg-accent/5" />
        <div className="container-page relative py-16 sm:py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">
                Based in {business.basedIn} &middot; Serving the UAE
              </p>
              <h1 className="h1 mt-3">
                Reliable{" "}
                <span className="text-accent">car lift &amp; transportation</span>{" "}
                across Abu Dhabi, Dubai, Ajman &amp; Al Ain
              </h1>
              <p className="mt-5 text-base text-foreground-muted sm:text-lg">
                {business.description}
              </p>
              {/* Pricing callout */}
              <div className="mt-6 inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-full border border-accent/30 bg-accent-soft px-4 py-2 text-sm">
                <Icon name="car" size={15} className="text-accent" />
                <span className="text-foreground-muted">Dubai ↔ Abu Dhabi:</span>
                <span className="font-bold text-accent">100 AED sharing</span>
                <span className="text-foreground-subtle">·</span>
                <span className="font-semibold text-foreground">160 AED private</span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={telHref()} className="btn btn-primary">
                  <Icon name="phone" size={18} />
                  Call Now
                </a>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Icon name="whatsapp" size={18} />
                  WhatsApp
                </a>
                <Link href="/booking" className="btn btn-ghost">
                  <Icon name="calendar-day" size={18} />
                  Book a Ride
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {business.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground-muted"
                  >
                    <Icon name="map-pin" size={12} />
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-xl border border-accent/25 bg-surface p-8">
                <div className="glow-accent -right-10 -top-10 h-40 w-40 bg-accent/15" />
                <div className="relative">
                  <p className="eyebrow">Price guide</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    Dubai ↔ Abu Dhabi
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-accent/30 bg-accent-soft p-4 text-center">
                      <p className="text-2xl font-bold text-accent">
                        100 <span className="text-sm font-semibold">AED</span>
                      </p>
                      <p className="mt-1 text-xs font-medium text-foreground-muted">
                        Sharing seat
                      </p>
                      <p className="text-xs text-foreground-subtle">per person, one way</p>
                    </div>
                    <div className="rounded-lg border border-border bg-background-soft p-4 text-center">
                      <p className="text-2xl font-bold text-foreground">
                        160 <span className="text-sm font-semibold text-foreground-muted">AED</span>
                      </p>
                      <p className="mt-1 text-xs font-medium text-foreground-muted">
                        Private car
                      </p>
                      <p className="text-xs text-foreground-subtle">whole vehicle, one way</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-2">
                    <a href={telHref()} className="btn btn-primary w-full justify-center">
                      <Icon name="phone" size={16} />
                      Call to Book
                    </a>
                    <a
                      href={whatsappHref(undefined, "Hi, I'd like to book a car lift.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline w-full justify-center"
                    >
                      <Icon name="whatsapp" size={16} />
                      WhatsApp
                    </a>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-foreground-muted">
                    {["Daily trips", "Monthly plans", "Private hire", "4 cities"].map((t) => (
                      <div key={t} className="flex items-center gap-1.5">
                        <Icon name="check" size={12} className="text-accent" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 border-t border-border pt-3 text-xs text-foreground-subtle">
                    Other routes available — call to confirm pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-b border-border bg-background-soft">
        <div className="container-page py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center gap-2 text-foreground-muted">
              <Icon name="map-pin" size={14} className="text-accent" />
              <span>Based in <strong className="text-foreground">Abu Dhabi</strong></span>
            </div>
            <span className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-foreground-muted">
              <Icon name="car" size={14} className="text-accent" />
              <span>Sharing from <strong className="text-foreground">100 AED</strong></span>
            </div>
            <span className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-foreground-muted">
              <Icon name="route" size={14} className="text-accent" />
              <span><strong className="text-foreground">4 emirates</strong> covered</span>
            </div>
            <span className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-foreground-muted">
              <Icon name="phone" size={14} className="text-accent" />
              <span>Book by <strong className="text-foreground">call or WhatsApp</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our services"
            title="Car lift & transportation, tailored to how you travel"
            description="From single-trip daily rides to monthly commutes and corporate staff transport, choose the plan that fits your needs."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-background-soft">
        <div className="container-page">
          <SectionHeader
            eyebrow="How it works"
            title="Book, confirm, ride"
            description="A simple three-step process from your first message to arriving at your destination."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="card">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent-soft text-sm font-semibold text-accent">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Service areas"
            title="Where we operate"
            description="Based in Abu Dhabi, serving Abu Dhabi, Dubai, Ajman, and Al Ain."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <LocationCard key={loc.slug} location={loc} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-background-soft">
        <div className="container-page">
          <SectionHeader
            eyebrow="Why choose us"
            title="What you can expect from every ride"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon name={item.icon} size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Popular routes"
            title="Inter-emirate trips people book most often"
            description="See a route below? We run it daily. Not sure? Just ask."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {popularRoutes.map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/routes"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
            >
              View all routes
              <Icon name="arrow-narrow-right" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-background-soft">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <SectionHeader
                eyebrow="FAQs"
                title="Common questions, quick answers"
                description="Don't see your question? Contact us anytime."
              />
              <div className="mt-6">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
                >
                  See all FAQs
                  <Icon name="arrow-narrow-right" size={16} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={homeFaqs} idPrefix="home-faq" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
