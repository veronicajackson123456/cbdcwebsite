"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Search, Star } from "lucide-react"
import type { Currency } from "@/lib/cbdc-api"
import { STATUS_LIST, formatYear } from "@/lib/cbdc-api"
import { StatusBadge } from "@/components/status-badge"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { useWatchlistTags } from "@/hooks/use-watchlist"

export function CurrencyTable({ currencies }: { currencies: Currency[] }) {
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState<string>("all")
  const watched = useWatchlistTags()

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return currencies
      .filter((c) => (status === "all" ? true : c.status === status))
      .filter((c) =>
        q
          ? c.digitalCurrency.toLowerCase().includes(q) ||
            c.country.toLowerCase().includes(q) ||
            c.centralBank.toLowerCase().includes(q)
          : true,
      )
      .sort((a, b) => a.country.localeCompare(b.country))
  }, [currencies, query, status])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <InputGroup className="sm:max-w-xs">
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search by name, country, or bank"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputGroup>
        <Select value={status} onValueChange={(value) => setStatus(value ?? "all")}>
          <SelectTrigger className="sm:w-48">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All statuses</SelectItem>
              {STATUS_LIST.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground sm:ml-auto">
          {filtered.length} of {currencies.length} projects
        </p>
      </div>

      <div className="rounded-lg border border-border">
        <Table className="table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-8" />
              <TableHead className="w-[24%]">Currency</TableHead>
              <TableHead className="w-[18%]">Country</TableHead>
              <TableHead className="hidden w-[30%] md:table-cell">Central bank</TableHead>
              <TableHead className="w-[18%]">Status</TableHead>
              <TableHead className="hidden w-[10%] text-right sm:table-cell">Announced</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((c) => (
              <TableRow key={c.uid} className="group">
                <TableCell className="w-8">
                  {watched.has(c.tag) && <Star className="size-3.5 fill-primary text-primary" />}
                </TableCell>
                <TableCell className="truncate font-medium">
                  <Link href={`/currency/${c.tag}`} className="hover:text-primary">
                    {c.digitalCurrency}
                  </Link>
                </TableCell>
                <TableCell className="truncate text-muted-foreground">{c.country}</TableCell>
                <TableCell className="hidden truncate text-muted-foreground md:table-cell">
                  {c.centralBank}
                </TableCell>
                <TableCell>
                  <StatusBadge status={c.status} />
                </TableCell>
                <TableCell className="hidden text-right font-mono text-xs text-muted-foreground sm:table-cell">
                  {formatYear(c.announcementYear)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filtered.length === 0 && (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Search />
            </EmptyMedia>
            <EmptyTitle>No matching currencies</EmptyTitle>
            <EmptyDescription>Try adjusting your search or status filter.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  )
}
