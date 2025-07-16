"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Navigation, Clock, Leaf, Car, Bike, Train, Footprints } from "lucide-react"

export default function TravelPlannerPage() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [routes, setRoutes] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const handlePlanRoute = async () => {
    if (!from || !to) return

    setLoading(true)
    // Simulate AI route planning
    setTimeout(() => {
      setRoutes([
        {
          mode: "bike",
          icon: Bike,
          duration: "22 min",
          distance: "4.2 km",
          co2Saved: "2.1 kg",
          calories: "180",
          cost: "Free",
          ecoScore: 95,
          color: "green",
        },
        {
          mode: "walk + transit",
          icon: Train,
          duration: "28 min",
          distance: "5.1 km",
          co2Saved: "1.8 kg",
          calories: "120",
          cost: "$3.50",
          ecoScore: 88,
          color: "blue",
        },
        {
          mode: "walking",
          icon: Footprints,
          duration: "45 min",
          distance: "3.8 km",
          co2Saved: "2.3 kg",
          calories: "220",
          cost: "Free",
          ecoScore: 100,
          color: "emerald",
        },
        {
          mode: "car",
          icon: Car,
          duration: "15 min",
          distance: "4.5 km",
          co2Saved: "0 kg",
          calories: "0",
          cost: "$8.20",
          ecoScore: 25,
          color: "red",
        },
      ])
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Navigation className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Eco Travel Planner</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Route Planning Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Plan Your Route</span>
                </CardTitle>
                <CardDescription>Get AI-powered sustainable transportation recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="from">From</Label>
                  <Input
                    id="from"
                    placeholder="Enter starting location"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="to">To</Label>
                  <Input id="to" placeholder="Enter destination" value={to} onChange={(e) => setTo(e.target.value)} />
                </div>
                <Button
                  onClick={handlePlanRoute}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={loading || !from || !to}
                >
                  {loading ? "Planning Route..." : "Find Best Route"}
                </Button>
              </CardContent>
            </Card>

            {/* Today's Impact */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <span>Today's Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">CO₂ Saved</span>
                    <span className="font-semibold text-green-600">4.2 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Calories Burned</span>
                    <span className="font-semibold">320 cal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Money Saved</span>
                    <span className="font-semibold text-blue-600">$12.50</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Route Results */}
          <div className="lg:col-span-2">
            {routes.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Route Options</h2>
                <p className="text-gray-600">Ranked by sustainability score</p>

                {routes.map((route, index) => {
                  const IconComponent = route.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full bg-${route.color}-100`}>
                              <IconComponent className={`h-6 w-6 text-${route.color}-600`} />
                            </div>
                            <div>
                              <h3 className="font-semibold capitalize">{route.mode}</h3>
                              <p className="text-sm text-gray-600">{route.distance}</p>
                            </div>
                          </div>
                          <Badge
                            variant={
                              route.ecoScore > 80 ? "default" : route.ecoScore > 50 ? "secondary" : "destructive"
                            }
                            className="text-sm"
                          >
                            Eco Score: {route.ecoScore}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>{route.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Leaf className="h-4 w-4 text-green-500" />
                            <span>{route.co2Saved} CO₂</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Calories: </span>
                            <span className="font-medium">{route.calories}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Cost: </span>
                            <span className="font-medium">{route.cost}</span>
                          </div>
                        </div>

                        <Separator className="my-4" />

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-600">
                            {route.ecoScore > 80 && "🌟 Highly recommended for sustainability"}
                            {route.ecoScore <= 80 && route.ecoScore > 50 && "👍 Good eco-friendly option"}
                            {route.ecoScore <= 50 && "⚠️ Consider a greener alternative"}
                          </div>
                          <Button size="sm" variant="outline">
                            Select Route
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}

            {routes.length === 0 && !loading && (
              <Card className="h-96 flex items-center justify-center">
                <CardContent className="text-center">
                  <Navigation className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Plan Your Eco-Friendly Route</h3>
                  <p className="text-gray-500">
                    Enter your starting point and destination to get AI-powered sustainable transportation
                    recommendations.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
