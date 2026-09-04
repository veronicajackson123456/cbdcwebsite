import Link from "next/link"
import { fetchHistory } from "@/lib/cbdc-api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsPagination } from "@/components/news-pagination"

export const revalidate = 120

export const metadata = {
  title: "Timeline — CBDC Tracker",
  description: "A chronological log of every change to tracked CBDC records.",
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const PAGE_SIZE = 12

export default async function TimelinePage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams
  const page = Math.max(0, Number(pageParam ?? "0") || 0)
  const data = await fetchHistory(page, PAGE_SIZE).catch(() => null)

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Timeline</h1>
        <p className="text-sm text-muted-foreground">
          {data
            ? `${data.totalElements.toLocaleString()} monthly update batches recorded`
            : "Timeline is temporarily unavailable."}
        </p>
      </div>

      <div className="relative flex flex-col gap-6 border-l border-border pl-6">
        {data?.content.map((entry, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full border-2 border-background bg-primary" />
            <p className="font-mono text-xs font-medium text-primary">
              {MONTHS[entry.month - 1] ?? entry.month} {entry.year}
            </p>
            <div className="mt-2 flex flex-col gap-3">
              {entry.tags.map((tag, j) => (
                <Card key={j} className="gap-2 py-3">
                  <CardHeader className="px-4">
                    <CardTitle className="text-sm">
                      <Link href={`/currency/${tag.tag.name}`} className="hover:text-primary">
                        {tag.tag.currency}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-1.5 px-4">
                    {tag.description && (
                      <p className="text-xs leading-relaxed text-muted-foreground">{tag.description}</p>
                    )}
                    {tag.changes.map((change, k) => (
                      <p key={k} className="font-mono text-xs text-muted-foreground">
                        <span className="text-foreground">{change.property}</span> updated
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {data && data.totalPages > 1 && (
        <NewsPagination page={data.number} totalPages={data.totalPages} basePath="/timeline" />
      )}
    </main>
  )
}
