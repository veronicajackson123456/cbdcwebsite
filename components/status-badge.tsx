import { cn } from "@/lib/utils"
import type { CbdcStatus } from "@/lib/cbdc-api"

const STATUS_STYLES: Record<CbdcStatus, string> = {
  Launched: "bg-status-launched/15 text-status-launched border-status-launched/30",
  Pilot: "bg-status-pilot/15 text-status-pilot border-status-pilot/30",
  "Proof of concept": "bg-status-poc/15 text-status-poc border-status-poc/30",
  Research: "bg-status-research/20 text-muted-foreground border-status-research/40",
  Cancelled: "bg-status-cancelled/15 text-status-cancelled border-status-cancelled/30",
}

export function StatusBadge({ status, className }: { status: CbdcStatus; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
        STATUS_STYLES[status],
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {status}
    </span>
  )
}

export function statusDotColor(status: CbdcStatus): string {
  switch (status) {
    case "Launched":
      return "var(--status-launched)"
    case "Pilot":
      return "var(--status-pilot)"
    case "Proof of concept":
      return "var(--status-poc)"
    case "Research":
      return "var(--status-research)"
    case "Cancelled":
      return "var(--status-cancelled)"
  }
}
