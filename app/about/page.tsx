import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Leaf,
  Users,
  Award,
  Globe,
  Heart,
  Lightbulb,
  Zap,
  Recycle,
  TreePine,
  MapPin,
  Mail,
  Phone,
  Calendar,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { label: "Active Users", value: "50,000+", icon: Users, color: "text-blue-600" },
    { label: "CO₂ Saved", value: "2.4M kg", icon: TreePine, color: "text-green-600" },
    { label: "Cities Covered", value: "25+", icon: Globe, color: "text-purple-600" },
    { label: "Challenges Completed", value: "10,000+", icon: Award, color: "text-yellow-600" },
  ]

  const features = [
    {
      icon: MapPin,
      title: "Smart Travel Planning",
      description: "AI-powered route optimization for sustainable transportation choices with real-time CO₂ tracking.",
      color: "blue",
    },
    {
      icon: Recycle,
      title: "Waste Intelligence",
      description: "Advanced waste tracking and reduction strategies with personalized insights and tips.",
      color: "green",
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "Monitor energy consumption and discover saving opportunities with smart recommendations.",
      color: "yellow",
    },
    {
      icon: Users,
      title: "Community Challenges",
      description: "Join city-wide sustainability initiatives and compete with neighbors for a greener future.",
      color: "purple",
    },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Environmental scientist with 10+ years in sustainability consulting. Passionate about using technology for climate action.",
      avatar: "/placeholder.svg?height=80&width=80",
      linkedin: "#",
    },
    {
      name: "Mike Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Former Google engineer specializing in AI and machine learning. Expert in building scalable green tech solutions.",
      avatar: "/placeholder.svg?height=80&width=80",
      linkedin: "#",
    },
    {
      name: "Emma Thompson",
      role: "Head of Community",
      bio: "Community organizer and climate activist. Leading our mission to build engaged sustainable communities.",
      avatar: "/placeholder.svg?height=80&width=80",
      linkedin: "#",
    },
    {
      name: "David Kim",
      role: "Lead Data Scientist",
      bio: "PhD in Environmental Data Science. Developing AI models that power our sustainability recommendations.",
      avatar: "/placeholder.svg?height=80&width=80",
      linkedin: "#",
    },
  ]

  const milestones = [
    { year: "2022", title: "Company Founded", description: "Started with a vision to democratize sustainability" },
    { year: "2023", title: "Beta Launch", description: "Launched beta version with 1,000 early adopters" },
    { year: "2023", title: "Series A Funding", description: "Raised $5M to accelerate product development" },
    { year: "2024", title: "50K Users", description: "Reached 50,000 active users across 25 cities" },
    { year: "2024", title: "AI Integration", description: "Launched advanced AI-powered recommendations" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                EcoCity
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Dashboard
              </Link>
              <Link href="/community" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Community
              </Link>
              <Link href="/about" className="text-green-600 font-medium">
                About
              </Link>
            </nav>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-green-100 text-green-800 border-green-200 mb-6">🌱 Our Mission</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Building a{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Sustainable Future
            </span>{" "}
            Together
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            EcoCity empowers individuals and communities to make meaningful environmental impact through AI-powered
            insights, community engagement, and actionable sustainability tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8">
                Join Our Mission
              </Button>
            </Link>
            <Link href="/community">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Explore Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mx-auto mb-4">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">📖 Our Story</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">From Idea to Impact</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  EcoCity was born from a simple observation: while people want to live sustainably, they often lack the
                  tools and knowledge to make meaningful changes. Our founders, coming from backgrounds in environmental
                  science and technology, saw an opportunity to bridge this gap.
                </p>
                <p>
                  We believe that sustainability shouldn't be complicated or overwhelming. By combining artificial
                  intelligence with community-driven initiatives, we make it easy for anyone to understand their
                  environmental impact and take action.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 users across 25 cities, helping them save money, reduce their
                  carbon footprint, and build stronger, more sustainable communities.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                    <span>Our Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">CO₂ Emissions Reduced</span>
                    <span className="font-bold text-green-600">2.4M kg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Money Saved by Users</span>
                    <span className="font-bold text-blue-600">$12.5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Waste Diverted</span>
                    <span className="font-bold text-purple-600">850 tons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Trees Equivalent Saved</span>
                    <span className="font-bold text-green-600">58,000</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 border-purple-200 mb-4">🚀 What We Offer</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Sustainability Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides everything you need to live more sustainably, backed by cutting-edge AI and
              community support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 bg-${feature.color}-100 rounded-xl`}>
                        <IconComponent className={`h-6 w-6 text-${feature.color}-600`} />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 mb-4">📅 Our Journey</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Milestones</h2>
            <p className="text-xl text-gray-600">From startup to sustainability leader</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {milestone.year}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 mb-4">👥 Meet the Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The People Behind EcoCity</h2>
            <p className="text-xl text-gray-600">Passionate experts dedicated to environmental change</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-white/80">
                <CardContent className="p-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-800 border-red-200 mb-4">❤️ Our Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
                <p className="text-gray-600">
                  Sustainability should be accessible to everyone, regardless of income, location, or technical
                  expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We leverage cutting-edge technology to solve environmental challenges in creative, effective ways.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">
                  Real change happens when people work together. We build tools that strengthen communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-xl text-green-100 mb-8">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-2 text-white">
              <Mail className="h-5 w-5" />
              <span>hello@ecocity.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <Phone className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <MapPin className="h-5 w-5" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8">
                Join EcoCity Today
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
