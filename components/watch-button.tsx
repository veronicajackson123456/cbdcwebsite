"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsWatched } from "@/hooks/use-watchlist"
import { cn } from "@/lib/utils"

export function WatchButton({ tag }: { tag: string }) {
  const [watched, toggle] = useIsWatched(tag)

  return (
    <Button variant={watched ? "default" : "outline"} size="sm" onClick={toggle}>
      <Star data-icon="inline-start" className={cn(watched && "fill-current")} />
      {watched ? "On watchlist" : "Add to watchlist"}
    </Button>
  )
}
