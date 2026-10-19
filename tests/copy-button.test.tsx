import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CopyButton } from "@/components/ui/CopyButton";

describe("CopyButton", () => {
  it("renders with default label", () => {
    render(<CopyButton text="test" />);
    expect(screen.getByRole("button")).toHaveTextContent("Copy");
  });

  it("renders with custom label", () => {
    render(<CopyButton text="test" label="Copy code" />);
    expect(screen.getByRole("button")).toHaveTextContent("Copy code");
  });

  it("copies text to clipboard on click", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText: writeTextMock } });
    render(<CopyButton text="hello world" />);
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => { expect(writeTextMock).toHaveBeenCalledWith("hello world"); });
  });

  it("shows Copied state after successful copy", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText: writeTextMock } });
    render(<CopyButton text="test" />);
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => { expect(screen.getByText("Copied")).toBeInTheDocument(); });
  });
});
