import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import type { Service } from "@/data/services";

const iconMap: Record<string, IconName> = {
  "calendar-day": "calendar-day",
  "calendar-month": "calendar-month",
  "building-office": "building-office",
  users: "users",
  user: "user",
  route: "route",
};

export default function ServiceCard({ service }: { service: Service }) {
  const iconName: IconName = iconMap[service.icon] ?? "car";
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card card-hover group flex h-full flex-col"
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon name={iconName} size={22} />
      </div>
      <h3 className="text-lg font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-foreground-muted">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Learn more
        <Icon
          name="arrow-narrow-right"
          size={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
