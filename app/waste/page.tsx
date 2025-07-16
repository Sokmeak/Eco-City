"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Recycle, Plus, TrendingDown, Award, Lightbulb } from "lucide-react"

export default function WasteTrackerPage() {
  const [wasteEntries, setWasteEntries] = useState([
    { id: 1, type: "plastic", amount: 0.5, date: "2024-01-15", category: "bottles" },
    { id: 2, type: "organic", amount: 1.2, date: "2024-01-15", category: "food_waste" },
    { id: 3, type: "paper", amount: 0.3, date: "2024-01-14", category: "packaging" },
  ])

  const [newEntry, setNewEntry] = useState({
    type: "",
    amount: "",
    category: "",
  })

  const wasteTypes = [
    { value: "plastic", label: "Plastic", color: "blue" },
    { value: "organic", label: "Organic", color: "green" },
    { value: "paper", label: "Paper", color: "yellow" },
    { value: "glass", label: "Glass", color: "purple" },
    { value: "metal", label: "Metal", color: "gray" },
  ]

  const weeklyGoal = 5.0 // kg
  const currentWeekWaste = wasteEntries.reduce((sum, entry) => sum + entry.amount, 0)
  const reductionTips = [
    "Use reusable bags when shopping",
    "Compost organic waste at home",
    "Choose products with minimal packaging",
    "Repair items instead of throwing them away",
    "Buy in bulk to reduce packaging waste",
  ]

  const handleAddEntry = () => {
    if (newEntry.type && newEntry.amount && newEntry.category) {
      const entry = {
        id: Date.now(),
        type: newEntry.type,
        amount: Number.parseFloat(newEntry.amount),
        date: new Date().toISOString().split("T")[0],
        category: newEntry.category,
      }
      setWasteEntries([...wasteEntries, entry])
      setNewEntry({ type: "", amount: "", category: "" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Smart Waste Tracker</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Add Waste Entry */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="h-5 w-5" />
                  <span>Log Waste</span>
                </CardTitle>
                <CardDescription>Track your daily waste to get personalized reduction tips</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="waste-type">Waste Type</Label>
                  <Select value={newEntry.type} onValueChange={(value) => setNewEntry({ ...newEntry, type: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select waste type" />
                    </SelectTrigger>
                    <SelectContent>
                      {wasteTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="amount">Amount (kg)</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.1"
                    placeholder="0.0"
                    value={newEntry.amount}
                    onChange={(e) => setNewEntry({ ...newEntry, amount: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    placeholder="e.g., food waste, packaging"
                    value={newEntry.category}
                    onChange={(e) => setNewEntry({ ...newEntry, category: e.target.value })}
                  />
                </div>
                <Button
                  onClick={handleAddEntry}
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!newEntry.type || !newEntry.amount || !newEntry.category}
                >
                  Add Entry
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Goal */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <span>Weekly Goal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Current: {currentWeekWaste.toFixed(1)} kg</span>
                    <span>Goal: {weeklyGoal} kg</span>
                  </div>
                  <Progress value={(currentWeekWaste / weeklyGoal) * 100} />
                  <div className="text-center">
                    {currentWeekWaste < weeklyGoal ? (
                      <Badge variant="default" className="bg-green-600">
                        <TrendingDown className="h-3 w-3 mr-1" />
                        On Track!
                      </Badge>
                    ) : (
                      <Badge variant="destructive">Goal Exceeded</Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Waste Overview & Tips */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Entries */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Waste Entries</CardTitle>
                <CardDescription>Your latest waste tracking data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {wasteEntries
                    .slice(-5)
                    .reverse()
                    .map((entry) => {
                      const wasteType = wasteTypes.find((t) => t.value === entry.type)
                      return (
                        <div key={entry.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full bg-${wasteType?.color}-500`}></div>
                            <div>
                              <p className="font-medium capitalize">{entry.type}</p>
                              <p className="text-sm text-gray-600">{entry.category}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{entry.amount} kg</p>
                            <p className="text-sm text-gray-600">{entry.date}</p>
                          </div>
                        </div>
                      )
                    })}
                </div>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-yellow-600" />
                  <span>AI Waste Reduction Tips</span>
                </CardTitle>
                <CardDescription>Personalized recommendations based on your waste patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {reductionTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Waste Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Waste Breakdown</CardTitle>
                <CardDescription>This week's waste by type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {wasteTypes.map((type) => {
                    const typeWaste = wasteEntries
                      .filter((entry) => entry.type === type.value)
                      .reduce((sum, entry) => sum + entry.amount, 0)
                    const percentage = currentWeekWaste > 0 ? (typeWaste / currentWeekWaste) * 100 : 0

                    return (
                      <div key={type.value}>
                        <div className="flex justify-between mb-2">
                          <span className="capitalize font-medium">{type.label}</span>
                          <span className="text-sm text-gray-600">
                            {typeWaste.toFixed(1)} kg ({percentage.toFixed(0)}%)
                          </span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
