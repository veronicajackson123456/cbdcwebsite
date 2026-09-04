import { fetchHistory } from "@/lib/cbdc-api"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get("page") ?? "0")
  const size = Number(searchParams.get("size") ?? "20")
  try {
    const data = await fetchHistory(page, size)
    return Response.json(data)
  } catch (error) {
    console.error("[v0] Failed to fetch history:", error)
    return Response.json({ error: "Failed to load history" }, { status: 502 })
  }
}
