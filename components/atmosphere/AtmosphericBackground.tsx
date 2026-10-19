import { cn } from "@/lib/utils";

interface AtmosphericBackgroundProps {
  className?: string;
  variant?: "hero" | "section" | "subtle";
  primaryHue?: number;
  secondaryHue?: number;
  intensity?: number;
}

export function AtmosphericBackground({ className, variant = "section", primaryHue = 226, secondaryHue = 348, intensity = 1 }: AtmosphericBackgroundProps) {
  const primaryColor = `hsl(${primaryHue}, 90%, 70%)`;
  const secondaryColor = `hsl(${secondaryHue}, 100%, 45%)`;
  const tertiaryColor = `hsl(270, 70%, 60%)`;
  const baseOpacity = variant === "hero" ? 0.35 : variant === "section" ? 0.25 : 0.15;
  const finalOpacity = baseOpacity * intensity;
  const toHex = (opacity: number) => Math.round(Math.min(1, Math.max(0, opacity)) * 255).toString(16).padStart(2, "0");

  return (
    <div
      className={cn("atmospheric-gradient", className)}
      aria-hidden="true"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% 40%, ${primaryColor}${toHex(finalOpacity)}, transparent 70%),
          radial-gradient(ellipse 60% 40% at 20% 60%, ${secondaryColor}${toHex(finalOpacity * 0.7)}, transparent 60%),
          radial-gradient(ellipse 50% 35% at 80% 30%, ${tertiaryColor}${toHex(finalOpacity * 0.5)}, transparent 55%)
        `,
      }}
    />
  );
}
