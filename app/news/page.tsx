import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { fetchNews, formatDate } from "@/lib/cbdc-api"
import { Card } from "@/components/ui/card"
import { NewsPagination } from "@/components/news-pagination"

export const revalidate = 120

export const metadata = {
  title: "News — CBDC Tracker",
  description: "The latest coverage of central bank digital currency initiatives worldwide.",
}

const PAGE_SIZE = 15

export default async function NewsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams
  const page = Math.max(0, Number(pageParam ?? "0") || 0)
  const data = await fetchNews(page, PAGE_SIZE).catch(() => null)

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">News</h1>
        <p className="text-sm text-muted-foreground">
          {data ? `${data.totalElements.toLocaleString()} articles tracked` : "News is temporarily unavailable."}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {data?.content.map((item) => (
          <Card key={item.uid} className="flex-row gap-4 overflow-hidden p-4">
            {item.image && (
              <div className="relative hidden size-20 shrink-0 overflow-hidden rounded-md bg-muted sm:block">
                <Image src={item.image} alt="" fill sizes="80px" className="object-cover" />
              </div>
            )}
            <div className="flex flex-1 flex-col gap-1.5">
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-1.5 text-sm font-medium leading-relaxed text-foreground hover:text-primary"
              >
                {item.title}
                <ExternalLink className="mt-0.5 size-3 shrink-0 text-muted-foreground" />
              </a>
              {item.abstract && (
                <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">{item.abstract}</p>
              )}
              <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
                <span>{item.sourceName}</span>
                <span aria-hidden="true">·</span>
                <span>{formatDate(item.created)}</span>
                {item.currencyTags[0] && (
                  <>
                    <span aria-hidden="true">·</span>
                    <Link href={`/currency/${item.currencyTags[0].name}`} className="text-primary hover:underline">
                      {item.currencyTags[0].currency}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {data && data.totalPages > 1 && (
        <NewsPagination page={data.number} totalPages={data.totalPages} basePath="/news" />
      )}
    </main>
  )
}
