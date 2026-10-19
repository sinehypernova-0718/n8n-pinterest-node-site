"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/glass/GlassCard";
import { AtmosphericBackground } from "@/components/atmosphere/AtmosphericBackground";
import { PinterestIcon, N8nIcon } from "@/components/icons/BrandIcons";
import { project } from "@/lib/metadata";
import { prefersReducedMotion } from "@/lib/utils";

export function Hero() {
  const [entered, setEntered] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = prefersReducedMotion();
    if (reducedMotion.current) { setEntered(true); return; }
    const timer = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <AtmosphericBackground variant="hero" primaryHue={226} secondaryHue={348} intensity={1.2} />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-[10%] w-96 h-96 rounded-full bg-accent-cool/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-[15%] w-80 h-80 rounded-full bg-accent-red/5 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className={`transition-all duration-700 ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="inline-flex items-center gap-2 glass-chip mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-cool animate-pulse" />
              <span>n8n Community Node · v{project.currentVersion}</span>
            </div>
          </div>

          <div className={`flex items-center gap-4 mb-8 transition-all duration-700 delay-100 ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <N8nIcon className="h-10 w-auto md:h-12 text-accent-pink" />
            <div className="flex flex-col items-center">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-border-strong to-transparent" />
            </div>
            <PinterestIcon className="h-10 w-10 md:h-12 md:w-12 text-accent-red" />
          </div>

          <h1 className={`heading-display text-4xl md:text-6xl lg:text-7xl max-w-4xl mb-6 transition-all duration-1000 delay-200 ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="text-text-primary">Automate </span>
            <span className="text-gradient-cool">Pinterest </span>
            <span className="text-text-primary">workflows</span>
            <br className="hidden md:block" />
            <span className="text-text-secondary text-3xl md:text-5xl lg:text-6xl font-normal">from content to analytics</span>
          </h1>

          <p className={`max-w-2xl text-lg md:text-xl text-text-secondary mb-10 leading-relaxed transition-all duration-700 delay-300 ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {project.description}
          </p>

          <div className={`flex flex-col sm:flex-row items-center gap-4 mb-12 transition-all duration-700 delay-400 ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Button href="/docs/installation" size="lg">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={project.repositoryUrl} variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> View on GitHub
            </Button>
          </div>

          <div className={`w-full max-w-2xl transition-all duration-700 delay-500 ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <GlassCard variant="elevated" spotlight className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="mono-label mb-1">Install via community nodes</div>
                  <code className="font-mono text-sm md:text-base text-text-primary break-all">{project.packageName}</code>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="glass-chip">MIT</span>
                  <span className="glass-chip">API v5</span>
                  <span className="glass-chip">OAuth2</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${entered ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
        <div className="flex flex-col items-center gap-2 text-text-tertiary">
          <span className="text-xs">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-border-strong to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
