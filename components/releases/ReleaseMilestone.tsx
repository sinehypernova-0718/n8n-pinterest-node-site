"use client";
import { GlassCard } from "@/components/glass/GlassCard";
import { ReleaseHighlights } from "./ReleaseHighlights";
import { ReleaseProgressIndicator } from "./ReleaseProgressIndicator";
import type { Release } from "@/lib/release-schema";
import { formatDate } from "@/lib/utils";
import { Github, ExternalLink, Sparkles, Wrench, Package, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentType } from "react";

interface ReleaseMilestoneProps { release: Release; index: number; totalReleases: number; progress: number; }

const typeIcons: Record<string, ComponentType<{ className?: string }>> = {
  initial: Sparkles, feature: Zap, improvement: Wrench, maintenance: Wrench, security: Wrench, breaking: Package,
};
const typeLabels: Record<string, string> = {
  initial: "Initial Release", feature: "Feature Release", improvement: "Improvement",
  maintenance: "Maintenance", security: "Security", breaking: "Breaking Change",
};

export function ReleaseMilestone({ release, index, progress }: ReleaseMilestoneProps) {
  const isActive = progress > 0.3;
  const isFeatured = release.featured === true;
  const Icon = typeIcons[release.type] || Wrench;

  return (
    <div className={cn("relative transition-all duration-500", isActive ? "opacity-100" : "opacity-60")}>
      <div className={cn(
        "md:grid md:grid-cols-2 md:gap-12 items-center",
        index % 2 === 0 ? "md:pl-16 md:pr-0" : "md:pl-0 md:pr-16 md:[&>div:first-child]:col-start-2"
      )}>
        <ReleaseProgressIndicator
          active={isActive}
          featured={isFeatured}
          className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 z-20"
        />

        <div className="pl-16 md:pl-0">
          <GlassCard
            variant={isFeatured ? "elevated" : "default"}
            spotlight={isFeatured}
            className={cn(
              "p-6 md:p-8 transition-all duration-500",
              isFeatured && isActive && "ring-1 ring-accent-cool/30",
              isFeatured && "md:p-10"
            )}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-cool/10 text-accent-cool">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="mono-label">{typeLabels[release.type]}</div>
                  <div className="text-sm text-text-tertiary">{formatDate(release.date)}</div>
                </div>
              </div>
              {release.status === "prerelease" && (
                <span className="glass-chip text-xs bg-yellow-500/10 text-yellow-400 border-yellow-500/20">Pre-release</span>
              )}
            </div>

            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2 font-display">v{release.version}</h3>
              <h4 className="text-lg md:text-xl text-text-secondary">{release.title}</h4>
            </div>

            <p className="text-text-secondary mb-6 leading-relaxed">{release.summary}</p>

            <ReleaseHighlights highlights={release.highlights} featured={isFeatured} />

            {release.tags && release.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border-subtle">
                {release.tags.map((tag) => (<span key={tag} className="glass-chip">{tag}</span>))}
              </div>
            )}

            <div className="flex flex-wrap gap-3 mt-6">
              {release.githubReleaseUrl && (
                <a href={release.githubReleaseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
                  <Github className="h-4 w-4" aria-hidden="true" /> GitHub Release <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              )}
              {release.npmUrl && (
                <a href={release.npmUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
                  <Package className="h-4 w-4" aria-hidden="true" /> npm Package <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              )}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
