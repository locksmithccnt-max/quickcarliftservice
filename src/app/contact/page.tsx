import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { buildMetadata } from "@/lib/metadata";
import {
  business,
  mailHref,
  telHref,
  whatsappHref,
} from "@/config/business";

const title = "Contact Us";
const description =
  "Contact Quick Car Lift Service in Abu Dhabi. Call, WhatsApp, or email us to book a car lift across Abu Dhabi, Dubai, Ajman, or Al Ain.";

export const metadata: Metadata = buildMetadata({
  title: `Contact | ${business.name}`,
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <WebPageSchema name={title} description={description} url="/contact" />
      <PageHero
        eyebrow="Contact"
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a href={telHref()} className="card card-hover">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon name="phone" size={22} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                Call
              </h3>
              <p className="mt-1 text-sm text-foreground-muted">
                {business.phone}
              </p>
            </a>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon name="whatsapp" size={22} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                WhatsApp
              </h3>
              <p className="mt-1 text-sm text-foreground-muted">
                {business.whatsapp}
              </p>
            </a>

            <a href={mailHref()} className="card card-hover">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon name="mail" size={22} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                Email
              </h3>
              <p className="mt-1 break-all text-sm text-foreground-muted">
                {business.email}
              </p>
            </a>

            <div className="card">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon name="map-pin" size={22} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                Based in
              </h3>
              <p className="mt-1 text-sm text-foreground-muted">
                {business.basedIn}, {business.address.country}
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="h2">Get in touch</h2>
              <p className="mt-3 text-foreground-muted">
                We&apos;re happy to hear from you — whether you&apos;re booking a
                trip, asking about pricing, or arranging staff transport for
                your business. The quickest way to reach us is by phone or
                WhatsApp.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Icon
                    name="map-pin"
                    size={18}
                    className="mt-0.5 text-accent"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Address
                    </p>
                    <p className="text-sm text-foreground-muted">
                      {business.address.street}, {business.address.city},{" "}
                      {business.address.country}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    name="clock"
                    size={18}
                    className="mt-0.5 text-accent"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Hours
                    </p>
                    <p className="text-sm text-foreground-muted">
                      {business.openingHours}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-foreground">
                Coverage
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                We are based in {business.basedIn} and serve the following
                emirates:
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {business.serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2"
                  >
                    <Icon name="check" size={14} className="text-accent" />
                    <span className="text-foreground">{area}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-foreground-subtle">
                Need transport beyond these areas? Contact us — we may still be
                able to help or refer you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
