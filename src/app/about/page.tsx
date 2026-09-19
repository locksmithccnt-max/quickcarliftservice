import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { buildMetadata } from "@/lib/metadata";
import { business, mailHref, telHref, whatsappHref } from "@/config/business";

const title = "About Quick Car Lift Service";
const description =
  "Meet Fawad Shakeel, founder of Quick Car Lift Service — Abu Dhabi's trusted car lift and inter-emirate transportation provider serving Abu Dhabi, Dubai, Ajman, and Al Ain.";

export const metadata: Metadata = buildMetadata({
  title: `About Us | ${business.name}`,
  description,
  path: "/about",
});

const values = [
  {
    title: "Reliability first",
    description:
      "Our whole service is built around one promise: we show up when we say we will.",
    icon: "clock" as const,
  },
  {
    title: "Local know-how",
    description:
      "We work every day in Abu Dhabi, Dubai, Ajman, and Al Ain — we know the routes, the timings, and the pickup points.",
    icon: "map-pin" as const,
  },
  {
    title: "Fair, transparent pricing",
    description:
      "You get a clear per-trip fare or fixed monthly rate. No hidden charges, no surprises.",
    icon: "check" as const,
  },
  {
    title: "Human support",
    description:
      "Talk to a real person by phone or WhatsApp when you need to change or confirm a trip.",
    icon: "users" as const,
  },
];

const expertise = [
  "Inter-emirate routes — Abu Dhabi ↔ Dubai, Ajman, Al Ain",
  "Daily and monthly commuter plans",
  "Corporate and employee transportation",
  "Private car hire for families and professionals",
  "Flexible scheduling around shift timings and office hours",
];

export default function AboutPage() {
  return (
    <>
      <WebPageSchema name={title} description={description} url="/about" />
      <PageHero
        eyebrow="About us"
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Owner / E-E-A-T section */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3 items-start">
            {/* Owner card */}
            <div className="card flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Photo with initials fallback */}
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-accent/40 bg-accent-soft">
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-accent select-none">
                  FS
                </span>
                <Image
                  src={business.owner.photo}
                  alt={`${business.owner.name} — ${business.owner.title}, ${business.name}`}
                  fill
                  className="object-cover"
                  sizes="112px"
                  priority
                />
              </div>
              <h2 className="mt-4 text-xl font-bold text-foreground">
                {business.owner.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-accent">
                {business.owner.title}
              </p>
              <p className="mt-3 text-sm text-foreground-muted">
                {business.name}
              </p>
              <div className="mt-4 flex flex-col gap-2 w-full">
                <a
                  href={telHref()}
                  className="btn btn-primary btn-sm w-full justify-center"
                >
                  <Icon name="phone" size={15} />
                  Call Fawad
                </a>
                <a
                  href={whatsappHref(undefined, "Hi Fawad, I'd like to enquire about car lift services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm w-full justify-center"
                >
                  <Icon name="whatsapp" size={15} />
                  WhatsApp
                </a>
                <a
                  href={mailHref(business.owner.email)}
                  className="btn btn-ghost btn-sm w-full justify-center text-foreground-muted"
                >
                  <Icon name="mail" size={15} />
                  {business.owner.email}
                </a>
              </div>
            </div>

            {/* Bio — E-E-A-T: Experience, Expertise, Authoritativeness, Trust */}
            <div className="lg:col-span-2 space-y-5 text-foreground-muted">
              <p>
                I&apos;m Fawad Shakeel, the founder and owner of{" "}
                {business.name}. I started this service because I saw a real
                gap in the UAE commuter market: thousands of people making the
                same daily trip — Abu Dhabi to Dubai, Al Ain to Abu Dhabi,
                Ajman to the capital — with no reliable, fairly priced option
                between public buses and expensive taxis.
              </p>
              <p>
                What began as a handful of regular commuters has grown into a
                structured car lift and transportation service with daily routes,
                monthly plans, corporate accounts, and private hire across four
                emirates. Every booking still comes through me directly — you
                call or WhatsApp my number, I confirm your seat, and I
                personally make sure the driver knows your pickup time and
                location.
              </p>
              <p>
                I know these routes because I run them. I know which pickup
                points in Khalifa City save 20 minutes in morning traffic. I
                know what time you need to leave Al Ain to reach Abu Dhabi City
                before 8 AM. This is not a platform — it&apos;s a service built
                on that direct, personal knowledge.
              </p>

              <div className="rounded-xl border border-border bg-background-soft p-5">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Areas of expertise
                </p>
                <ul className="space-y-2 text-sm">
                  {expertise.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Icon
                        name="check"
                        size={15}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm">
                Have a question about routes, pricing, or how a monthly plan
                works?{" "}
                <Link
                  href="/contact"
                  className="text-accent hover:text-accent-hover font-medium"
                >
                  Contact me directly
                </Link>{" "}
                — I respond to every message personally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* At-a-glance + company overview */}
      <section className="section bg-background-soft">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-5 text-foreground-muted">
              <h2 className="h2 text-foreground">The service</h2>
              <p>
                {business.name} is based in {business.basedIn} and runs direct
                inter-emirate routes every day. We connect residents,
                professionals, and businesses across Abu Dhabi, Dubai, Ajman,
                and Al Ain with reliable, scheduled rides — whether that&apos;s
                a one-off trip or a fixed monthly commute.
              </p>
              <p>
                Our focus is practical: get you where you&apos;re going, on
                time, without the uncertainty of ride-hailing apps or the cost
                of a dedicated taxi. Monthly plans give commuters a reserved
                seat at a fixed rate. Private trips give families and
                professionals a direct, non-shared vehicle. Corporate packages
                give HR teams a single point of contact for all staff
                transport.
              </p>
            </div>
            <aside className="card">
              <p className="eyebrow">At a glance</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Icon name="map-pin" size={16} className="mt-0.5 text-accent" />
                  <span>
                    <strong className="text-foreground">Based in:</strong>{" "}
                    <span className="text-foreground-muted">
                      {business.basedIn}
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="route" size={16} className="mt-0.5 text-accent" />
                  <span>
                    <strong className="text-foreground">Serving:</strong>{" "}
                    <span className="text-foreground-muted">
                      {business.serviceAreas.join(", ")}
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="car" size={16} className="mt-0.5 text-accent" />
                  <span>
                    <strong className="text-foreground">Services:</strong>{" "}
                    <span className="text-foreground-muted">
                      Daily, monthly, private, and corporate transport
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="users" size={16} className="mt-0.5 text-accent" />
                  <span>
                    <strong className="text-foreground">Owner:</strong>{" "}
                    <span className="text-foreground-muted">
                      {business.owner.name}
                    </span>
                  </span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-page">
          <h2 className="h2">What we stand for</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon name={v.icon} size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to book or have a question?"
        description="Call or WhatsApp Fawad directly — every enquiry is handled personally."
      />
    </>
  );
}
