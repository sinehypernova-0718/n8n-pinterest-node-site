"use client";
import { GlassCard } from "@/components/glass/GlassCard";
import { PinterestIcon, N8nIcon } from "@/components/icons/BrandIcons";
import { Zap, Database, BarChart3 } from "lucide-react";

export function WorkflowSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <div className="mono-label mb-4">The Integration</div>
          <h2 className="heading-display text-3xl md:text-5xl mb-6">
            Connect Pinterest to <span className="text-gradient-cool">your workflows</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            A bridge between Pinterest&apos;s visual discovery platform and n8n&apos;s workflow automation engine.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            <GlassCard variant="default" spotlight className="p-8 text-center">
              <N8nIcon className="h-12 w-auto text-accent-pink mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">n8n</h3>
              <p className="text-sm text-text-secondary">Workflow automation platform with visual node editor</p>
            </GlassCard>

            <div className="relative py-8 md:py-0">
              <div className="flex flex-col items-center">
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-border-subtle via-border-strong to-border-subtle" />
                <GlassCard variant="elevated" className="relative z-10 p-6">
                  <div className="flex items-center gap-3">
                    <N8nIcon className="h-8 w-auto text-accent-pink" />
                    <Zap className="h-5 w-5 text-accent-cool" />
                    <PinterestIcon className="h-8 w-8 text-accent-red" />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="mono-label">Pinterest Node</div>
                    <div className="text-sm text-text-secondary mt-1">API v5 · OAuth2</div>
                  </div>
                </GlassCard>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <span className="glass-chip">Pin Management</span>
                <span className="glass-chip">Board Management</span>
                <span className="glass-chip">Analytics</span>
                <span className="glass-chip">Pagination</span>
              </div>
            </div>

            <GlassCard variant="default" spotlight className="p-8 text-center">
              <PinterestIcon className="h-12 w-12 text-accent-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">Pinterest</h3>
              <p className="text-sm text-text-secondary">Visual discovery platform with content and analytics</p>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <GlassCard variant="default" className="p-6">
              <Database className="h-8 w-8 text-accent-cool mb-4" />
              <h4 className="text-lg font-medium text-text-primary mb-2">Content Management</h4>
              <p className="text-sm text-text-secondary">Create, update, and organize Pins and Boards programmatically through your workflows.</p>
            </GlassCard>
            <GlassCard variant="default" className="p-6">
              <BarChart3 className="h-8 w-8 text-accent-lavender mb-4" />
              <h4 className="text-lg font-medium text-text-primary mb-2">Analytics Pipeline</h4>
              <p className="text-sm text-text-secondary">Retrieve Pin and board analytics, aggregate metrics, and integrate with your reporting tools.</p>
            </GlassCard>
            <GlassCard variant="default" className="p-6">
              <Zap className="h-8 w-8 text-accent-warm mb-4" />
              <h4 className="text-lg font-medium text-text-primary mb-2">Automated Workflows</h4>
              <p className="text-sm text-text-secondary">Trigger Pinterest operations from any source, schedule recurring tasks, and connect to other services.</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
