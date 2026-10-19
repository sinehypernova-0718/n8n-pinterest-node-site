import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/footer/Footer";
import { project } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["300","400","500","600","700"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: project.siteUrl ? new URL(project.siteUrl) : undefined,
  title: { default: `${project.name} — ${project.tagline}`, template: `%s — ${project.name}` },
  description: project.description,
  keywords: ["n8n", "pinterest", "n8n community node", "pinterest api", "workflow automation"],
  authors: [{ name: project.author }],
  creator: project.author,
  openGraph: { type: "website", title: `${project.name} — ${project.tagline}`, description: project.description, siteName: project.name, locale: "en_US" },
  twitter: { card: "summary_large_image", title: `${project.name} — ${project.tagline}`, description: project.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
