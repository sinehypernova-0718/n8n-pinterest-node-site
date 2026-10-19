import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { N8nIcon, N8nLogo, PinterestIcon } from "@/components/icons/BrandIcons";

describe("BrandIcons", () => {
  it("renders official N8nIcon with correct viewBox and attributes", () => {
    const { container } = render(<N8nIcon className="h-6 w-auto" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("viewBox")).toBe("0 0 304 160");
    expect(svg?.getAttribute("aria-label")).toBe("n8n");
    expect(svg?.getAttribute("role")).toBe("img");

    const path = svg?.querySelector("path");
    expect(path).toBeTruthy();
    expect(path?.getAttribute("fill-rule")).toBe("evenodd");
  });

  it("renders official N8nLogo with full horizontal mark and wordmark", () => {
    const { container } = render(<N8nLogo />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("viewBox")).toBe("0 0 576 160");
    expect(svg?.getAttribute("aria-label")).toBe("n8n");

    const paths = svg?.querySelectorAll("path");
    expect(paths?.length).toBe(4);
  });

  it("renders PinterestIcon with 24x24 viewBox", () => {
    const { container } = render(<PinterestIcon className="h-6 w-6" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("viewBox")).toBe("0 0 24 24");
    expect(svg?.getAttribute("aria-label")).toBe("Pinterest");
  });
});
