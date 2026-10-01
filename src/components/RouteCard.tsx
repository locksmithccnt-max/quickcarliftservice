import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import type { Route } from "@/data/routes";

export default function RouteCard({ route }: { route: Route }) {
  return (
    <Link
      href={`/routes/${route.slug}`}
      className="card card-hover group flex h-full flex-col"
    >
      {route.image && (
        <div className="relative -mx-5 -mt-5 mb-5 h-36 overflow-hidden rounded-t-xl">
          <Image
            src={route.image}
            alt={route.imageAlt ?? `${route.origin} to ${route.destination} car lift`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3 text-lg font-semibold text-foreground">
          <span>{route.origin}</span>
          <Icon name="arrow-narrow-right" size={18} className="text-accent" />
          <span>{route.destination}</span>
        </div>
        {route.pricing && (
          <span className="shrink-0 rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
            from {route.pricing.sharing} {route.pricing.currency}
          </span>
        )}
      </div>
      <p className="mt-3 flex-1 text-sm text-foreground-muted line-clamp-3">
        {route.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        View route
        <Icon
          name="arrow-narrow-right"
          size={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
