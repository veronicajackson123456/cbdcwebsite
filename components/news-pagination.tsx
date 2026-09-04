import { Fragment } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function NewsPagination({
  page,
  totalPages,
  basePath,
}: {
  page: number
  totalPages: number
  basePath: string
}) {
  const href = (p: number) => `${basePath}?page=${p}`

  const pages = new Set<number>([0, totalPages - 1, page, page - 1, page + 1].filter((p) => p >= 0 && p < totalPages))
  const sorted = Array.from(pages).sort((a, b) => a - b)

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={page > 0 ? href(page - 1) : undefined} aria-disabled={page === 0} />
        </PaginationItem>
        {sorted.map((p, i) => (
          <Fragment key={p}>
            {i > 0 && p - sorted[i - 1] > 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink href={href(p)} isActive={p === page}>
                {p + 1}
              </PaginationLink>
            </PaginationItem>
          </Fragment>
        ))}
        <PaginationItem>
          <PaginationNext
            href={page < totalPages - 1 ? href(page + 1) : undefined}
            aria-disabled={page === totalPages - 1}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
