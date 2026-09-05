import { fetchCurrencyByTag } from "@/lib/cbdc-api"

export async function GET(_request: Request, { params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  try {
    const data = await fetchCurrencyByTag(tag)
    if (!data) {
      return Response.json({ error: "Not found" }, { status: 404 })
    }
    return Response.json(data)
  } catch (error) {
    console.error("Failed to fetch currency:", error)
    return Response.json({ error: "Failed to load currency" }, { status: 502 })
  }
}
