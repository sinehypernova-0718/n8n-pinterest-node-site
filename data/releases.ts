import type { Release } from "@/lib/release-schema";
import { validateReleases } from "@/lib/release-schema";

export const releases: Release[] = [
  {
    version: "0.1.2",
    date: "2026-10-26",
    title: "Media Uploads & Product Tags",
    summary: "Introduces the Media resource for video uploads and extends the Pin resource with product tag management.",
    type: "feature",
    featured: true,
    highlights: [
      "Adds the Media resource with Upload Video, Get Upload, and List Uploads operations, including S3 transfer, upload host validation, and optional processing status polling.",
      "Adds Add Product Tags, List Product Tags, and Remove Product Tags operations to the Pin resource with local ID validation and a 1-24 item limit.",
      "Relaxes Remove Product Tags validation per the Pinterest OpenAPI specification and documents eligibility rejection codes.",
      "Fixes the node codex identifier and switches to dark brand assets for better visibility on the npm page.",
    ],
    githubReleaseUrl: "https://github.com/sinehypernova-0718/n8n-nodes-pinterest/releases/tag/v0.1.2",
    npmUrl: "https://www.npmjs.com/package/@sinehypernova-0718/n8n-nodes-pinterest/v/0.1.2",
    tags: ["media", "video-upload", "product-tags"],
    status: "published",
  },
  {
    version: "0.1.1",
    date: "2026-10-18",
    title: "Board Section Management",
    summary: "Extends the Board resource with board section operations while preserving the existing integration structure.",
    type: "feature",
    featured: true,
    highlights: [
      "Adds Create Board Section, Delete Board Section, Update Board Section, and List Board Sections operations.",
      "Adds List Pins on Board Section to retrieve Pins associated with a board section.",
      "Includes pagination for the new board section listing operations where implemented.",
    ],
    githubReleaseUrl: "https://github.com/sinehypernova-0718/n8n-nodes-pinterest/releases/tag/v0.1.1",
    npmUrl: "https://www.npmjs.com/package/@sinehypernova-0718/n8n-nodes-pinterest/v/0.1.1",
    tags: ["board-sections", "pagination"],
    status: "published",
  },
  {
    version: "0.1.0",
    date: "2026-10-15",
    title: "Initial Release",
    summary: "Initial pre-1.0 release establishing the Pinterest integration structure for n8n with Pin and Board resources.",
    type: "initial",
    featured: true,
    highlights: [
      "Introduces Pin and Board resources.",
      "Adds OAuth2 authentication for Pinterest API requests.",
      "Includes Pin creation, retrieval, listing, updating, deletion, saving, and analytics operations.",
      "Includes Board creation, retrieval, listing, updating, deletion, and listing Pins associated with a board.",
      "Includes pagination and operation-specific request handling where implemented.",
    ],
    githubReleaseUrl: "https://github.com/sinehypernova-0718/n8n-nodes-pinterest/releases/tag/v0.1.0",
    npmUrl: "https://www.npmjs.com/package/@sinehypernova-0718/n8n-nodes-pinterest/v/0.1.0",
    tags: ["foundation", "pins", "boards"],
    status: "published",
  },
];

validateReleases(releases);
