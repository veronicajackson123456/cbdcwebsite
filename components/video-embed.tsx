"use client"

import { useState } from "react"

export function VideoEmbed({ title, videoId, source, duration }: { title: string; videoId: string; source: string; duration: string }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="relative aspect-video w-full bg-black">
        {isPlaying ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="group absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/25 via-slate-950 to-slate-950 text-center text-white transition hover:from-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${title}`}
          >
            <span className="flex flex-col items-center gap-3">
              <span className="flex size-16 items-center justify-center rounded-full bg-primary text-2xl shadow-lg transition group-hover:scale-105">▶</span>
              <span className="font-medium">Click to play</span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-2 p-4">
        <span className="text-sm font-medium text-foreground">{title}</span>
        <span className="text-xs text-muted-foreground">{source} · {duration}</span>
      </figcaption>
    </figure>
  )
}

export function VideoSection({ title, videoId, source, duration }: { title: string; videoId: string; source: string; duration: string }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <VideoEmbed title={title} videoId={videoId} source={source} duration={duration} />
    </section>
  )
}
