"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import type { Currency } from "@/lib/cbdc-api"
import { statusDotColor } from "@/components/status-badge"
import { splitCountryNames } from "@/lib/country-map"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const STATUS_PRIORITY = ["Launched", "Pilot", "Proof of concept", "Research", "Cancelled"] as const

interface CountryInfo {
  status: (typeof STATUS_PRIORITY)[number]
  currencies: Currency[]
}

interface HoverState {
  name: string
  info: CountryInfo | null
  x: number
  y: number
}

export function WorldMap({ currencies }: { currencies: Currency[] }) {
  const router = useRouter()
  const [hover, setHover] = useState<HoverState | null>(null)

  const byCountry = useMemo(() => {
    const map = new Map<string, CountryInfo>()
    for (const currency of currencies) {
      for (const name of splitCountryNames(currency.country)) {
        const existing = map.get(name)
        if (!existing) {
          map.set(name, { status: currency.status, currencies: [currency] })
        } else {
          existing.currencies.push(currency)
          if (STATUS_PRIORITY.indexOf(currency.status) < STATUS_PRIORITY.indexOf(existing.status)) {
            existing.status = currency.status
          }
        }
      }
    }
    return map
  }, [currencies])

  return (
    <div className="relative">
      <ComposableMap
        projectionConfig={{ scale: 145 }}
        width={980}
        height={480}
        className="w-full [&_svg]:outline-none"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string
              const info = byCountry.get(name) ?? null
              const fill = info ? statusDotColor(info.status) : "var(--muted)"
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(event) => {
                    setHover({ name, info, x: event.clientX, y: event.clientY })
                  }}
                  onMouseMove={(event) => {
                    setHover((prev) => (prev ? { ...prev, x: event.clientX, y: event.clientY } : prev))
                  }}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => {
                    if (info?.currencies[0]) router.push(`/currency/${info.currencies[0].tag}`)
                  }}
                  style={{
                    default: {
                      fill,
                      fillOpacity: info ? 0.85 : 0.35,
                      stroke: "var(--border)",
                      strokeWidth: 0.4,
                      outline: "none",
                      cursor: info ? "pointer" : "default",
                    },
                    hover: {
                      fill,
                      fillOpacity: 1,
                      stroke: "var(--foreground)",
                      strokeWidth: 0.6,
                      outline: "none",
                    },
                    pressed: {
                      fill,
                      fillOpacity: 1,
                      stroke: "var(--foreground)",
                      strokeWidth: 0.6,
                      outline: "none",
                    },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>

      {hover && (
        <div
          className="pointer-events-none fixed z-50 max-w-64 rounded-md border border-border bg-popover px-3 py-2 text-xs shadow-lg"
          style={{ left: hover.x + 12, top: hover.y + 12 }}
        >
          <p className="font-medium text-popover-foreground">{hover.name}</p>
          {hover.info ? (
            <div className="mt-1 flex flex-col gap-0.5 text-muted-foreground">
              {hover.info.currencies.slice(0, 3).map((c) => (
                <span key={c.uid}>
                  {c.digitalCurrency} — {c.status}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-1 text-muted-foreground">No CBDC initiative tracked</p>
          )}
        </div>
      )}
    </div>
  )
}
