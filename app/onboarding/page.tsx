"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Home, Car, Zap, Recycle, Target, Award, ArrowRight, CheckCircle } from "lucide-react"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [profile, setProfile] = useState({
    householdSize: [2],
    homeType: "",
    transportModes: [] as string[],
    energyUsage: [300],
    waterUsage: [150],
    wasteHabits: [] as string[],
    goals: [] as string[],
  })

  const totalSteps = 6

  const homeTypes = [
    { value: "apartment", label: "Apartment", icon: Home },
    { value: "house", label: "House", icon: Home },
    { value: "condo", label: "Condo", icon: Home },
    { value: "other", label: "Other", icon: Home },
  ]

  const transportModes = [
    { value: "car", label: "Car", icon: Car },
    { value: "bike", label: "Bicycle", icon: Car },
    { value: "public", label: "Public Transit", icon: Car },
    { value: "walk", label: "Walking", icon: Car },
    { value: "carpool", label: "Carpool", icon: Car },
    { value: "electric", label: "Electric Vehicle", icon: Car },
  ]

  const wasteHabits = [
    "Recycling regularly",
    "Composting organic waste",
    "Reducing single-use plastics",
    "Buying in bulk",
    "Repairing instead of replacing",
    "Donating unused items",
  ]

  const sustainabilityGoals = [
    "Reduce carbon footprint",
    "Save money on utilities",
    "Live more sustainably",
    "Join community initiatives",
    "Learn about green technology",
    "Inspire others to go green",
  ]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete onboarding
      window.location.href = "/dashboard"
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleArrayItem = (array: string[], item: string, setter: (value: string[]) => void) => {
    if (array.includes(item)) {
      setter(array.filter((i) => i !== item))
    } else {
      setter([...array, item])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Let's personalize your experience</h1>
          <p className="text-gray-600">Help us understand your lifestyle to provide better recommendations</p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle>Setup Your Profile</CardTitle>
              <span className="text-sm text-gray-500">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Household Size */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <Home className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Tell us about your household</h3>
                  <p className="text-gray-600">This helps us calculate your environmental impact</p>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">How many people live in your household?</Label>
                  <div className="px-4">
                    <Slider
                      value={profile.householdSize}
                      onValueChange={(value) => setProfile({ ...profile, householdSize: value })}
                      max={8}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>1 person</span>
                      <span className="font-semibold text-green-600">{profile.householdSize[0]} people</span>
                      <span>8+ people</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Why we ask:</strong> Household size affects energy consumption, waste generation, and
                    transportation needs. This helps us provide accurate sustainability metrics.
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Home Type */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center">
                  <Home className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">What type of home do you live in?</h3>
                  <p className="text-gray-600">Different home types have different sustainability opportunities</p>
                </div>

                <RadioGroup
                  value={profile.homeType}
                  onValueChange={(value) => setProfile({ ...profile, homeType: value })}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {homeTypes.map((type) => {
                      const IconComponent = type.icon
                      return (
                        <div key={type.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={type.value} id={type.value} />
                          <Label
                            htmlFor={type.value}
                            className="flex items-center space-x-2 cursor-pointer p-3 rounded-lg border hover:bg-gray-50 flex-1"
                          >
                            <IconComponent className="h-5 w-5 text-gray-600" />
                            <span>{type.label}</span>
                          </Label>
                        </div>
                      )
                    })}
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 3: Transportation */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <Car className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">How do you usually get around?</h3>
                  <p className="text-gray-600">Select all transportation modes you use regularly</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {transportModes.map((mode) => {
                    const IconComponent = mode.icon
                    const isSelected = profile.transportModes.includes(mode.value)
                    return (
                      <button
                        key={mode.value}
                        onClick={() =>
                          toggleArrayItem(profile.transportModes, mode.value, (modes) =>
                            setProfile({ ...profile, transportModes: modes }),
                          )
                        }
                        className={`flex items-center space-x-3 p-4 rounded-lg border transition-all ${
                          isSelected
                            ? "bg-green-100 border-green-300 text-green-800"
                            : "bg-white border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="font-medium">{mode.label}</span>
                        {isSelected && <CheckCircle className="h-4 w-4 ml-auto" />}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Energy Usage */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center">
                  <Zap className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">What's your monthly energy usage?</h3>
                  <p className="text-gray-600">Check your electricity bill or estimate your usage</p>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">Monthly electricity usage (kWh)</Label>
                  <div className="px-4">
                    <Slider
                      value={profile.energyUsage}
                      onValueChange={(value) => setProfile({ ...profile, energyUsage: value })}
                      max={1000}
                      min={50}
                      step={25}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>50 kWh</span>
                      <span className="font-semibold text-green-600">{profile.energyUsage[0]} kWh</span>
                      <span>1000+ kWh</span>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Average household:</strong> 300-400 kWh per month. Don't worry if you're not sure - you
                      can update this later!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Waste Habits */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center">
                  <Recycle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">What are your current waste habits?</h3>
                  <p className="text-gray-600">Select the practices you already follow</p>
                </div>

                <div className="space-y-3">
                  {wasteHabits.map((habit) => {
                    const isSelected = profile.wasteHabits.includes(habit)
                    return (
                      <div
                        key={habit}
                        className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all ${
                          isSelected ? "bg-green-100 border-green-300" : "bg-white border-gray-200 hover:bg-gray-50"
                        }`}
                        onClick={() =>
                          toggleArrayItem(profile.wasteHabits, habit, (habits) =>
                            setProfile({ ...profile, wasteHabits: habits }),
                          )
                        }
                      >
                        <Checkbox checked={isSelected} readOnly />
                        <span className="flex-1">{habit}</span>
                        {isSelected && <CheckCircle className="h-4 w-4 text-green-600" />}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 6: Goals */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div className="text-center">
                  <Target className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">What are your sustainability goals?</h3>
                  <p className="text-gray-600">We'll help you achieve these through personalized recommendations</p>
                </div>

                <div className="space-y-3">
                  {sustainabilityGoals.map((goal) => {
                    const isSelected = profile.goals.includes(goal)
                    return (
                      <div
                        key={goal}
                        className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all ${
                          isSelected ? "bg-green-100 border-green-300" : "bg-white border-gray-200 hover:bg-gray-50"
                        }`}
                        onClick={() =>
                          toggleArrayItem(profile.goals, goal, (goals) => setProfile({ ...profile, goals }))
                        }
                      >
                        <Checkbox checked={isSelected} readOnly />
                        <span className="flex-1">{goal}</span>
                        {isSelected && <CheckCircle className="h-4 w-4 text-green-600" />}
                      </div>
                    )
                  })}
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">🎉 You're all set!</h4>
                  <p className="text-sm text-green-800">
                    Based on your profile, we'll provide personalized recommendations, track your progress, and connect
                    you with like-minded community members.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={currentStep === 1 ? "invisible" : ""}
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                {currentStep === totalSteps ? (
                  <>
                    Complete Setup
                    <Award className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i + 1 <= currentStep ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
