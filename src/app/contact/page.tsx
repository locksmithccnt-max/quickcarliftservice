import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
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

const contactMethods = [
  {
    label: "Call",
    value: business.phone,
    href: telHref(),
    icon: "phone" as const,
    note: "Fastest response",
  },
  {
    label: "WhatsApp",
    value: business.phone,
    href: whatsappHref(undefined, "Hi, I'd like to enquire about a car lift."),
    icon: "whatsapp" as const,
    note: "Message anytime",
    external: true,
  },
  {
    label: "Email",
    value: business.email,
    href: mailHref(),
    icon: "mail" as const,
    note: "Non-urgent enquiries",
  },
  {
    label: "Based in",
    value: `${business.basedIn}, ${business.address.country}`,
    href: null,
    icon: "map-pin" as const,
    note: `Serving ${business.serviceAreas.join(", ")}`,
  },
];

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

      {/* Contact method cards */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((m) => {
              const inner = (
                <>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon name={m.icon} size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {m.label}
                  </h3>
                  <p className="mt-1 break-all text-sm text-foreground-muted">
                    {m.value}
                  </p>
                  {m.note && (
                    <p className="mt-1 text-xs text-accent">{m.note}</p>
                  )}
                </>
              );
              return m.href ? (
                <a
                  key={m.label}
                  href={m.href}
                  {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card card-hover"
                >
                  {inner}
                </a>
              ) : (
                <div key={m.label} className="card">
                  {inner}
                </div>
              );
            })}
          </div>

          {/* Social profiles */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <p className="text-sm font-semibold text-foreground">Follow us:</p>
            <a
              href={business.socialProfiles.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent"
            >
              <Icon name="facebook" size={16} />
              Facebook
            </a>
            <a
              href={business.socialProfiles.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent"
            >
              <Icon name="instagram" size={16} />
              Instagram
            </a>
            <a
              href={business.socialProfiles.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent"
            >
              <Icon name="tiktok" size={16} />
              TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Info + coverage */}
      <section className="section bg-background-soft">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="h2">Get in touch</h2>
              <p className="mt-3 text-foreground-muted">
                We&apos;re happy to hear from you — whether you&apos;re booking
                a trip, asking about pricing, or arranging staff transport for
                your business. The quickest way to reach us is by phone or
                WhatsApp.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="phone" size={18} className="mt-0.5 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone &amp; WhatsApp</p>
                    <a
                      href={telHref()}
                      className="text-sm text-foreground-muted hover:text-accent"
                    >
                      {business.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="mail" size={18} className="mt-0.5 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <a
                      href={mailHref()}
                      className="text-sm text-foreground-muted hover:text-accent"
                    >
                      {business.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="map-pin" size={18} className="mt-0.5 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Location</p>
                    <p className="text-sm text-foreground-muted">
                      {business.basedIn}, {business.address.country}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-foreground">Coverage</h3>
              <p className="mt-2 text-sm text-foreground-muted">
                Based in {business.basedIn}, serving:
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
                able to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to book your ride?"
        description="Call or WhatsApp us — we confirm your seat and driver the same day."
      />
    </>
  );
}
