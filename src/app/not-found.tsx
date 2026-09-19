import Link from "next/link";
import Icon from "@/components/Icon";
import { telHref, whatsappHref } from "@/config/business";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">404</p>
          <h1 className="h1 mt-3">This page wandered off the route</h1>
          <p className="mt-4 text-foreground-muted">
            The page you were looking for doesn&apos;t exist or may have moved.
            Try heading back to the homepage or explore our services.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              <Icon name="arrow-narrow-right" size={18} />
              Back to home
            </Link>
            <Link href="/services" className="btn btn-outline">
              View services
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-foreground-muted">
            <a
              href={telHref()}
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <Icon name="phone" size={14} />
              Call us
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <Icon name="whatsapp" size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
