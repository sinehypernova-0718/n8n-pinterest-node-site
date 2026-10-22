export const project = {
  name: "n8n Social Workflow Node",
  packageName: "@sinehypernova-0718/n8n-nodes-pinterest",
  tagline: "A community-built integration for n8n.",
  description: "Automate Pinterest workflows from content management to analytics. Connect Pinterest API v5 directly to your n8n instance through this community node.",
  repositoryUrl: "https://github.com/sinehypernova-0718/n8n-nodes-pinterest",
  npmUrl: "https://www.npmjs.com/package/@sinehypernova-0718/n8n-nodes-pinterest",
  currentVersion: "0.1.1",
  license: "MIT",
  author: "sinehypernova-0718",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  communityNote: "This is an independent community project and is not an official Pinterest or n8n product.",
  pinterestBrand: { name: "Pinterest", apiUrl: "https://developers.pinterest.com/", apiVersion: "v5" },
  n8nBrand: { name: "n8n", url: "https://n8n.io/", description: "Fair-code licensed workflow automation platform." },
  oauth: { grantType: "Authorization Code", authorizationUrl: "https://www.pinterest.com/oauth/", accessTokenUrl: "https://api.pinterest.com/v5/oauth/token", scopes: ["user_accounts:read","boards:read","boards:write","pins:read","pins:write"] },
  resources: {
    pins: { name: "Pin", operations: ["Create","Get","Get Multiple Pin Analytics","List","Update","Delete","Save","Get Analytics"] },
    boards: { name: "Board", operations: ["Create","Create Board Section","Delete","Delete Board Section","Get","List","List Board Sections","List Pins","List Pins on Board Section","Update","Update Board Section"] }
  },
} as const;
export type Project = typeof project;
