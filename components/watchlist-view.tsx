"use client"

import Link from "next/link"
import useSWR from "swr"
import { Mail, Star } from "lucide-react"
import type { Currency } from "@/lib/cbdc-api"
import { formatYear } from "@/lib/cbdc-api"
import { StatusBadge } from "@/components/status-badge"
import { WatchButton } from "@/components/watch-button"
import { useWatchlistTags } from "@/hooks/use-watchlist"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { companyDetails } from "@/lib/company-details"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function WatchlistView() {
  const { data: currencies } = useSWR<Currency[]>("/api/currencies", fetcher)
  const watched = useWatchlistTags()

  const watchedCurrencies = (currencies ?? []).filter((c) => watched.has(c.tag))

  return (
    <div className="flex flex-col gap-8">
      {watchedCurrencies.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Star />
            </EmptyMedia>
            <EmptyTitle>Your watchlist is empty</EmptyTitle>
            <EmptyDescription>
              Star any currency from the{" "}
              <Link href="/currencies" className="text-primary hover:underline">
                Currencies
              </Link>{" "}
              directory to track it here.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Currency</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden text-right sm:table-cell">Announced</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {watchedCurrencies.map((c) => (
                <TableRow key={c.uid}>
                  <TableCell className="font-medium">
                    <Link href={`/currency/${c.tag}`} className="hover:text-primary">
                      {c.digitalCurrency ?? "Name not listed"}
                    </Link>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{c.country}</TableCell>
                  <TableCell>
                    <StatusBadge status={c.status} />
                  </TableCell>
                  <TableCell className="hidden text-right font-mono text-xs text-muted-foreground sm:table-cell">
                    {formatYear(c.announcementYear)}
                  </TableCell>
                  <TableCell>
                    <WatchButton tag={c.tag} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="size-4 text-primary" aria-hidden="true" />
            Email alerts are not available yet
          </CardTitle>
          <CardDescription>Watchlist changes are not currently sent by email.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This page does not collect an email address. For general enquiries, email{" "}
            <a href={`mailto:${companyDetails.email}`} className="text-primary hover:underline">
              {companyDetails.email}
            </a>
            .
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-muted-foreground">
            {watchedCurrencies.length} currenc{watchedCurrencies.length === 1 ? "y" : "ies"} on your watchlist
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
