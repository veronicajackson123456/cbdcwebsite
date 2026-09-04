"use client"

import { Bar, BarChart, Cell, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import type { CbdcStatus } from "@/lib/cbdc-api"

const STATUS_KEYS: { status: CbdcStatus; key: string }[] = [
  { status: "Launched", key: "launched" },
  { status: "Pilot", key: "pilot" },
  { status: "Proof of concept", key: "poc" },
  { status: "Research", key: "research" },
  { status: "Cancelled", key: "cancelled" },
]

const chartConfig: ChartConfig = {
  count: { label: "CBDCs" },
  launched: { label: "Launched", color: "var(--status-launched)" },
  pilot: { label: "Pilot", color: "var(--status-pilot)" },
  poc: { label: "Proof of concept", color: "var(--status-poc)" },
  research: { label: "Research", color: "var(--status-research)" },
  cancelled: { label: "Cancelled", color: "var(--status-cancelled)" },
}

export function StatusChart({ counts }: { counts: Record<CbdcStatus, number> }) {
  const data = STATUS_KEYS.map(({ status, key }) => ({
    key,
    label: status,
    count: counts[status] ?? 0,
  }))

  return (
    <ChartContainer config={chartConfig} className="h-56 w-full">
      <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16 }}>
        <CartesianGrid horizontal={false} stroke="var(--border)" />
        <XAxis type="number" hide />
        <YAxis
          type="category"
          dataKey="label"
          tickLine={false}
          axisLine={false}
          width={110}
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="count" radius={4}>
          {data.map((entry) => (
            <Cell key={entry.key} fill={`var(--color-${entry.key})`} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
