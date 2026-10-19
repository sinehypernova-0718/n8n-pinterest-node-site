import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy disclosure for the n8n Pinterest community node website.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 md:pt-40 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <div className="prose-custom">
          <div className="mono-label mb-4">Privacy Disclosure</div>
          <h1 className="heading-display text-4xl md:text-5xl mb-8">Privacy</h1>
          <p>This website is a static documentation and marketing site for the n8n Pinterest community node. It is designed to respect your privacy.</p>
          <h2>What we collect</h2>
          <p>By default, this website does not collect any personal data, set cookies, or use analytics services. No accounts, no tracking, no third-party scripts.</p>
          <h2>Hosting</h2>
          <p>When deployed to Vercel, standard Vercel logging may apply. Vercel may log IP addresses and user-agent strings as part of their normal infrastructure operation. See{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel&apos;s privacy policy</a> for details.
          </p>
          <h2>External links</h2>
          <p>This site contains links to external websites including GitHub, npm, Pinterest, and n8n. Those sites have their own privacy policies and we are not responsible for their practices.</p>
          <h2>Credentials</h2>
          <p>This website never handles your Pinterest credentials, OAuth tokens, or API keys. All credential management happens within your own n8n instance.</p>
          <h2>Contact</h2>
          <p>For questions about this website or the n8n Pinterest node, please use the GitHub repository issues.</p>
          <p className="mt-8 text-text-tertiary text-sm">Last updated: October 2026</p>
        </div>
      </div>
    </div>
  );
}
