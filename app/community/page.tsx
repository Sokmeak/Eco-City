"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Users, Calendar, MapPin, Medal, Target, Zap, Recycle, Bike, TreePine } from "lucide-react"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("challenges")

  const challenges = [
    {
      id: 1,
      title: "Zero Waste Week",
      description: "Reduce household waste to under 1kg for the entire week",
      participants: 1247,
      progress: 65,
      timeLeft: "3 days left",
      reward: "Green Champion Badge",
      difficulty: "Medium",
      category: "waste",
    },
    {
      id: 2,
      title: "Bike to Work Challenge",
      description: "Use bicycle for commuting at least 4 days this week",
      participants: 892,
      progress: 82,
      timeLeft: "2 days left",
      reward: "Eco Commuter Badge",
      difficulty: "Easy",
      category: "transport",
    },
    {
      id: 3,
      title: "Energy Saver Month",
      description: "Reduce energy consumption by 20% compared to last month",
      participants: 2156,
      progress: 43,
      timeLeft: "18 days left",
      reward: "Power Saver Trophy",
      difficulty: "Hard",
      category: "energy",
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Sarah Chen", score: 2450, badge: "Eco Legend", avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 2, name: "Mike Johnson", score: 2380, badge: "Green Guru", avatar: "/placeholder.svg?height=40&width=40" },
    {
      rank: 3,
      name: "Emma Davis",
      score: 2290,
      badge: "Sustainability Star",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      rank: 4,
      name: "Alex Rodriguez",
      score: 2180,
      badge: "Eco Warrior",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    { rank: 5, name: "Lisa Wang", score: 2120, badge: "Green Champion", avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 6, name: "You", score: 1980, badge: "Eco Enthusiast", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  const events = [
    {
      id: 1,
      title: "Community Garden Cleanup",
      date: "2024-01-20",
      time: "9:00 AM",
      location: "Central Park Community Garden",
      attendees: 45,
      type: "volunteer",
    },
    {
      id: 2,
      title: "Sustainable Living Workshop",
      date: "2024-01-22",
      time: "2:00 PM",
      location: "City Library - Main Hall",
      attendees: 78,
      type: "workshop",
    },
    {
      id: 3,
      title: "Green Tech Expo",
      date: "2024-01-25",
      time: "10:00 AM",
      location: "Convention Center",
      attendees: 234,
      type: "expo",
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "waste":
        return Recycle
      case "transport":
        return Bike
      case "energy":
        return Zap
      default:
        return TreePine
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Community Hub</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Members</p>
                  <p className="text-2xl font-bold text-green-600">12,847</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Challenges</p>
                  <p className="text-2xl font-bold text-blue-600">8</p>
                </div>
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">CO₂ Saved</p>
                  <p className="text-2xl font-bold text-purple-600">2.4T</p>
                </div>
                <TreePine className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Your Rank</p>
                  <p className="text-2xl font-bold text-yellow-600">#6</p>
                </div>
                <Medal className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="challenges">
            <div className="grid lg:grid-cols-2 gap-6">
              {challenges.map((challenge) => {
                const IconComponent = getCategoryIcon(challenge.category)
                return (
                  <Card key={challenge.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-green-100 rounded-full">
                            <IconComponent className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{challenge.title}</CardTitle>
                            <CardDescription>{challenge.description}</CardDescription>
                          </div>
                        </div>
                        <Badge className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{challenge.participants.toLocaleString()} participants</span>
                        </div>
                        <span>{challenge.timeLeft}</span>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{challenge.progress}%</span>
                        </div>
                        <Progress value={challenge.progress} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Trophy className="h-4 w-4 text-yellow-500" />
                          <span>{challenge.reward}</span>
                        </div>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Join Challenge
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  <span>Community Leaderboard</span>
                </CardTitle>
                <CardDescription>Top sustainability champions this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center space-x-4 p-4 rounded-lg ${user.name === "You" ? "bg-blue-50 border-2 border-blue-200" : "bg-gray-50"}`}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 font-bold text-gray-700">
                        {user.rank <= 3 ? (
                          <Medal
                            className={`h-5 w-5 ${user.rank === 1 ? "text-yellow-500" : user.rank === 2 ? "text-gray-400" : "text-amber-600"}`}
                          />
                        ) : (
                          user.rank
                        )}
                      </div>
                      <Avatar>
                        <AvatarImage src={user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.badge}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{user.score.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid lg:grid-cols-2 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span>{event.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {event.date} at {event.time}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <Badge variant="outline" className="capitalize">
                        {event.type}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Join Event
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
