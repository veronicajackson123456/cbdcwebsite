import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/status-badge"
import type { CbdcStatus } from "@/lib/cbdc-api"

const STATUS_DEFINITIONS: { status: CbdcStatus; description: string }[] = [
  { status: "Cancelled", description: "Countries that cancelled or decommissioned a CBDC." },
  { status: "Research", description: "Countries that have conducted first exploratory CBDC research." },
  {
    status: "Proof of concept",
    description: "Countries that are in an advanced research stage and have published a CBDC proof of concept.",
  },
  {
    status: "Pilot",
    description:
      "Countries that have developed a CBDC that is tested in a real environment either with a limited number of parties or on a wide scale.",
  },
  { status: "Launched", description: "Countries that officially fully launched a CBDC." },
]

export function CbdcProjectInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CBDC project</CardTitle>
        <p className="text-sm text-muted-foreground">
          Current status of Central Bank Digital Currencies (CBDC) worldwide
        </p>
      </CardHeader>
      <CardContent>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground">Description</h3>
        <dl className="mt-3 flex flex-col gap-2.5">
          {STATUS_DEFINITIONS.map(({ status, description }) => (
            <div key={status} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
              <dt className="shrink-0">
                <StatusBadge status={status} />
              </dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">{description}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  )
}
