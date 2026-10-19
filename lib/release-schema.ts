export type ReleaseType = "initial" | "feature" | "improvement" | "maintenance" | "security" | "breaking";
export type ReleaseStatus = "published" | "prerelease" | "yanked";

export interface Release {
  version: string;
  date: string;
  title: string;
  summary: string;
  type: ReleaseType;
  highlights: string[];
  githubReleaseUrl?: string;
  npmUrl?: string;
  featured?: boolean;
  tags?: string[];
  status?: ReleaseStatus;
}

export const supportedReleaseTypes: ReleaseType[] = ["initial","feature","improvement","maintenance","security","breaking"];
export const supportedReleaseStatuses: ReleaseStatus[] = ["published","prerelease","yanked"];

export function validateRelease(release: Release): void {
  if (!release.version || typeof release.version !== "string") throw new Error(`Release entry missing version: ${JSON.stringify(release)}`);
  if (!/^\d+\.\d+\.\d+/.test(release.version)) throw new Error(`Invalid version format for ${release.version}. Expected semver.`);
  if (!release.date || !/^\d{4}-\d{2}-\d{2}$/.test(release.date)) throw new Error(`Invalid or missing date for ${release.version}. Expected YYYY-MM-DD.`);
  const parsed = new Date(release.date + "T00:00:00Z");
  if (isNaN(parsed.getTime())) throw new Error(`Invalid calendar date for ${release.version}: ${release.date}`);
  if (!release.title || release.title.trim().length === 0) throw new Error(`Missing title for ${release.version}`);
  if (!release.summary || release.summary.trim().length === 0) throw new Error(`Missing summary for ${release.version}`);
  if (!supportedReleaseTypes.includes(release.type)) throw new Error(`Unsupported release type '${release.type}' for ${release.version}`);
  if (!Array.isArray(release.highlights) || release.highlights.length === 0) throw new Error(`Release ${release.version} must have at least one highlight`);
  for (const h of release.highlights) { if (typeof h !== "string" || h.trim().length === 0) throw new Error(`Invalid highlight in ${release.version}`); }
  if (release.status && !supportedReleaseStatuses.includes(release.status)) throw new Error(`Unsupported status for ${release.version}: ${release.status}`);
}

export function validateReleases(releases: Release[]): void {
  const seen = new Set<string>();
  for (const r of releases) { validateRelease(r); if (seen.has(r.version)) throw new Error(`Duplicate version: ${r.version}`); seen.add(r.version); }
  for (let i = 1; i < releases.length; i++) {
    const prev = new Date(releases[i - 1].date + "T00:00:00Z").getTime();
    const curr = new Date(releases[i].date + "T00:00:00Z").getTime();
    if (curr > prev) throw new Error(`Releases must be sorted newest first. ${releases[i].version} (${releases[i].date}) comes after ${releases[i - 1].version} (${releases[i - 1].date}).`);
  }
}
