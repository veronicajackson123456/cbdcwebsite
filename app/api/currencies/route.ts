import { fetchCurrencies } from "@/lib/cbdc-api"

export async function GET() {
  try {
    const data = await fetchCurrencies()
    return Response.json(data)
  } catch (error) {
    console.error("Failed to fetch currencies:", error)
    return Response.json({ error: "Failed to load currencies" }, { status: 502 })
  }
}
