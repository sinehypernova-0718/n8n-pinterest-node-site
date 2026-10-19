"use client";
import { cn } from "@/lib/utils";

interface ReleaseTimelineLineProps { progress: number; releaseCount: number; className?: string; }

export function ReleaseTimelineLine({ progress, className }: ReleaseTimelineLineProps) {
  const clampedProgress = Math.min(1, Math.max(0, progress));
  return (
    <div className={cn("absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-[1px]", className)} aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-border-subtle via-border-subtle to-transparent" />
      <div
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-cool via-accent-warm to-accent-red transition-[height] duration-300 ease-out"
        style={{ height: `${clampedProgress * 100}%` }}
      />
      <div
        className="absolute top-0 left-1/2 w-8 h-8 rounded-full bg-accent-cool/30 blur-xl transition-[top] duration-300 ease-out"
        style={{ top: `${clampedProgress * 100}%`, transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
