"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import { telHref, whatsappHref } from "@/config/business";

export default function MobileCTABar() {
  return (
    <div
      role="region"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-3">
        <a
          href={telHref()}
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-foreground hover:bg-surface"
        >
          <Icon name="phone" size={20} />
          Call Now
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 border-x border-border bg-accent py-3 text-xs font-semibold text-background hover:bg-accent-hover"
        >
          <Icon name="whatsapp" size={20} />
          WhatsApp
        </a>
        <Link
          href="/booking"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium text-foreground hover:bg-surface"
        >
          <Icon name="calendar-day" size={20} />
          Book a Ride
        </Link>
      </div>
    </div>
  );
}
