"use client";
import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps { text: string; label?: string; className?: string; }

export function CopyButton({ text, label = "Copy", className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium",
        "bg-surface hover:bg-surface-hover border border-border-subtle",
        "text-text-secondary hover:text-text-primary transition-all duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cool",
        className
      )}
      aria-label={copied ? "Copied to clipboard" : label}
      aria-live="polite"
    >
      {copied ? (
        <><Check className="h-3.5 w-3.5 text-green-400" aria-hidden="true" /><span>Copied</span></>
      ) : (
        <><Copy className="h-3.5 w-3.5" aria-hidden="true" /><span>{label}</span></>
      )}
    </button>
  );
}
