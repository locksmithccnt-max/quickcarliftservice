import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { buildMetadata } from "@/lib/metadata";
import { business } from "@/config/business";

const title = "Terms and Conditions";
const description =
  "Terms and conditions for using the services of Quick Car Lift Service — booking, cancellation, payment, and liability terms.";

export const metadata: Metadata = buildMetadata({
  title: `Terms & Conditions | ${business.name}`,
  description,
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <WebPageSchema
        name={title}
        description={description}
        url="/terms-and-conditions"
      />
      <PageHero
        eyebrow="Legal"
        title={title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl space-y-6 text-foreground-muted">
            <p>
              These terms and conditions apply to all bookings and use of the
              car lift and transportation services provided by {business.name}.
              By booking a service with us, you agree to these terms.
            </p>

            <div>
              <h2 className="h3 text-foreground">1. Bookings</h2>
              <p className="mt-3">
                Bookings can be made by phone, WhatsApp, or via our website
                booking form. A booking is confirmed only when we reply to
                acknowledge the trip details, pickup point, and fare.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">2. Pricing and payment</h2>
              <p className="mt-3">
                Fares are quoted per trip or, for monthly plans, as a fixed
                monthly rate. Payment terms are shared at the time of booking.
                For corporate and monthly plans, invoicing terms will be
                agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">3. Cancellations and changes</h2>
              <p className="mt-3">
                Please let us know as early as possible if you need to cancel
                or reschedule a trip. Last-minute cancellations may not be
                refundable depending on the situation. Monthly plans may have
                specific notice periods, which we will share when you sign up.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">4. Passenger conduct</h2>
              <p className="mt-3">
                Passengers are expected to be at the agreed pickup point at
                the agreed time. Smoking, alcohol consumption, and disruptive
                behaviour are not allowed inside our vehicles.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">5. Delays and disruptions</h2>
              <p className="mt-3">
                We do our best to keep every trip on time. However, we cannot
                guarantee arrival times in the case of traffic, weather,
                accidents, or other events outside our control.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">6. Luggage and personal items</h2>
              <p className="mt-3">
                Please share luggage details at booking so we can allocate a
                suitable vehicle. We are not responsible for personal items
                left in the vehicle after a trip, though we will do our best
                to help you recover them.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">7. Liability</h2>
              <p className="mt-3">
                Our liability is limited to the value of the trip fare in the
                event of a service failure directly caused by us. We are not
                liable for indirect losses, missed connections, or other
                consequential damages arising from a trip.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">8. Governing law</h2>
              <p className="mt-3">
                These terms are governed by the laws of the United Arab
                Emirates. Any dispute will be resolved in the courts of Abu
                Dhabi.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">9. Contact</h2>
              <p className="mt-3">
                For any questions about these terms, please reach out via our{" "}
                <a href="/contact" className="text-accent hover:text-accent-hover">
                  contact page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
