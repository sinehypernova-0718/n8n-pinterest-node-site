import { GlassCard } from "@/components/glass/GlassCard";
import { project } from "@/lib/metadata";
import { Image, LayoutGrid, BarChart3 } from "lucide-react";

const capabilities = [
  { icon: Image, title: "Pin Operations", description: "Full lifecycle management for Pins with analytics support.", operations: project.resources.pins.operations, color: "accent-cool" },
  { icon: LayoutGrid, title: "Board Operations", description: "Manage boards and board sections with full CRUD support.", operations: project.resources.boards.operations, color: "accent-warm" },
  { icon: BarChart3, title: "Analytics", description: "Retrieve metrics over specified date ranges for Pins.", operations: ["Get Analytics", "Get Multiple Pin Analytics"], color: "accent-lavender" },
];

export function CapabilitiesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mono-label mb-4">Capabilities</div>
          <h2 className="heading-display text-3xl md:text-5xl mb-6">
            Everything you need to <span className="text-gradient-cool">manage Pinterest</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            Verified operations from the current published release (v{project.currentVersion}).
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <GlassCard key={capability.title} variant="default" spotlight className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl mb-4" style={{ backgroundColor: `var(--color-${capability.color})20`, color: `var(--color-${capability.color})` }}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{capability.title}</h3>
                <p className="text-sm text-text-secondary mb-4">{capability.description}</p>
                <div className="flex flex-wrap gap-2">
                  {capability.operations.map((op) => (<span key={op} className="glass-chip text-xs">{op}</span>))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
