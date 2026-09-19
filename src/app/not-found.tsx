import Link from "next/link";
import Icon from "@/components/Icon";
import { telHref, whatsappHref } from "@/config/business";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden section flex items-center">
      <div className="glow-accent -left-32 top-0 h-72 w-72" />
      <div className="glow-accent -right-32 bottom-0 h-72 w-72" />
      <div className="container-page relative">
        <div className="mx-auto max-w-xl text-center">
          <p className="inline-flex items-center justify-center rounded-full border border-accent/30 bg-accent-soft px-4 py-1.5 text-sm font-semibold text-accent">
            404
          </p>
          <h1 className="h1 mt-4">This page wandered off the route</h1>
          <p className="mt-4 text-foreground-muted">
            The page you were looking for doesn&apos;t exist or may have moved.
            Head back home or explore our services.
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
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-foreground-muted">
            <a
              href={telHref()}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Icon name="phone" size={14} />
              Call us
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
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
