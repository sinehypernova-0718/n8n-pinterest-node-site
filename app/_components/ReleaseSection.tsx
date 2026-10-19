import { releases } from "@/data/releases";
import { ReleaseJourney } from "@/components/releases/ReleaseJourney";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ReleaseSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mono-label mb-4">Release Journey</div>
          <h2 className="heading-display text-3xl md:text-5xl mb-6">
            The evolution of the <span className="text-gradient-warm">integration</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            A chronological record of verified releases. Adding a new release only requires updating the data file.
          </p>
        </div>
        <ReleaseJourney releases={releases} />
        <div className="text-center mt-16">
          <Link href="/changelog" className="inline-flex items-center gap-2 text-sm text-accent-cool hover:text-accent-cool/80 transition-colors">
            View complete changelog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
