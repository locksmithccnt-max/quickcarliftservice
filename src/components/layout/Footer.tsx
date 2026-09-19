import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import {
  business,
  mailHref,
  telHref,
  whatsappHref,
} from "@/config/business";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/routes", label: "Routes" },
  { href: "/fleet", label: "Fleet" },
  { href: "/faq", label: "FAQ" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/daily-car-lift", label: "Daily Car Lift" },
  { href: "/services/monthly-car-lift", label: "Monthly Car Lift" },
  { href: "/services/office-transportation", label: "Office Transportation" },
  {
    href: "/services/employee-transportation",
    label: "Employee Transportation",
  },
  { href: "/services/private-car-lift", label: "Private Car Lift" },
  {
    href: "/services/city-to-city-transportation",
    label: "City-to-City Transportation",
  },
];

const locationLinks = [
  { href: "/locations/abu-dhabi", label: "Abu Dhabi" },
  { href: "/locations/dubai", label: "Dubai" },
  { href: "/locations/ajman", label: "Ajman" },
  { href: "/locations/al-ain", label: "Al Ain" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-background-soft">
      <div className="container-page py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" aria-label={business.name}>
              <Image
                src="/logo.webp"
                alt={business.name}
                width={1376}
                height={768}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-foreground-muted">
              {business.description}
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={telHref()}
                className="flex items-center gap-2 text-foreground-muted hover:text-foreground"
              >
                <Icon name="phone" size={16} />
                <span>{business.phone}</span>
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground-muted hover:text-foreground"
              >
                <Icon name="whatsapp" size={16} />
                <span>{business.phone}</span>
              </a>
              <a
                href={mailHref()}
                className="flex items-center gap-2 text-foreground-muted hover:text-foreground"
              >
                <Icon name="mail" size={16} />
                <span>{business.email}</span>
              </a>
              <div className="flex items-start gap-2 text-foreground-muted">
                <Icon name="map-pin" size={16} className="mt-0.5" />
                <span>
                  {business.address.street.startsWith("[")
                    ? `${business.address.city}, ${business.address.country}`
                    : `${business.address.street}, ${business.address.city}, ${business.address.country}`}
                </span>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={business.socialProfiles.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon name="facebook" size={17} />
              </a>
              <a
                href={business.socialProfiles.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon name="instagram" size={17} />
              </a>
              <a
                href={business.socialProfiles.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon name="tiktok" size={17} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Service Areas
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {locationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-foreground-subtle">
              Based in {business.basedIn}. Serving {" "}
              {business.serviceAreas.join(", ")}.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-foreground-muted sm:flex-row sm:items-center">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-foreground"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
