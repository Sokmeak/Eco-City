"use client"

import dynamic from "next/dynamic"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Droplets, Car, Recycle, TrendingUp, TrendingDown, Award, Target, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Dynamic import for charts to avoid SSR issues
const BarChart = dynamic(() => import("recharts").then((mod) => ({ default: mod.BarChart })), { ssr: false })
const Bar = dynamic(() => import("recharts").then((mod) => ({ default: mod.Bar })), { ssr: false })
const LineChart = dynamic(() => import("recharts").then((mod) => ({ default: mod.LineChart })), { ssr: false })
const Line = dynamic(() => import("recharts").then((mod) => ({ default: mod.Line })), { ssr: false })
const PieChart = dynamic(() => import("recharts").then((mod) => ({ default: mod.PieChart })), { ssr: false })
const Pie = dynamic(() => import("recharts").then((mod) => ({ default: mod.Pie })), { ssr: false })
const XAxis = dynamic(() => import("recharts").then((mod) => ({ default: mod.XAxis })), { ssr: false })
const YAxis = dynamic(() => import("recharts").then((mod) => ({ default: mod.YAxis })), { ssr: false })
const CartesianGrid = dynamic(() => import("recharts").then((mod) => ({ default: mod.CartesianGrid })), { ssr: false })
const Tooltip = dynamic(() => import("recharts").then((mod) => ({ default: mod.Tooltip })), { ssr: false })
const ResponsiveContainer = dynamic(() => import("recharts").then((mod) => ({ default: mod.ResponsiveContainer })), {
  ssr: false,
})
const Cell = dynamic(() => import("recharts").then((mod) => ({ default: mod.Cell })), { ssr: false })

export default function DashboardPage() {
  const greenScore = 78
  const monthlyData = [
    { month: "Jan", energy: 450, water: 320, waste: 25, transport: 180 },
    { month: "Feb", energy: 420, water: 310, waste: 22, transport: 165 },
    { month: "Mar", energy: 380, water: 295, waste: 20, transport: 150 },
    { month: "Apr", energy: 360, water: 280, waste: 18, transport: 140 },
    { month: "May", energy: 340, water: 270, waste: 16, transport: 130 },
    { month: "Jun", energy: 320, water: 260, waste: 15, transport: 125 },
  ]

  const wasteBreakdown = [
    { name: "Organic", value: 40, color: "#10B981" },
    { name: "Plastic", value: 25, color: "#3B82F6" },
    { name: "Paper", value: 20, color: "#F59E0B" },
    { name: "Glass", value: 10, color: "#8B5CF6" },
    { name: "Metal", value: 5, color: "#6B7280" },
  ]

  const achievements = [
    { title: "Eco Warrior", description: "Maintained green score above 75 for 30 days", icon: Award, earned: true },
    { title: "Waste Reducer", description: "Reduced waste by 20% this month", icon: Recycle, earned: true },
    { title: "Energy Saver", description: "Cut energy usage by 15%", icon: Zap, earned: false },
    { title: "Green Commuter", description: "Used sustainable transport 80% of the time", icon: Car, earned: true },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BarChart className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Green Score Dashboard</span>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/profile">
                <Button variant="ghost" className="text-gray-700 hover:text-green-600">
                  Profile
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="text-gray-700 hover:text-green-600">
                  About
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Green Score</CardTitle>
              <Leaf className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{greenScore}</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5 from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Energy Usage</CardTitle>
              <Zap className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">320 kWh</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingDown className="h-3 w-3 mr-1" />
                -12% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Water Usage</CardTitle>
              <Droplets className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">260 L</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingDown className="h-3 w-3 mr-1" />
                -8% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Waste Generated</CardTitle>
              <Recycle className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15 kg</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingDown className="h-3 w-3 mr-1" />
                -25% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Charts Section */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="trends" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="trends">Trends</TabsTrigger>
                <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
                <TabsTrigger value="goals">Goals</TabsTrigger>
              </TabsList>

              <TabsContent value="trends">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Sustainability Trends</CardTitle>
                    <CardDescription>Track your environmental impact over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="energy" stroke="#F59E0B" strokeWidth={2} />
                        <Line type="monotone" dataKey="water" stroke="#3B82F6" strokeWidth={2} />
                        <Line type="monotone" dataKey="waste" stroke="#EF4444" strokeWidth={2} />
                        <Line type="monotone" dataKey="transport" stroke="#10B981" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="breakdown">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Waste Composition</CardTitle>
                      <CardDescription>This month's waste breakdown</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                          <Pie
                            data={wasteBreakdown}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {wasteBreakdown.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Comparison</CardTitle>
                      <CardDescription>Current vs previous month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={250}>
                        <BarChart
                          data={[
                            { category: "Energy", current: 320, previous: 365 },
                            { category: "Water", current: 260, previous: 285 },
                            { category: "Waste", current: 15, previous: 20 },
                            { category: "Transport", current: 125, previous: 140 },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="category" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="current" fill="#10B981" />
                          <Bar dataKey="previous" fill="#D1D5DB" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="goals">
                <Card>
                  <CardHeader>
                    <CardTitle>Sustainability Goals</CardTitle>
                    <CardDescription>Track your progress towards environmental targets</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Reduce Energy Usage by 20%</span>
                        <span className="text-sm text-gray-600">12% achieved</span>
                      </div>
                      <Progress value={60} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Cut Waste Generation by 30%</span>
                        <span className="text-sm text-gray-600">25% achieved</span>
                      </div>
                      <Progress value={83} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Use Sustainable Transport 80% of time</span>
                        <span className="text-sm text-gray-600">75% achieved</span>
                      </div>
                      <Progress value={94} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Maintain Green Score above 80</span>
                        <span className="text-sm text-gray-600">78/80</span>
                      </div>
                      <Progress value={98} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 p-3 rounded-lg ${achievement.earned ? "bg-green-50" : "bg-gray-50"}`}
                    >
                      <IconComponent
                        className={`h-5 w-5 mt-0.5 ${achievement.earned ? "text-green-600" : "text-gray-400"}`}
                      />
                      <div className="flex-1">
                        <h4 className={`font-medium ${achievement.earned ? "text-green-900" : "text-gray-600"}`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-sm ${achievement.earned ? "text-green-700" : "text-gray-500"}`}>
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.earned && (
                        <Badge variant="default" className="bg-green-600">
                          Earned
                        </Badge>
                      )}
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  <span>AI Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-1">Energy Optimization</h4>
                  <p className="text-sm text-blue-700">Switch to LED bulbs to reduce energy consumption by 15%</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-1">Waste Reduction</h4>
                  <p className="text-sm text-green-700">Start composting to reduce organic waste by 40%</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-1">Transportation</h4>
                  <p className="text-sm text-purple-700">Bike to work 2 more days per week to boost your score</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
