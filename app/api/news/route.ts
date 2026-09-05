import { fetchNews } from "@/lib/cbdc-api"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get("page") ?? "0")
  const size = Number(searchParams.get("size") ?? "20")
  try {
    const data = await fetchNews(page, size)
    return Response.json(data)
  } catch (error) {
    console.error("Failed to fetch news:", error)
    return Response.json({ error: "Failed to load news" }, { status: 502 })
  }
}
