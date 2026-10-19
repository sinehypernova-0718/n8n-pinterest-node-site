import Link from "next/link";
import { GlassCard } from "@/components/glass/GlassCard";
import { CopyButton } from "@/components/ui/CopyButton";
import { ArrowRight, Download, Shield, Settings } from "lucide-react";
import { project } from "@/lib/metadata";

export function InstallationSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mono-label mb-4">Get Started</div>
          <h2 className="heading-display text-3xl md:text-5xl mb-6">
            Install in <span className="text-gradient-cool">minutes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            Add the Pinterest node to your n8n instance through the community nodes interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <GlassCard variant="default" className="p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-cool/10 text-accent-cool mb-4"><Download className="h-6 w-6" /></div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">1. Open Community Nodes</h3>
            <p className="text-sm text-text-secondary">Navigate to <strong>Settings → Community Nodes</strong> in your n8n instance.</p>
          </GlassCard>
          <GlassCard variant="default" className="p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-lavender/10 text-accent-lavender mb-4"><Settings className="h-6 w-6" /></div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">2. Install Package</h3>
            <p className="text-sm text-text-secondary">Click <strong>Install</strong> and enter the exact package name shown below.</p>
          </GlassCard>
          <GlassCard variant="default" className="p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-red/10 text-accent-red mb-4"><Shield className="h-6 w-6" /></div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">3. Configure OAuth2</h3>
            <p className="text-sm text-text-secondary">Create a Pinterest OAuth2 credential with your developer app credentials.</p>
          </GlassCard>
        </div>

        <GlassCard variant="elevated" className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="mono-label mb-2">Package name</div>
              <code className="font-mono text-base md:text-lg text-text-primary break-all">{project.packageName}</code>
            </div>
            <CopyButton text={project.packageName} label="Copy package name" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/docs/installation" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent-cool text-background rounded-lg font-medium hover:bg-accent-cool/90 transition-colors">
              Full Installation Guide <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/docs/credentials" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-surface text-text-primary border border-border-subtle rounded-lg font-medium hover:bg-surface-hover transition-colors">
              Configure Credentials
            </Link>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
