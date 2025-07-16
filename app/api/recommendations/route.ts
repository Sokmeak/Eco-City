import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { userProfile, category } = await request.json()

    const prompt = `Based on the following user sustainability profile, generate 3 personalized recommendations for ${category}:

User Profile:
- Green Score: ${userProfile.greenScore}
- Energy Usage: ${userProfile.energyUsage} kWh/month
- Water Usage: ${userProfile.waterUsage} L/day
- Waste Generation: ${userProfile.wasteGeneration} kg/week
- Transportation: ${userProfile.transportation}
- Location: ${userProfile.location}

Please provide specific, actionable recommendations that would help improve their sustainability score. Format as JSON with title, description, and impact fields.`

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      system:
        "You are an AI sustainability expert. Provide practical, personalized recommendations for eco-friendly living based on user data.",
    })

    return NextResponse.json({ recommendations: text })
  } catch (error) {
    console.error("Error generating recommendations:", error)
    return NextResponse.json({ error: "Failed to generate recommendations" }, { status: 500 })
  }
}
