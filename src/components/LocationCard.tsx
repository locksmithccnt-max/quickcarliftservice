import Link from "next/link";
import Icon from "@/components/Icon";
import type { Location } from "@/data/locations";

export default function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="card card-hover group flex h-full flex-col"
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon name="map-pin" size={22} />
      </div>
      <h3 className="text-lg font-semibold text-foreground">
        Car Lift in {location.city}
      </h3>
      {location.isBase && (
        <span className="mt-1 inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
          Home base
        </span>
      )}
      <p className="mt-2 flex-1 text-sm text-foreground-muted line-clamp-3">
        {location.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        View {location.city}
        <Icon
          name="arrow-narrow-right"
          size={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
