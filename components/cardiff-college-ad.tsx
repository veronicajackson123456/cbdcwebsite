import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

const CARDIFF_COLLEGE_URL = "https://www.ccoex.com/"
const CARDIFF_LOGO_SRC =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/816c3086b0059631254c6da07fd60c01fe9f878ef8093550c309fcbdfcf6e534.0-OV3LlA3zXgFsCOhjYs3RIV9HTEv5o9.png"
const CARDIFF_CAMPUS_SRC =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CSFC-Academic-Hub-C_1200-SMF0AXCHjDrJroMRcGadsMhwqFwd6W.webp"

export function CardiffCollegeAd() {
  return (
    <section
      aria-labelledby="cardiff-sixth-form-ad-heading"
      aria-label="Advertisement for Cardiff Sixth Form College"
      className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8"
    >
      <div className="relative isolate overflow-hidden rounded-3xl border border-red-200/20 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white shadow-2xl shadow-slate-950/25">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-red-300/10"
        />
        <div className="relative grid items-center gap-6 p-5 sm:gap-8 sm:p-7 lg:grid-cols-[minmax(0,1fr)_15rem] lg:p-8">
          <div className="grid justify-items-center gap-5 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:items-center sm:justify-items-stretch">
            <Image
              src={CARDIFF_LOGO_SRC}
              alt="Cardiff Sixth Form College logo"
              width={400}
              height={400}
              unoptimized
              className="size-24 shrink-0 rounded-2xl border border-white/70 bg-white p-1.5 shadow-xl sm:size-28"
            />
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <p className="inline-flex items-center rounded-full border border-red-200/35 bg-red-500/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-red-100">
                ADVERTISEMENT
              </p>
              <h2
                id="cardiff-sixth-form-ad-heading"
                className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                UK’s Top Independent School for A-Level Results
              </h2>
              <p className="mt-2 text-sm font-medium leading-6 text-slate-200 sm:text-base">
                Cardiff Sixth Form College – Apply Now
              </p>
            </div>
            <a
              className={buttonVariants({ size: "sm", className: "sm:justify-self-start" })}
              href={CARDIFF_COLLEGE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <ArrowUpRight data-icon="inline-end" />
            </a>
          </div>
          <Image
            src={CARDIFF_CAMPUS_SRC}
            alt="Cardiff Sixth Form College campus at Cardiff Bay"
            width={1200}
            height={800}
            unoptimized
            className="hidden h-40 w-full rounded-2xl object-cover shadow-xl ring-1 ring-white/10 lg:block"
          />
        </div>
      </div>
    </section>
  )
}
