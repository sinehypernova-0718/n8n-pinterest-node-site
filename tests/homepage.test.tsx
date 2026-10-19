import { describe, it, expect } from "vitest";
import { project } from "@/lib/metadata";

describe("homepage metadata", () => {
  it("has required project fields", () => {
    expect(project.name).toBeTruthy();
    expect(project.packageName).toBeTruthy();
    expect(project.repositoryUrl).toBeTruthy();
    expect(project.npmUrl).toBeTruthy();
    expect(project.currentVersion).toBeTruthy();
  });

  it("has correct package name format", () => {
    expect(project.packageName).toMatch(/^@[\w-]+\/[\w-]+$/);
  });

  it("includes community note disclaimer", () => {
    expect(project.communityNote.toLowerCase()).toContain("community");
    expect(project.communityNote.toLowerCase()).toContain("not an official");
  });

  it("has verified pin operations", () => {
    expect(project.resources.pins.operations.length).toBeGreaterThan(0);
    expect(project.resources.pins.operations).toContain("Create");
    expect(project.resources.pins.operations).toContain("List");
  });

  it("has verified board operations", () => {
    expect(project.resources.boards.operations.length).toBeGreaterThan(0);
    expect(project.resources.boards.operations).toContain("Create");
    expect(project.resources.boards.operations).toContain("List");
  });
});
