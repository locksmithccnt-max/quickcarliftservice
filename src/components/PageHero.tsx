import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
};

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background-soft">
      <div className="glow-accent -left-20 -top-20 h-64 w-64" />
      <div className="container-page relative py-12 sm:py-16">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {eyebrow && (
          <>
            <p className="eyebrow">{eyebrow}</p>
            <div className="mt-2 h-px w-10 bg-accent/60" />
          </>
        )}
        <h1 className="h1 mt-3 max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-foreground-muted sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
