import type { Metadata } from "next";
import { releases } from "@/data/releases";
import { ReleaseJourney } from "@/components/releases/ReleaseJourney";

export const metadata: Metadata = {
  title: "Changelog",
  description: "The complete release history of the n8n Pinterest community node.",
};

export default function ChangelogPage() {
  return (
    <div className="pt-32 md:pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mono-label mb-4">Changelog</div>
          <h1 className="heading-display text-4xl md:text-6xl mb-6">
            Release <span className="text-gradient-cool">journey</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            The complete history of verified releases for{" "}
            <code className="font-mono text-sm bg-surface px-2 py-1 rounded border border-border-subtle">
              @sinehypernova-0718/n8n-nodes-pinterest
            </code>
          </p>
        </div>
        <ReleaseJourney releases={releases} />
      </div>
    </div>
  );
}
