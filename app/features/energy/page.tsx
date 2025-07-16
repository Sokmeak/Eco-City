"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Plus,
  TrendingDown,
  Award,
  Lightbulb,
  Factory,
  Sun,
} from "lucide-react";

export default function EnergyTrackerPage() {
  const [energyEntries, setEnergyEntries] = useState([
    {
      id: 1,
      type: "electricity",
      amount: 15.2,
      date: "2024-01-15",
      source: "grid",
    },
    {
      id: 2,
      type: "gas",
      amount: 3.1,
      date: "2024-01-15",
      source: "natural_gas",
    },
    {
      id: 3,
      type: "electricity",
      amount: 12.8,
      date: "2024-01-14",
      source: "grid",
    },
  ]);

  const [newEntry, setNewEntry] = useState({
    type: "",
    amount: "",
    source: "",
  });

  const energyTypes = [
    { value: "electricity", label: "Electricity", color: "yellow", icon: Zap },
    { value: "gas", label: "Natural Gas", color: "orange", icon: Factory },
    { value: "solar", label: "Solar", color: "green", icon: Sun },
  ];

  const weeklyGoal = 100.0; // kWh or equivalent
  const currentWeekEnergy = energyEntries.reduce(
    (sum, entry) => sum + entry.amount,
    0
  );
  const reductionTips = [
    "Switch to LED lighting throughout your home.",
    "Unplug electronics when not in use (vampire drain).",
    "Adjust thermostat by a few degrees (up in summer, down in winter).",
    "Use energy-efficient appliances (look for Energy Star labels).",
    "Seal drafts around windows and doors.",
  ];

  const handleAddEntry = () => {
    if (newEntry.type && newEntry.amount && newEntry.source) {
      const entry = {
        id: Date.now(),
        type: newEntry.type,
        amount: Number.parseFloat(newEntry.amount),
        date: new Date().toISOString().split("T")[0],
        source: newEntry.source,
      };
      setEnergyEntries([...energyEntries, entry]);
      setNewEntry({ type: "", amount: "", source: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-yellow-600" />
              <span className="text-2xl font-bold text-gray-900">
                Energy Tracker
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Add Energy Entry */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="h-5 w-5" />
                  <span>Log Energy Usage</span>
                </CardTitle>
                <CardDescription>
                  Track your daily energy consumption
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="energy-type">Energy Type</Label>
                  <Select
                    value={newEntry.type}
                    onValueChange={(value) =>
                      setNewEntry({ ...newEntry, type: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select energy type" />
                    </SelectTrigger>
                    <SelectContent>
                      {energyTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="amount">Amount (kWh or equivalent)</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.1"
                    placeholder="0.0"
                    value={newEntry.amount}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, amount: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="source">Source/Appliance (optional)</Label>
                  <Input
                    id="source"
                    placeholder="e.g., HVAC, lighting, grid"
                    value={newEntry.source}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, source: e.target.value })
                    }
                  />
                </div>
                <Button
                  onClick={handleAddEntry}
                  className="w-full bg-yellow-600 hover:bg-yellow-700"
                  disabled={!newEntry.type || !newEntry.amount}
                >
                  Add Entry
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Goal */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span>Weekly Goal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Current: {currentWeekEnergy.toFixed(1)} kWh</span>
                    <span>Goal: {weeklyGoal} kWh</span>
                  </div>
                  <Progress value={(currentWeekEnergy / weeklyGoal) * 100} />
                  <div className="text-center">
                    {currentWeekEnergy < weeklyGoal ? (
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

          {/* Energy Overview & Tips */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Entries */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Energy Entries</CardTitle>
                <CardDescription>
                  Your latest energy tracking data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {energyEntries
                    .slice(-5)
                    .reverse()
                    .map((entry) => {
                      const energyType = energyTypes.find(
                        (t) => t.value === entry.type
                      );
                      const IconComponent = energyType?.icon || Zap;
                      return (
                        <div
                          key={entry.id}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <IconComponent
                              className={`h-5 w-5 text-${energyType?.color}-500`}
                            />
                            <div>
                              <p className="font-medium capitalize">
                                {entry.type}
                              </p>
                              <p className="text-sm text-gray-600">
                                {entry.source || "General"}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{entry.amount} kWh</p>
                            <p className="text-sm text-gray-600">
                              {entry.date}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                  <span>AI Energy Saving Tips</span>
                </CardTitle>
                <CardDescription>
                  Personalized recommendations based on your energy patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {reductionTips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Energy Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Energy Breakdown</CardTitle>
                <CardDescription>
                  This week's energy usage by type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {energyTypes.map((type) => {
                    const typeEnergy = energyEntries
                      .filter((entry) => entry.type === type.value)
                      .reduce((sum, entry) => sum + entry.amount, 0);
                    const percentage =
                      currentWeekEnergy > 0
                        ? (typeEnergy / currentWeekEnergy) * 100
                        : 0;

                    return (
                      <div key={type.value}>
                        <div className="flex justify-between mb-2">
                          <span className="capitalize font-medium">
                            {type.label}
                          </span>
                          <span className="text-sm text-gray-600">
                            {typeEnergy.toFixed(1)} kWh ({percentage.toFixed(0)}
                            %)
                          </span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
