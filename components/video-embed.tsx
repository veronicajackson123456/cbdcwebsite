import { ExternalLink } from "lucide-react"

export function VideoEmbed({ title, videoId, source, duration }: { title: string; videoId: string; source: string; duration: string }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="aspect-video w-full bg-black">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
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
