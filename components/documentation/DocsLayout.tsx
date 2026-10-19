import Link from "next/link";
import { ArrowLeft, BookOpen, Github, ExternalLink } from "lucide-react";
import { project } from "@/lib/metadata";

interface DocsLayoutProps { children: React.ReactNode; title: string; description?: string; }

const docLinks = [
  { href: "/docs/introduction", label: "Introduction" },
  { href: "/docs/installation", label: "Installation" },
  { href: "/docs/credentials", label: "Credentials" },
  { href: "/docs/operations", label: "Operations" },
  { href: "/docs/examples", label: "Examples" },
  { href: "/docs/troubleshooting", label: "Troubleshooting" },
];

export function DocsLayout({ children, title, description }: DocsLayoutProps) {
  return (
    <div className="pt-24 md:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to home
              </Link>
              <nav className="space-y-1" aria-label="Documentation">
                <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-text-primary">
                  <BookOpen className="h-4 w-4" aria-hidden="true" /> Documentation
                </div>
                {docLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface rounded-lg transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-border-subtle">
                <div className="space-y-3">
                  <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-text-tertiary hover:text-text-secondary transition-colors">
                    <Github className="h-3 w-3" aria-hidden="true" /> GitHub <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <a href="https://developers.pinterest.com/docs/api/v5/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-text-tertiary hover:text-text-secondary transition-colors">
                    Pinterest API v5 <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <a href="https://docs.n8n.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-text-tertiary hover:text-text-secondary transition-colors">
                    n8n Docs <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <article className="min-w-0">
            <div className="lg:hidden mb-6">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-4 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to home
              </Link>
            </div>
            <header className="mb-10">
              <div className="mono-label mb-3">Documentation</div>
              <h1 className="heading-display text-3xl md:text-5xl mb-4">{title}</h1>
              {description && <p className="text-lg text-text-secondary max-w-readable">{description}</p>}
            </header>
            <div className="prose-custom max-w-readable">{children}</div>
          </article>
        </div>
      </div>
    </div>
  );
}
