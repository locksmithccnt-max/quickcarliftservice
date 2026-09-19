type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h2 mt-2">{title}</h2>
      {description && (
        <p className="mt-3 text-foreground-muted">{description}</p>
      )}
    </div>
  );
}
