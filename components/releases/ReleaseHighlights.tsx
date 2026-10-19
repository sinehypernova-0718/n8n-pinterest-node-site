import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReleaseHighlightsProps { highlights: string[]; featured?: boolean; }

export function ReleaseHighlights({ highlights, featured }: ReleaseHighlightsProps) {
  return (
    <ul className="space-y-3">
      {highlights.map((highlight, index) => (
        <li key={index} className={cn(
          "flex items-start gap-3 text-sm md:text-base transition-all duration-500",
          featured ? "text-text-primary" : "text-text-secondary"
        )}>
          <CheckCircle2 className={cn("h-5 w-5 shrink-0 mt-0.5", featured ? "text-accent-cool" : "text-text-tertiary")} aria-hidden="true" />
          <span className="leading-relaxed">{highlight}</span>
        </li>
      ))}
    </ul>
  );
}
