import { fetchHistory, formatMonthYear } from "@/lib/cbdc-api"
import { TimelineFeed } from "@/components/timeline-feed"

export const revalidate = 120

export const metadata = {
  title: "Timeline — CBDC Tracker",
  description: "A chronological log of every change to tracked CBDC records.",
}

const PAGE_SIZE = 12

export default async function TimelinePage() {
  const data = await fetchHistory(0, PAGE_SIZE).catch(() => null)
  const lastUpdate = data?.content[0]

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Timeline</h1>
        <p className="text-sm text-muted-foreground">
          {lastUpdate ? `Last update: ${formatMonthYear(lastUpdate.month, lastUpdate.year)}` : "Timeline is temporarily unavailable."}
        </p>
      </div>

      {data && (
        <TimelineFeed initialEntries={data.content} initialPage={data.number} totalPages={data.totalPages} pageSize={PAGE_SIZE} />
      )}
    </main>
  )
}
