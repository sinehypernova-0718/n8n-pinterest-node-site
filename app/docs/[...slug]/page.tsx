import { notFound } from "next/navigation";
import { DocsLayout } from "@/components/documentation/DocsLayout";

const docsContent: Record<string, { title: string; description: string; body: () => React.ReactNode }> = {
  introduction: {
    title: "Introduction",
    description: "Overview of the n8n Pinterest community node.",
    body: () => (
      <>
        <p><strong>@sinehypernova-0718/n8n-nodes-pinterest</strong> is a community-built integration that brings Pinterest API operations into n8n workflows. Instead of manually constructing API requests, you select resources, operations, and parameters through the n8n workflow editor.</p>
        <h2>What this node does</h2>
        <ul>
          <li><strong>Pins</strong> — create, retrieve, list, update, delete, save, and access analytics</li>
          <li><strong>Boards</strong> — manage boards and board sections with full CRUD operations</li>
          <li><strong>Analytics</strong> — retrieve metrics over specified date ranges</li>
        </ul>
        <h2>Supported scopes</h2>
        <ul>
          <li><code>user_accounts:read</code></li>
          <li><code>boards:read</code> / <code>boards:write</code></li>
          <li><code>pins:read</code> / <code>pins:write</code></li>
        </ul>
      </>
    ),
  },
  installation: {
    title: "Installation",
    description: "How to install the n8n Pinterest community node in your n8n instance.",
    body: () => (
      <>
        <p>Install the package through your n8n instance using the community node installation interface.</p>
        <h2>Package name</h2>
        <pre><code>@sinehypernova-0718/n8n-nodes-pinterest</code></pre>
        <h2>Step-by-step</h2>
        <ol>
          <li>Open your n8n instance.</li>
          <li>Navigate to <strong>Settings → Community Nodes</strong>.</li>
          <li>Select <strong>Install</strong>.</li>
          <li>Enter the exact package name above.</li>
          <li>Review and accept the installation confirmation.</li>
          <li>Once installed, open a workflow and search for the <strong>Pinterest</strong> node.</li>
        </ol>
        <h2>Next step</h2>
        <p>Configure your <a href="/docs/credentials">Pinterest OAuth2 credentials</a> before using the node.</p>
      </>
    ),
  },
  credentials: {
    title: "Credentials",
    description: "How to configure Pinterest OAuth2 credentials for the n8n Pinterest node.",
    body: () => (
      <>
        <p>The Pinterest node uses <strong>OAuth2 authentication</strong> to make authorized requests to the Pinterest API v5.</p>
        <h2>Configure OAuth2 credentials</h2>
        <ol>
          <li>In n8n, go to <strong>Credentials → Add Credential → Pinterest OAuth2 API</strong></li>
          <li>Fill in the required values (see table below).</li>
          <li>Copy the <strong>OAuth redirect URL</strong> shown by n8n.</li>
          <li>Register that redirect URL in your Pinterest developer app.</li>
          <li>Save and use n8n&apos;s authorization flow to connect your account.</li>
        </ol>
        <h2>Required settings</h2>
        <table>
          <thead><tr><th>Setting</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Grant type</td><td>Authorization Code</td></tr>
            <tr><td>Authorization URL</td><td><code>https://www.pinterest.com/oauth/</code></td></tr>
            <tr><td>Access token URL</td><td><code>https://api.pinterest.com/v5/oauth/token</code></td></tr>
            <tr><td>Scopes</td><td><code>user_accounts:read, boards:read, boards:write, pins:read, pins:write</code></td></tr>
          </tbody>
        </table>
      </>
    ),
  },
  operations: {
    title: "Operations",
    description: "All supported Pinterest API operations exposed by the n8n Pinterest node.",
    body: () => (
      <>
        <h2>Pin resource</h2>
        <ul>
          <li><strong>Create</strong> — Create a Pin</li>
          <li><strong>Get</strong> — Retrieve a Pin by ID</li>
          <li><strong>Get Multiple Pin Analytics</strong> — Batch analytics request</li>
          <li><strong>List</strong> — List Pins with filters and pagination</li>
          <li><strong>Update</strong> — Update Pin fields</li>
          <li><strong>Delete</strong> — Delete a Pin</li>
          <li><strong>Save</strong> — Save a Pin to a board</li>
          <li><strong>Get Analytics</strong> — Retrieve analytics for a Pin</li>
        </ul>
        <h2>Board resource</h2>
        <ul>
          <li><strong>Create</strong> — Create a new board</li>
          <li><strong>Get</strong> — Retrieve a board by ID</li>
          <li><strong>List</strong> — List boards with pagination</li>
          <li><strong>Update</strong> — Update board name or description</li>
          <li><strong>Delete</strong> — Delete a board</li>
          <li><strong>List Pins</strong> — List all Pins saved to a board</li>
          <li><strong>Create Board Section</strong> — Create a section within a board</li>
          <li><strong>List Board Sections</strong> — List all sections for a board</li>
          <li><strong>Update Board Section</strong> — Rename or update a board section</li>
          <li><strong>Delete Board Section</strong> — Delete a board section</li>
          <li><strong>List Pins on Board Section</strong> — Retrieve Pins belonging to a specific board section</li>
        </ul>
        <h2>ID formats</h2>
        <p>Pin, board, and board section IDs are <strong>numeric identifiers</strong>. Operations that look up a resource by ID expect digits only.</p>
      </>
    ),
  },
  examples: {
    title: "Examples",
    description: "Practical workflow examples using the n8n Pinterest node.",
    body: () => (
      <>
        <p>Practical workflow patterns using the Pinterest node. Replace sample values with your own resource IDs.</p>
        <h2>Example 1: List all boards</h2>
        <ol>
          <li>Trigger: Manual or scheduled</li>
          <li>Pinterest node: Resource = Board, Operation = List</li>
        </ol>
        <h2>Example 2: Create a Pin</h2>
        <ol>
          <li>Trigger: Webhook or manual</li>
          <li>Pinterest node: Resource = Pin, Operation = Create</li>
          <li>Provide Board ID, title, description, media URL</li>
        </ol>
        <h2>Example 3: Retrieve analytics</h2>
        <ol>
          <li>Trigger: Scheduled (daily)</li>
          <li>Pinterest node: Resource = Pin, Operation = Get Analytics</li>
          <li>Provide Pin ID and date range</li>
        </ol>
        <h2>Example 4: Board sections (v0.1.1+)</h2>
        <ol>
          <li>Create a section with Create Board Section</li>
          <li>List sections with List Board Sections</li>
          <li>List Pins on a section with List Pins on Board Section</li>
        </ol>
      </>
    ),
  },
  troubleshooting: {
    title: "Troubleshooting",
    description: "Common issues and solutions when using the n8n Pinterest node.",
    body: () => (
      <>
        <h2>Installation issues</h2>
        <h3>Node does not appear after installation</h3>
        <ul>
          <li>Verify the package name was entered exactly</li>
          <li>Check that your n8n deployment allows community node installation</li>
          <li>Review n8n logs for installation errors</li>
        </ul>
        <h2>Credential issues</h2>
        <h3>OAuth authorization fails</h3>
        <ul>
          <li>Verify the OAuth redirect URL matches exactly between n8n and your Pinterest app</li>
          <li>Confirm your Pinterest developer app is approved for the required scopes</li>
        </ul>
        <h2>API errors</h2>
        <h3>401 Unauthorized</h3>
        <ul><li>Re-authorize the credential</li><li>Check that your access token has not expired</li></ul>
        <h3>403 Forbidden</h3>
        <ul><li>Your application may not have access to the specific endpoint</li><li>Check Pinterest&apos;s application approval status</li></ul>
        <h3>429 Too Many Requests</h3>
        <ul><li>Pinterest enforces rate limits</li><li>Add delays between operations</li></ul>
      </>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(docsContent).map((slug) => ({ slug: [slug] }));
}

export default function DocPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug[0];
  const doc = docsContent[slug];
  if (!doc) notFound();
  const Body = doc.body;
  return (
    <DocsLayout title={doc.title} description={doc.description}>
      <Body />
    </DocsLayout>
  );
}
