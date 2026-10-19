import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Installation guides, API credentials, and operation references for the n8n Pinterest node.",
};

export default function DocsRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
