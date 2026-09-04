// Maps CBDC Tracker country names to the names used in the world-atlas
// (Natural Earth) topojson so the choropleth map can match them.
const NAME_OVERRIDES: Record<string, string> = {
  "Czech Republic": "Czechia",
  "Russian Federation": "Russia",
  Eswatini: "eSwatini",
  "Solomon Islands": "Solomon Is.",
  "Republic of Palau": "Palau",
}

/** Splits a possibly multi-country CBDC record ("Singapore, Switzerland, Euro Area")
 * into individual topojson-comparable country names, dropping non-country regions. */
export function splitCountryNames(raw: string): string[] {
  return raw
    .split(",")
    .map((part) => part.trim())
    .map((part) => NAME_OVERRIDES[part] ?? part)
    .filter((part) => !/Area|Union|OECS|ECCU|EMCCA|WAMU/i.test(part))
}
