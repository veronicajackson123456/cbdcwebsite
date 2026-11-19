import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

const DOLPHIN_MOTORHOMES_URL = "https://www.dolphinmotorhomes.co.uk/"
const DOLPHIN_LOGO_SRC =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20261119_181701.jpg-aW4iZfOmUvaNZNB5vJfD1IEcSkRa0K.jpeg"
const DOLPHIN_MOTORHOME_SRC =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HX61FHP%5EL55682.jpg-1tw28e04bafsmYAeq1A7EUsZoxJ6MY.jpeg"

export function DolphinMotorhomesAd() {
  return (
    <section
      aria-labelledby="dolphin-motorhomes-ad-heading"
      aria-label="Advertisement for Dolphin Motorhomes Ltd"
      className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8"
    >
      <div className="relative isolate overflow-hidden rounded-3xl border border-sky-200/15 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white shadow-2xl shadow-slate-950/25">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-sky-300/10"
        />
        <div className="relative grid items-center gap-6 p-5 sm:gap-8 sm:p-7 lg:grid-cols-[minmax(0,1fr)_15rem] lg:p-8">
          <div className="grid justify-items-center gap-5 md:grid-cols-[9rem_minmax(0,1fr)_auto] md:items-center md:justify-items-stretch">
            <div className="flex h-24 w-36 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 p-2 shadow-xl md:h-28 md:w-40">
              <Image
                src={DOLPHIN_LOGO_SRC}
                alt="Dolphin Motorhomes logo"
                width={1077}
                height={700}
                unoptimized
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <p className="inline-flex items-center rounded-full border border-sky-200/30 bg-sky-400/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sky-100">
                ADVERTISEMENT
              </p>
              <h2
                id="dolphin-motorhomes-ad-heading"
                className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                New &amp; Used Motorhomes for Sale
              </h2>
              <p className="mt-2 text-sm font-medium leading-6 text-slate-200 sm:text-base">
                Dolphin Motorhomes – View Stock
              </p>
            </div>
            <a
              className={buttonVariants({ size: "sm", className: "md:justify-self-start" })}
              href={DOLPHIN_MOTORHOMES_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse Motorhomes <ArrowUpRight data-icon="inline-end" />
            </a>
          </div>
          <Image
            src={DOLPHIN_MOTORHOME_SRC}
            alt="White motorhome displayed outside the Dolphin Motorhomes dealership"
            width={600}
            height={450}
            unoptimized
            className="hidden h-44 w-full rounded-2xl object-cover shadow-xl ring-1 ring-white/10 lg:block"
          />
        </div>
      </div>
    </section>
  )
}
