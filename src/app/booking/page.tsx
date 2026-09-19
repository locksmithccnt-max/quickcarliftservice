import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { buildMetadata } from "@/lib/metadata";
import { business, telHref, whatsappHref } from "@/config/business";

const title = "Book a Car Lift";
const description =
  "Book a car lift or transportation trip across Abu Dhabi, Dubai, Ajman, or Al Ain. Share your pickup, drop-off, and time — we'll confirm your ride.";

export const metadata: Metadata = buildMetadata({
  title: `Book a Ride | ${business.name}`,
  description,
  path: "/booking",
});

export default function BookingPage() {
  return (
    <>
      <WebPageSchema name={title} description={description} url="/booking" />
      <PageHero
        eyebrow="Booking"
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Booking" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="h3">Booking enquiry</h2>
                <p className="mt-2 text-sm text-foreground-muted">
                  Fill in the form and we&apos;ll reply with confirmation, fare,
                  and driver details.
                </p>
                <div className="mt-6">
                  <BookingForm />
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="card">
                <p className="eyebrow">Prefer to speak with us?</p>
                <p className="mt-2 text-sm text-foreground-muted">
                  For urgent trips, call or message us directly.
                </p>
                <div className="mt-4 space-y-2">
                  <a href={telHref()} className="btn btn-primary w-full">
                    <Icon name="phone" size={18} />
                    Call {business.phone}
                  </a>
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full"
                  >
                    <Icon name="whatsapp" size={18} />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="card">
                <p className="eyebrow">What happens next</p>
                <ol className="mt-4 space-y-3 text-sm text-foreground-muted">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-soft text-xs font-semibold text-accent">
                      1
                    </span>
                    <span>We review your enquiry and check availability.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-soft text-xs font-semibold text-accent">
                      2
                    </span>
                    <span>
                      We reply with the fare, pickup plan, and driver details.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-soft text-xs font-semibold text-accent">
                      3
                    </span>
                    <span>
                      You confirm and travel on time to your destination.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="card">
                <p className="eyebrow">Coverage</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
                  {business.serviceAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <Icon
                        name="map-pin"
                        size={14}
                        className="text-accent"
                      />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
