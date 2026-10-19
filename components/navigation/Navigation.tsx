"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { project } from "@/lib/metadata";
import { PinterestIcon, N8nIcon } from "@/components/icons/BrandIcons";

const navLinks = [
  { href: "/docs/installation", label: "Installation" },
  { href: "/docs/credentials", label: "Credentials" },
  { href: "/docs/operations", label: "Operations" },
  { href: "/changelog", label: "Changelog" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "py-2" : "py-4")}>
      <nav className="mx-auto max-w-7xl px-4 md:px-6 transition-all duration-300">
        <div className={cn("flex items-center justify-between rounded-2xl px-4 md:px-6 py-3", scrolled ? "glass-elevated shadow-lg shadow-black/40" : "bg-transparent")}>
          <Link href="/" className="flex items-center gap-3 group" aria-label="Home">
            <div className="relative flex items-center">
              <N8nIcon className="h-6 w-auto md:h-7 text-accent-pink" />
              <div className="mx-2 h-[1px] w-4 bg-border-strong" />
              <PinterestIcon className="h-6 w-6 md:h-7 md:w-7 text-accent-red" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium text-text-primary leading-tight">n8n Pinterest</div>
              <div className="mono-label text-[10px] leading-tight">v{project.currentVersion}</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <Button href="/docs/installation" size="sm">Install</Button>
          </div>

          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-2 glass-elevated rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm text-text-secondary hover:text-text-primary hover:bg-surface rounded-lg transition-colors">
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border-subtle my-2" />
              <div className="flex gap-2 px-4">
                <Button href={project.repositoryUrl} variant="ghost" size="sm" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </Button>
                <Button href="/docs/installation" size="sm">Install</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
