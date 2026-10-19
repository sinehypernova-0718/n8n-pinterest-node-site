"use client";
import { useEffect, useRef, useState } from "react";
import { ReleaseTimelineLine } from "./ReleaseTimelineLine";
import { ReleaseMilestone } from "./ReleaseMilestone";
import { GlassCard } from "@/components/glass/GlassCard";
import type { Release } from "@/lib/release-schema";
import { cn, prefersReducedMotion } from "@/lib/utils";

interface ReleaseJourneyProps { releases: Release[]; className?: string; }

export function ReleaseJourney({ releases, className }: ReleaseJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const reducedMotion = prefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) { setProgress(1); return; }
    if (!containerRef.current) return;
    const updateProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight * 0.5)));
      setProgress(scrollProgress);
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [reducedMotion]);

  if (releases.length === 0) {
    return (
      <div className="text-center py-16">
        <GlassCard variant="default" className="p-8 max-w-md mx-auto">
          <p className="text-text-secondary">No releases available yet.</p>
        </GlassCard>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <ReleaseTimelineLine progress={progress} releaseCount={releases.length} />
      <div className="relative z-10 space-y-12 md:space-y-20">
        {releases.map((release, index) => {
          const releaseProgress = releases.length === 1
            ? 1
            : Math.min(1, Math.max(0, progress * releases.length - index));
          return (
            <ReleaseMilestone
              key={release.version}
              release={release}
              index={index}
              totalReleases={releases.length}
              progress={releaseProgress}
            />
          );
        })}
      </div>
    </div>
  );
}
