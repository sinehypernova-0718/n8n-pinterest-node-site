import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AtmosphericBackground } from "@/components/atmosphere/AtmosphericBackground";

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <AtmosphericBackground variant="section" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-accent-cool/5 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-red/5 blur-[100px]" />
      </div>
      <div className="relative z-10 text-center px-4">
        <div className="mono-label mb-4">404</div>
        <h1 className="heading-display text-5xl md:text-7xl mb-6">
          <span className="text-gradient-cool">Page not found</span>
        </h1>
        <p className="max-w-md mx-auto text-lg text-text-secondary mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" size="lg"><ArrowLeft className="h-4 w-4" /> Back to Home</Button>
          <Button href="/docs/installation" variant="secondary" size="lg">Read the Docs</Button>
        </div>
      </div>
    </div>
  );
}
