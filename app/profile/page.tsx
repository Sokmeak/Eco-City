"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Settings,
  Shield,
  Award,
  Target,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Edit,
  Camera,
  Leaf,
  Zap,
  Droplets,
  Recycle,
  Car,
  Save,
  Eye,
  EyeOff,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate about sustainable living and environmental conservation. Love biking to work and growing my own vegetables!",
    location: "San Francisco, CA",
    joinDate: "January 2024",
    avatar: "/placeholder.svg?height=100&width=100",
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: true,
    weeklyReports: true,
    communityUpdates: true,
    challengeReminders: true,
    dataSharing: false,
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const achievements = [
    { title: "Eco Warrior", description: "Green score above 75 for 30 days", earned: true, date: "March 2024" },
    { title: "Waste Reducer", description: "Reduced waste by 20%", earned: true, date: "February 2024" },
    { title: "Green Commuter", description: "Sustainable transport 80% of time", earned: true, date: "January 2024" },
    { title: "Energy Saver", description: "Cut energy usage by 15%", earned: false, date: null },
    { title: "Community Leader", description: "Complete 5 challenges", earned: false, date: null },
  ]

  const stats = [
    { label: "Green Score", value: 78, icon: Leaf, color: "text-green-600", max: 100 },
    { label: "Energy Saved", value: 320, icon: Zap, color: "text-yellow-600", unit: "kWh" },
    { label: "Water Saved", value: 1250, icon: Droplets, color: "text-blue-600", unit: "L" },
    { label: "Waste Reduced", value: 45, icon: Recycle, color: "text-purple-600", unit: "kg" },
    { label: "CO₂ Saved", value: 180, icon: Car, color: "text-gray-600", unit: "kg" },
  ]

  const goals = [
    { title: "Reduce Energy Usage by 20%", progress: 60, target: "Dec 2024" },
    { title: "Cut Waste Generation by 30%", progress: 83, target: "Nov 2024" },
    { title: "Use Sustainable Transport 90%", progress: 75, target: "Dec 2024" },
    { title: "Achieve Green Score of 85", progress: 92, target: "Oct 2024" },
  ]

  const handleSaveProfile = () => {
    // Here you would typically save to your backend
    setIsEditing(false)
    // Show success message
  }

  const handlePasswordChange = () => {
    // Here you would typically update password via API
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
    // Show success message
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  EcoCity
                </span>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-xl font-semibold text-gray-900">User Profile</h1>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" className="text-gray-700 hover:text-green-600">
                  Dashboard
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="ghost" className="text-gray-700 hover:text-green-600">
                  Community
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={profileData.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-2xl">
                      {profileData.firstName[0]}
                      {profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-green-600 hover:bg-green-700"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="text-gray-600 mb-2">{profileData.location}</p>
                <Badge className="bg-green-100 text-green-800 mb-4">Member since {profileData.joinDate}</Badge>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Green Score</span>
                    <span className="font-bold text-green-600">78/100</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Achievements</span>
                    <span className="font-bold text-purple-600">3/5</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="profile" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="stats" className="flex items-center space-x-2">
                  <Target className="h-4 w-4" />
                  <span className="hidden sm:inline">Stats</span>
                </TabsTrigger>
                <TabsTrigger value="achievements" className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span className="hidden sm:inline">Awards</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Settings</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="hidden sm:inline">Security</span>
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your profile details and bio</CardDescription>
                    </div>
                    <Button
                      variant={isEditing ? "default" : "outline"}
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center space-x-2"
                    >
                      <Edit className="h-4 w-4" />
                      <span>{isEditing ? "Cancel" : "Edit"}</span>
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                            disabled={!isEditing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                            disabled={!isEditing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                          disabled={!isEditing}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        disabled={!isEditing}
                        rows={4}
                        placeholder="Tell us about yourself and your sustainability journey..."
                      />
                    </div>

                    {isEditing && (
                      <div className="flex space-x-4">
                        <Button onClick={handleSaveProfile} className="bg-green-600 hover:bg-green-700">
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Stats Tab */}
              <TabsContent value="stats">
                <div className="space-y-6">
                  {/* Current Stats */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Impact Statistics</CardTitle>
                      <CardDescription>Track your environmental impact and progress</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stats.map((stat, index) => {
                          const IconComponent = stat.icon
                          return (
                            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                              <IconComponent className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                              <div className="text-2xl font-bold text-gray-900">
                                {stat.value}
                                {stat.unit && <span className="text-sm text-gray-600 ml-1">{stat.unit}</span>}
                              </div>
                              <div className="text-sm text-gray-600">{stat.label}</div>
                              {stat.max && <Progress value={(stat.value / stat.max) * 100} className="mt-2 h-2" />}
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Goals Progress */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Goals</CardTitle>
                      <CardDescription>Your progress towards sustainability targets</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {goals.map((goal, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{goal.title}</span>
                            <div className="text-sm text-gray-600">
                              <span className="font-semibold">{goal.progress}%</span> • Target: {goal.target}
                            </div>
                          </div>
                          <Progress value={goal.progress} className="h-3" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Achievements Tab */}
              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements & Badges</CardTitle>
                    <CardDescription>Your sustainability milestones and accomplishments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className={`p-6 rounded-lg border-2 ${
                            achievement.earned
                              ? "bg-green-50 border-green-200"
                              : "bg-gray-50 border-gray-200 opacity-60"
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-full ${achievement.earned ? "bg-green-100" : "bg-gray-100"}`}>
                              <Award className={`h-6 w-6 ${achievement.earned ? "text-green-600" : "text-gray-400"}`} />
                            </div>
                            <div className="flex-1">
                              <h3
                                className={`font-semibold text-lg ${
                                  achievement.earned ? "text-green-900" : "text-gray-600"
                                }`}
                              >
                                {achievement.title}
                              </h3>
                              <p className={`text-sm ${achievement.earned ? "text-green-700" : "text-gray-500"}`}>
                                {achievement.description}
                              </p>
                              {achievement.earned && achievement.date && (
                                <div className="flex items-center mt-2 text-xs text-green-600">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  Earned {achievement.date}
                                </div>
                              )}
                            </div>
                            {achievement.earned && <Badge className="bg-green-600 text-white">Earned</Badge>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how you receive updates and notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-notifications" className="text-base font-medium">
                            Email Notifications
                          </Label>
                          <p className="text-sm text-gray-600">Receive updates via email</p>
                        </div>
                        <Switch
                          id="email-notifications"
                          checked={preferences.emailNotifications}
                          onCheckedChange={(checked) => setPreferences({ ...preferences, emailNotifications: checked })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="push-notifications" className="text-base font-medium">
                            Push Notifications
                          </Label>
                          <p className="text-sm text-gray-600">Receive push notifications on your device</p>
                        </div>
                        <Switch
                          id="push-notifications"
                          checked={preferences.pushNotifications}
                          onCheckedChange={(checked) => setPreferences({ ...preferences, pushNotifications: checked })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="weekly-reports" className="text-base font-medium">
                            Weekly Reports
                          </Label>
                          <p className="text-sm text-gray-600">Get weekly sustainability progress reports</p>
                        </div>
                        <Switch
                          id="weekly-reports"
                          checked={preferences.weeklyReports}
                          onCheckedChange={(checked) => setPreferences({ ...preferences, weeklyReports: checked })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="community-updates" className="text-base font-medium">
                            Community Updates
                          </Label>
                          <p className="text-sm text-gray-600">Stay updated on community challenges and events</p>
                        </div>
                        <Switch
                          id="community-updates"
                          checked={preferences.communityUpdates}
                          onCheckedChange={(checked) => setPreferences({ ...preferences, communityUpdates: checked })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="challenge-reminders" className="text-base font-medium">
                            Challenge Reminders
                          </Label>
                          <p className="text-sm text-gray-600">Get reminders about active challenges</p>
                        </div>
                        <Switch
                          id="challenge-reminders"
                          checked={preferences.challengeReminders}
                          onCheckedChange={(checked) => setPreferences({ ...preferences, challengeReminders: checked })}
                        />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="data-sharing" className="text-base font-medium">
                            Anonymous Data Sharing
                          </Label>
                          <p className="text-sm text-gray-600">Help improve EcoCity by sharing anonymous usage data</p>
                        </div>
                        <Switch
                          id="data-sharing"
                          checked={preferences.dataSharing}
                          onCheckedChange={(checked) => setPreferences({ ...preferences, dataSharing: checked })}
                        />
                      </div>
                    </div>

                    <Button className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security">
                <div className="space-y-6">
                  {/* Change Password */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Change Password</CardTitle>
                      <CardDescription>Update your account password for security</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <div className="relative">
                          <Input
                            id="current-password"
                            type={showCurrentPassword ? "text" : "password"}
                            value={passwordData.currentPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                            className="pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          >
                            {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <div className="relative">
                          <Input
                            id="new-password"
                            type={showNewPassword ? "text" : "password"}
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                            className="pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          >
                            {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                        />
                      </div>

                      <Button
                        onClick={handlePasswordChange}
                        className="bg-green-600 hover:bg-green-700"
                        disabled={
                          !passwordData.currentPassword ||
                          !passwordData.newPassword ||
                          passwordData.newPassword !== passwordData.confirmPassword
                        }
                      >
                        Update Password
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Account Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Actions</CardTitle>
                      <CardDescription>Manage your account settings and data</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-blue-900">Download Your Data</h4>
                          <p className="text-sm text-blue-700">Export all your EcoCity data</p>
                        </div>
                        <Button
                          variant="outline"
                          className="border-blue-200 text-blue-600 hover:bg-blue-100 bg-transparent"
                        >
                          Download
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-yellow-900">Deactivate Account</h4>
                          <p className="text-sm text-yellow-700">Temporarily disable your account</p>
                        </div>
                        <Button
                          variant="outline"
                          className="border-yellow-200 text-yellow-600 hover:bg-yellow-100 bg-transparent"
                        >
                          Deactivate
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-red-900">Delete Account</h4>
                          <p className="text-sm text-red-700">Permanently delete your account and all data</p>
                        </div>
                        <Button variant="destructive">Delete Account</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
