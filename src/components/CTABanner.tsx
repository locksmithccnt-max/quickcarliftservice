import Link from "next/link";
import Icon from "@/components/Icon";
import { telHref, whatsappHref } from "@/config/business";

type Props = {
  title?: string;
  description?: string;
  showBooking?: boolean;
};

export default function CTABanner({
  title = "Ready to book your ride?",
  description = "Call us, message us on WhatsApp, or send a booking enquiry. We'll confirm your seat and driver.",
  showBooking = true,
}: Props) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-xl border border-accent/25 bg-gradient-to-br from-accent/10 via-surface to-surface p-8 sm:p-10 lg:p-12">
          <div className="glow-accent -right-16 -top-16 h-56 w-56 bg-accent/15" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="h2">{title}</h2>
              <p className="mt-3 text-foreground-muted">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href={telHref()} className="btn btn-outline">
                <Icon name="phone" size={18} />
                Call Now
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Icon name="whatsapp" size={18} />
                WhatsApp
              </a>
              {showBooking && (
                <Link href="/booking" className="btn btn-ghost">
                  <Icon name="calendar-day" size={18} />
                  Book a Ride
                </Link>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
