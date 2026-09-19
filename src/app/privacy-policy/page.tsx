import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { buildMetadata } from "@/lib/metadata";
import { business } from "@/config/business";

const title = "Privacy Policy";
const description =
  "Privacy policy for Quick Car Lift Service — how we collect, use, and protect your information when you book a car lift or contact us.";

export const metadata: Metadata = buildMetadata({
  title: `Privacy Policy | ${business.name}`,
  description,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <WebPageSchema
        name={title}
        description={description}
        url="/privacy-policy"
      />
      <PageHero
        eyebrow="Legal"
        title={title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl space-y-6 text-foreground-muted">
            <p>
              This privacy policy explains how {business.name} (&quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects the
              personal information you share with us when you enquire about or
              book our car lift and transportation services.
            </p>

            <div>
              <h2 className="h3 text-foreground">Information we collect</h2>
              <p className="mt-3">
                When you contact us or submit a booking enquiry, we may collect
                your name, phone number, email address, pickup and drop-off
                locations, travel dates and times, and any additional details
                you share about your trip. We only collect what we need to
                arrange your ride.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">How we use your information</h2>
              <p className="mt-3">We use your information to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Confirm and coordinate your car lift booking.</li>
                <li>Communicate with you about your trip, changes, or issues.</li>
                <li>
                  Provide monthly plans, invoicing, and corporate transport
                  arrangements where applicable.
                </li>
                <li>Improve our service based on customer feedback.</li>
              </ul>
            </div>

            <div>
              <h2 className="h3 text-foreground">Sharing your information</h2>
              <p className="mt-3">
                We do not sell or rent your personal information. We may share
                trip details with the assigned driver so they can complete your
                pickup. If you book on behalf of a company, we may share
                relevant details with the company&apos;s point of contact.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">Data retention</h2>
              <p className="mt-3">
                We retain booking and contact information for as long as
                necessary to provide our service, respond to any follow-up
                queries, and meet legal or accounting obligations.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">Your rights</h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of your
                personal information at any time by contacting us using the
                details on our{" "}
                <a href="/contact" className="text-accent hover:text-accent-hover">
                  contact page
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">Cookies</h2>
              <p className="mt-3">
                This website may use minimal cookies for functionality and
                analytics. You can disable cookies in your browser settings.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">Changes to this policy</h2>
              <p className="mt-3">
                We may update this privacy policy from time to time. The
                current version will always be available on this page.
              </p>
            </div>

            <div>
              <h2 className="h3 text-foreground">Contact</h2>
              <p className="mt-3">
                If you have questions about this policy or how we handle your
                information, please contact us using the details on our{" "}
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
