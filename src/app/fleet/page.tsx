import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { buildMetadata } from "@/lib/metadata";
import { business } from "@/config/business";

const title = "Our Fleet";
const description =
  "Comfortable, air-conditioned vehicles for daily car lift, monthly commutes, private trips, and corporate staff transport across the UAE.";

export const metadata: Metadata = buildMetadata({
  title: `Our Fleet | ${business.name}`,
  description,
  path: "/fleet",
});

const vehicleTypes = [
  {
    title: "Sedans",
    description:
      "Comfortable sedans for individual travellers, couples, and small groups. Ideal for daily and private car lift trips.",
    features: [
      "Up to 3 passengers",
      "Air-conditioned",
      "Comfortable long-trip seating",
      "Suitable for city and inter-emirate routes",
    ],
    icon: "car" as const,
  },
  {
    title: "SUVs",
    description:
      "Spacious SUVs for families, group trips, and longer journeys with more luggage.",
    features: [
      "Up to 5-6 passengers",
      "Extra luggage capacity",
      "Comfortable for families",
      "Popular for airport and Al Ain trips",
    ],
    icon: "user" as const,
  },
  {
    title: "Vans & minibuses",
    description:
      "Larger vehicles for corporate staff transport, group trips, and employee pickups.",
    features: [
      "Ideal for staff transport",
      "Multiple pickup points",
      "Consistent driver on regular routes",
      "Suitable for office and site pickups",
    ],
    icon: "users" as const,
  },
];

const standards = [
  {
    title: "Well-maintained vehicles",
    description:
      "All vehicles are kept clean, air-conditioned, and mechanically maintained.",
    icon: "shield" as const,
  },
  {
    title: "Professional drivers",
    description:
      "Licensed drivers familiar with Abu Dhabi, Dubai, Ajman, and Al Ain routes.",
    icon: "user" as const,
  },
  {
    title: "Right-sized for the trip",
    description:
      "We match the vehicle to your group size and luggage, whether solo or a full team.",
    icon: "sparkles" as const,
  },
];

export default function FleetPage() {
  return (
    <>
      <WebPageSchema name={title} description={description} url="/fleet" />
      <PageHero
        eyebrow="Our fleet"
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Fleet" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <h2 className="h2">Vehicle types we operate</h2>
          <p className="mt-3 max-w-2xl text-foreground-muted">
            We tailor the vehicle to the trip. Tell us your group size, luggage,
            and route and we&apos;ll assign the right vehicle from our fleet.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vehicleTypes.map((v) => (
              <div key={v.title} className="card flex h-full flex-col">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon name={v.icon} size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  {v.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Icon
                        name="check"
                        size={16}
                        className="mt-0.5 text-accent"
                      />
                      <span className="text-foreground-muted">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background-soft">
        <div className="container-page">
          <h2 className="h2">Fleet standards</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {standards.map((s) => (
              <div key={s.title} className="card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon name={s.icon} size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a specific vehicle for your trip?"
        description="Tell us your group size and luggage — we'll match you with the right one."
      />
    </>
  );
}
