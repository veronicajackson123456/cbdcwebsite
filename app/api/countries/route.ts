import { fetchCountries } from "@/lib/cbdc-api"

export async function GET() {
  try {
    const data = await fetchCountries()
    return Response.json(data)
  } catch (error) {
    console.error("Failed to fetch countries:", error)
    return Response.json({ error: "Failed to load countries" }, { status: 502 })
  }
}
