"use client";
import { useRef, useEffect, useState } from "react";
import { cn, hasFinePointer, prefersReducedMotion } from "@/lib/utils";
import type { ReactNode, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "elevated" | "hero" | "milestone";
  spotlight?: boolean;
  className?: string;
}

export function GlassCard({ children, variant = "default", spotlight = false, className, ...props }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canSpotlight, setCanSpotlight] = useState(false);

  useEffect(() => {
    if (!spotlight) return;
    if (prefersReducedMotion()) return;
    if (!hasFinePointer()) return;
    setCanSpotlight(true);
  }, [spotlight]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canSpotlight || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty("--mouse-x", `${x}%`);
    ref.current.style.setProperty("--mouse-y", `${y}%`);
  };

  const variantClasses = {
    default: "glass-surface rounded-2xl",
    elevated: "glass-elevated rounded-2xl",
    hero: "glass-elevated rounded-3xl",
    milestone: "glass-surface rounded-2xl",
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden", variantClasses[variant], spotlight && canSpotlight && "has-cursor-spotlight", className)}
      {...props}
    >
      {spotlight && canSpotlight && <div className="cursor-spotlight" />}
      {children}
    </div>
  );
}
