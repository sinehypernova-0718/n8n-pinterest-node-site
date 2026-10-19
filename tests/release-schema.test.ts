import { describe, it, expect } from "vitest";
import { validateRelease, validateReleases } from "@/lib/release-schema";
import type { Release } from "@/lib/release-schema";

describe("release-schema", () => {
  const validRelease: Release = {
    version: "1.0.0",
    date: "2026-10-15",
    title: "Test Release",
    summary: "A test release",
    type: "feature",
    highlights: ["First highlight", "Second highlight"],
    status: "published",
  };

  describe("validateRelease", () => {
    it("accepts a valid release", () => { expect(() => validateRelease(validRelease)).not.toThrow(); });
    it("rejects missing version", () => { expect(() => validateRelease({ ...validRelease, version: "" } as any)).toThrow(/missing version/i); });
    it("rejects invalid version format", () => { expect(() => validateRelease({ ...validRelease, version: "abc" })).toThrow(/Invalid version/i); });
    it("rejects missing date", () => { expect(() => validateRelease({ ...validRelease, date: "" } as any)).toThrow(/missing date/i); });
    it("rejects invalid date format", () => { expect(() => validateRelease({ ...validRelease, date: "2026/10/15" })).toThrow(/Invalid.*date/i); });
    it("rejects missing title", () => { expect(() => validateRelease({ ...validRelease, title: "" } as any)).toThrow(/Missing title/i); });
    it("rejects missing summary", () => { expect(() => validateRelease({ ...validRelease, summary: "" } as any)).toThrow(/Missing summary/i); });
    it("rejects unsupported release type", () => { expect(() => validateRelease({ ...validRelease, type: "invalid" as any })).toThrow(/Unsupported release type/i); });
    it("rejects empty highlights", () => { expect(() => validateRelease({ ...validRelease, highlights: [] })).toThrow(/at least one highlight/i); });
    it("rejects unsupported status", () => { expect(() => validateRelease({ ...validRelease, status: "invalid" as any })).toThrow(/Unsupported status/i); });
  });

  describe("validateReleases", () => {
    it("accepts a valid array", () => { expect(() => validateReleases([validRelease])).not.toThrow(); });
    it("rejects duplicate versions", () => {
      const dupes = [validRelease, { ...validRelease, date: "2026-10-14" }];
      expect(() => validateReleases(dupes)).toThrow(/Duplicate version/i);
    });
    it("rejects incorrect sort order", () => {
      const older = { ...validRelease, version: "0.9.0", date: "2026-09-01" };
      const newer = { ...validRelease, version: "1.0.0", date: "2026-10-01" };
      expect(() => validateReleases([older, newer])).toThrow(/sorted newest first/i);
    });
    it("accepts correctly sorted releases", () => {
      const newer = { ...validRelease, version: "1.0.0", date: "2026-10-01" };
      const older = { ...validRelease, version: "0.9.0", date: "2026-09-01" };
      expect(() => validateReleases([newer, older])).not.toThrow();
    });
  });
});
