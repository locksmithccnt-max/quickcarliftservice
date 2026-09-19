import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import FAQSchema from "@/components/seo/FAQSchema";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { buildMetadata } from "@/lib/metadata";
import { globalFaqs } from "@/data/faqs";
import { business } from "@/config/business";

const title = "Frequently Asked Questions";
const description =
  "Answers to common questions about car lift, monthly commutes, corporate transport, and inter-emirate travel with Quick Car Lift Service.";

export const metadata: Metadata = buildMetadata({
  title: `FAQ | ${business.name}`,
  description,
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <WebPageSchema name={title} description={description} url="/faq" />
      <FAQSchema items={globalFaqs} />
      <PageHero
        eyebrow="FAQ"
        title={title}
        description={description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={globalFaqs} idPrefix="faq-page" />
          </div>
        </div>
      </section>

      <CTABanner
        title="Still have a question?"
        description="Reach out — we're happy to help you plan your trip."
      />
    </>
  );
}
