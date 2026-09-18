import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-orange-500">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[42px] lg:leading-[1.05]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}