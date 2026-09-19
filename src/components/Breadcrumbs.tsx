import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Icon from "@/components/Icon";

export type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: Props) {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="text-xs text-foreground-muted"
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, idx) => {
            const last = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center gap-1.5">
                {item.href && !last ? (
                  <Link
                    href={item.href}
                    className="hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={last ? "page" : undefined}
                    className={last ? "text-foreground" : ""}
                  >
                    {item.label}
                  </span>
                )}
                {!last && (
                  <Icon
                    name="arrow-narrow-right"
                    size={12}
                    className="text-foreground-subtle"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <BreadcrumbSchema items={items} />
    </>
  );
}
