import { cn } from "@/lib/utils";

interface ReleaseProgressIndicatorProps { active: boolean; featured?: boolean; className?: string; }

export function ReleaseProgressIndicator({ active, featured, className }: ReleaseProgressIndicatorProps) {
  return (
    <div className={cn("relative", className)}>
      <div className={cn(
        "w-4 h-4 rounded-full transition-all duration-500",
        active
          ? featured
            ? "bg-accent-cool ring-4 ring-accent-cool/20"
            : "bg-accent-cool ring-2 ring-accent-cool/30"
          : "bg-background-elevated border-2 border-border-subtle"
      )} />
      {active && (
        <div className={cn(
          "absolute inset-0 rounded-full blur-lg transition-opacity duration-500",
          featured ? "bg-accent-cool/50" : "bg-accent-cool/30"
        )} />
      )}
    </div>
  );
}
