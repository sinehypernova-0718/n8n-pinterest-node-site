import Link from "next/link";
import { Github } from "lucide-react";
import { project } from "@/lib/metadata";
import { PinterestIcon, N8nIcon } from "@/components/icons/BrandIcons";

const footerLinks = [
  { title: "Product", links: [
    { label: "Installation", href: "/docs/installation" },
    { label: "Operations", href: "/docs/operations" },
    { label: "Examples", href: "/docs/examples" },
    { label: "Changelog", href: "/changelog" },
  ]},
  { title: "Resources", links: [
    { label: "GitHub", href: project.repositoryUrl, external: true },
    { label: "npm", href: project.npmUrl, external: true },
    { label: "Pinterest API v5", href: "https://developers.pinterest.com/docs/api/v5/", external: true },
    { label: "n8n Docs", href: "https://docs.n8n.io/", external: true },
  ]},
  { title: "Legal", links: [
    { label: "Privacy", href: "/privacy" },
    { label: "License", href: `${project.repositoryUrl}/blob/master/LICENSE.md`, external: true },
  ]},
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle mt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <N8nIcon className="h-6 w-auto text-accent-pink" />
              <div className="h-[1px] w-3 bg-border-strong" />
              <PinterestIcon className="h-6 w-6 text-accent-red" />
            </Link>
            <p className="text-sm text-text-secondary mb-4 max-w-xs">{project.tagline}</p>
            <div className="mono-label">v{project.currentVersion}</div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-text-primary mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={"external" in link ? "_blank" : undefined}
                      rel={"external" in link ? "noopener noreferrer" : undefined}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary text-center md:text-left">{project.communityNote}</p>
          <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-text-secondary transition-colors" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
