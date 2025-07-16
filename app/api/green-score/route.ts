import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { activities } = await request.json()

    const prompt = `Calculate a sustainability score (0-100) based on these user activities:

Activities:
${activities.map((activity: any) => `- ${activity.type}: ${activity.value} (${activity.date})`).join("\n")}

Consider factors like:
- Energy consumption patterns
- Transportation choices
- Waste generation
- Water usage
- Sustainable product choices

Provide a score with explanation of how it was calculated and specific areas for improvement.`

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      system:
        "You are an AI sustainability calculator. Analyze user activities and provide accurate green scores with detailed explanations.",
    })

    return NextResponse.json({ analysis: text })
  } catch (error) {
    console.error("Error calculating green score:", error)
    return NextResponse.json({ error: "Failed to calculate green score" }, { status: 500 })
  }
}
