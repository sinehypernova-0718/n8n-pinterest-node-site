import { Hero } from "@/components/hero/Hero";
import { WorkflowSection } from "@/components/workflow/WorkflowSection";
import { InstallationSection } from "./_components/InstallationSection";
import { CapabilitiesSection } from "./_components/CapabilitiesSection";
import { ReleaseSection } from "./_components/ReleaseSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkflowSection />
      <CapabilitiesSection />
      <InstallationSection />
      <ReleaseSection />
    </>
  );
}
