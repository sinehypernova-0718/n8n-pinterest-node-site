"use client";
import { CopyButton } from "./CopyButton";
import { cn } from "@/lib/utils";

interface CodeBlockProps { code: string; language?: string; title?: string; className?: string; }

export function CodeBlock({ code, title, className }: CodeBlockProps) {
  return (
    <div className={cn("group relative my-6", className)}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 rounded-t-xl bg-background-elevated border border-border-subtle border-b-0">
          <span className="mono-label">{title}</span>
          <CopyButton text={code} />
        </div>
      )}
      <div className={cn("relative rounded-xl bg-background-elevated border border-border-subtle", title ? "rounded-t-none border-t-0" : "")}>
        <pre className="p-4 overflow-x-auto">
          <code className="font-mono text-sm text-text-primary leading-relaxed">{code}</code>
        </pre>
        {!title && (
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <CopyButton text={code} />
          </div>
        )}
      </div>
    </div>
  );
}
