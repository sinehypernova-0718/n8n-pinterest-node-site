import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { project } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the n8n Pinterest community node website and integration. Details on data collection, OAuth authentication, Pinterest API usage, and your rights.",
};

const EFFECTIVE_DATE = "October 19, 2026";

export default function PrivacyPage() {
  return (
    <div className="pt-32 md:pt-40 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="prose-custom">
          <div className="mono-label mb-4">Legal</div>
          <h1 className="heading-display text-4xl md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-tertiary text-sm mb-8">
            Effective date: {EFFECTIVE_DATE}
          </p>

          <p>
            This privacy policy covers two things: this website and the{" "}
            <code>{project.packageName}</code> community node for{" "}
            <a
              href={project.n8nBrand.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              n8n
            </a>
            . They have different data practices, so each is described
            separately below.
          </p>
          <p>
            This project is maintained by an individual developer. It is not
            affiliated with, endorsed by, or officially connected to Pinterest,
            Inc. or n8n GmbH.
          </p>

          {/* ── Section A: Website ────────────────────────────────── */}
          <h2>A. Website Privacy</h2>

          <h3>Information collection</h3>
          <p>
            This website is a static documentation and marketing site. It does
            not collect personal information directly. There are no user
            accounts, login systems, contact forms, newsletter signups,
            analytics services, tracking scripts, or advertising pixels.
          </p>

          <h3>Cookies and local storage</h3>
          <p>
            This website does not set cookies and does not use browser local
            storage, session storage, or IndexedDB.
          </p>

          <h3>Fonts and third-party resources</h3>
          <p>
            The website uses the Inter, Inter Tight, and JetBrains Mono
            typefaces. These are loaded through Next.js&apos;s built-in font
            optimization, which downloads and self-hosts font files at build
            time. No requests are made to Google&apos;s servers when you visit
            the site.
          </p>
          <p>
            No other third-party scripts, CDNs, or embedded content are loaded
            by the website.
          </p>

          <h3>Hosting and infrastructure</h3>
          <p>
            This website is designed for deployment on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
            . When deployed on Vercel, their infrastructure may automatically
            log standard HTTP request information, including IP addresses,
            browser user-agent strings, and request timestamps, as part of
            normal platform operations. This infrastructure-level processing is
            governed by{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel&apos;s Privacy Policy
            </a>
            . The website maintainer does not have direct control over
            Vercel&apos;s infrastructure logging.
          </p>

          <h3>External links</h3>
          <p>
            This website links to external sites including GitHub, npm, the
            Pinterest developer portal, and n8n documentation. These sites
            operate under their own privacy policies and practices. Following an
            external link means you are subject to that site&apos;s policies,
            which are outside the control of this project.
          </p>

          {/* ── Section B: n8n Pinterest Node ─────────────────────── */}
          <h2>B. n8n Pinterest Node Privacy</h2>

          <p>
            The <code>{project.packageName}</code> package is a community node
            for{" "}
            <a
              href={project.n8nBrand.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              n8n
            </a>{" "}
            that enables automated workflows with the{" "}
            <a
              href="https://developers.pinterest.com/docs/api/v5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest API v5
            </a>
            . It runs entirely within your own n8n instance and sends requests
            directly to Pinterest&apos;s API on your behalf.
          </p>

          <h3>Authentication</h3>
          <p>
            The node uses Pinterest&apos;s{" "}
            <a
              href="https://developers.pinterest.com/docs/getting-started/set-up-authentication-and-authorization/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OAuth 2.0 Authorization Code flow
            </a>
            , managed through n8n&apos;s built-in credential system. During
            setup, you authorize the node to access your Pinterest account
            through Pinterest&apos;s standard consent screen. The node does not
            handle, display, or independently store your OAuth tokens — n8n
            manages credential storage, encryption, and token refresh according
            to its own configuration.
          </p>

          <h3>Requested permissions</h3>
          <p>
            The node requests the following Pinterest API scopes by default:
          </p>
          <table>
            <thead>
              <tr>
                <th>Scope</th>
                <th>Enables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>user_accounts:read</code>
                </td>
                <td>Reading your Pinterest account profile information</td>
              </tr>
              <tr>
                <td>
                  <code>boards:read</code>
                </td>
                <td>Listing and retrieving your boards and board sections</td>
              </tr>
              <tr>
                <td>
                  <code>boards:write</code>
                </td>
                <td>
                  Creating, updating, and deleting boards and board sections
                </td>
              </tr>
              <tr>
                <td>
                  <code>pins:read</code>
                </td>
                <td>Listing and retrieving your pins, including analytics data</td>
              </tr>
              <tr>
                <td>
                  <code>pins:write</code>
                </td>
                <td>Creating, updating, saving, and deleting pins</td>
              </tr>
            </tbody>
          </table>

          <h3>Data sent to Pinterest</h3>
          <p>
            Depending on which operations you configure in your n8n workflows,
            the node may send the following types of information to
            Pinterest&apos;s API:
          </p>
          <ul>
            <li>
              <strong>Pin content</strong> — titles, descriptions, alt text,
              destination links, image URLs, base64-encoded image data, video
              media IDs, cover image URLs, and AI disclosure flags
            </li>
            <li>
              <strong>Board details</strong> — board names, descriptions, and
              privacy settings
            </li>
            <li>
              <strong>Board section details</strong> — section names
            </li>
            <li>
              <strong>Identifiers</strong> — pin IDs, board IDs, section IDs,
              and ad account IDs used to target specific resources
            </li>
            <li>
              <strong>Analytics parameters</strong> — date ranges and metric
              types for pin analytics queries
            </li>
          </ul>

          <h3>Data received from Pinterest</h3>
          <p>
            API responses from Pinterest are passed through to your n8n workflow
            as output data. Depending on the operation, this may include pin
            metadata, board details, section listings, user profile information,
            and analytics data. The node does not filter or redact
            Pinterest&apos;s responses.
          </p>

          <h3>Data the node does not collect</h3>
          <p>
            Based on the current implementation, the node code itself does not:
          </p>
          <ul>
            <li>
              Persist, cache, or store data on disk or in any database between
              workflow executions
            </li>
            <li>
              Send data to any service other than the Pinterest API
              at <code>api.pinterest.com</code>
            </li>
            <li>Include analytics, telemetry, or usage-tracking code</li>
            <li>Log API request data, response bodies, or credential values</li>
          </ul>

          <h3>n8n&apos;s own data handling</h3>
          <p>
            The node runs within n8n, which has its own data handling behavior
            independent of this node&apos;s code. Depending on your n8n
            deployment and configuration, n8n itself may:
          </p>
          <ul>
            <li>
              Store encrypted OAuth credentials in its configured database
            </li>
            <li>
              Retain workflow execution history, including input and output data
              from each node execution
            </li>
            <li>Write application logs that may include error details</li>
            <li>
              Share execution or error data with n8n&apos;s own services, if
              telemetry is enabled
            </li>
          </ul>
          <p>
            These behaviors are controlled by n8n&apos;s settings and
            deployment, not by this node. See{" "}
            <a
              href="https://docs.n8n.io/hosting/logging-monitoring/logging/"
              target="_blank"
              rel="noopener noreferrer"
            >
              n8n&apos;s documentation on logging
            </a>{" "}
            and{" "}
            <a
              href="https://docs.n8n.io/reference/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              n8n&apos;s privacy information
            </a>{" "}
            for details.
          </p>

          <h3>Pinterest&apos;s data processing</h3>
          <p>
            When the node sends API requests to Pinterest, Pinterest processes
            that data under its own policies and terms. This includes how
            Pinterest stores, uses, and shares the data you send through the
            API, as well as any data Pinterest returns. The project maintainer
            does not control Pinterest&apos;s data processing. For details, see:
          </p>
          <ul>
            <li>
              <a
                href="https://policy.pinterest.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://developers.pinterest.com/terms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest Developer &amp; API Terms
              </a>
            </li>
            <li>
              <a
                href="https://policy.pinterest.com/developer-guidelines"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest Developer Guidelines
              </a>
            </li>
          </ul>

          <h3>Error handling</h3>
          <p>
            When an API request fails, error messages from Pinterest may be
            included in the n8n workflow output or logs. These messages can
            contain resource identifiers or descriptive text from
            Pinterest&apos;s API but do not include credential values.
          </p>

          {/* ── Section C: Retention, Security, Rights ────────────── */}
          <h2>C. Data Retention, Security, and Your Rights</h2>

          <h3>Data retention</h3>
          <p>
            The website does not directly collect or store personal data, so
            there is no website-level data retention to describe. For
            infrastructure-level logs generated by the hosting provider, see{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel&apos;s Privacy Policy
            </a>
            .
          </p>
          <p>
            For the n8n Pinterest node, data retention depends on your n8n
            deployment configuration. n8n allows configuring how long execution
            history and logs are kept. Pinterest&apos;s retention of data sent
            through its API is governed by Pinterest&apos;s own policies.
          </p>

          <h3>Security</h3>
          <p>
            The website is served over HTTPS. The node communicates with
            Pinterest exclusively over HTTPS and uses n8n&apos;s built-in OAuth
            2.0 credential handling, which includes encrypted storage of tokens.
          </p>
          <p>
            Reasonable care is taken in development, but no software can
            guarantee absolute security. Users are responsible for:
          </p>
          <ul>
            <li>
              Keeping their n8n instance and its dependencies up to date
            </li>
            <li>
              Securing access to their n8n instance and its credential storage
            </li>
            <li>
              Limiting the Pinterest API scopes and permissions to what their
              workflows require
            </li>
            <li>
              Reviewing workflow configurations to ensure they do not
              inadvertently expose sensitive data
            </li>
          </ul>

          <h3>Your rights</h3>
          <p>
            Since this website does not directly collect personal data, there is
            typically no user data held by the website maintainer to access,
            correct, or delete.
          </p>
          <p>
            For data held by Pinterest, you can manage your account and data
            through{" "}
            <a
              href="https://www.pinterest.com/settings/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest&apos;s account settings
            </a>
            , including revoking OAuth access for connected applications. For
            data held in your n8n instance, you have full control through
            n8n&apos;s administration interface.
          </p>
          <p>
            If you have privacy-related questions or concerns about this project
            that cannot be resolved through the above channels, you can open an
            issue on the project&apos;s{" "}
            <a
              href={`${project.repositoryUrl}/issues`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>
            .
          </p>

          {/* ── Section D: Scope and Changes ──────────────────────── */}
          <h2>D. Scope and Changes</h2>

          <h3>Who maintains this project</h3>
          <p>
            This website and the <code>{project.packageName}</code> node are
            maintained as an independent open-source project. See the{" "}
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>{" "}
            for contributor information. The project is licensed under the{" "}
            <a
              href={`${project.repositoryUrl}/blob/master/LICENSE.md`}
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
            .
          </p>

          <h3>Changes to this policy</h3>
          <p>
            This policy may be updated when the website or node&apos;s data
            practices change — for example, if analytics are added to the
            website, new API scopes are requested by the node, or the hosting
            infrastructure changes. Updates will be reflected on this page with
            a revised effective date.
          </p>

          <h3>Contact</h3>
          <p>
            For questions about this privacy policy or the project&apos;s data
            practices, please use the{" "}
            <a
              href={`${project.repositoryUrl}/issues`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Issues
            </a>{" "}
            page on the project repository.
          </p>

          <p className="mt-12 pt-8 border-t border-border-subtle text-text-tertiary text-sm">
            Last updated: {EFFECTIVE_DATE}
          </p>
        </div>
      </div>
    </div>
  );
}
