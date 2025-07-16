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
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  Gift,
  RefreshCw,
  Handshake,
  Recycle,
  HeartHandshake,
  Banknote,
  Package,
} from "lucide-react";
import Link from "next/link";

export default function DonateSwapPage() {
  const [donationAmount, setDonationAmount] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [swapItemOffer, setSwapItemOffer] = useState("");
  const [swapItemRequest, setSwapItemRequest] = useState("");

  const handleDonateMoney = () => {
    alert(`Thank you for your donation of $${donationAmount}!`);
    setDonationAmount("");
  };

  const handleDonateItem = () => {
    alert(`Thank you for donating: ${itemDescription} (${itemCategory})!`);
    setItemDescription("");
    setItemCategory("");
  };

  const handleSwapOffer = () => {
    alert(
      `Swap offer submitted: Offering "${swapItemOffer}" for "${swapItemRequest}"`
    );
    setSwapItemOffer("");
    setSwapItemRequest("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <HeartHandshake className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">
                Donate & Swap
              </span>
            </div>
            <nav className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/community"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Community
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Our Mission & Share Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your contributions help us build a greener, more equitable
            community. Donate funds, give items a second life, or swap goods
            with neighbors.
          </p>
        </div>

        <Tabs defaultValue="donate-money" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="donate-money"
              className="flex items-center space-x-2"
            >
              <DollarSign className="h-4 w-4" />
              <span>Donate Money</span>
            </TabsTrigger>
            <TabsTrigger
              value="donate-items"
              className="flex items-center space-x-2"
            >
              <Gift className="h-4 w-4" />
              <span>Donate Items</span>
            </TabsTrigger>
            <TabsTrigger
              value="swap-items"
              className="flex items-center space-x-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Swap Items</span>
            </TabsTrigger>
          </TabsList>

          {/* Donate Money Tab */}
          <TabsContent value="donate-money">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Banknote className="h-6 w-6 text-green-600" />
                  <span>Make a Financial Contribution</span>
                </CardTitle>
                <CardDescription>
                  Your monetary donations directly support our sustainability
                  initiatives.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="donation-amount">Donation Amount ($)</Label>
                  <Input
                    id="donation-amount"
                    type="number"
                    placeholder="e.g., 50"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    min="1"
                  />
                </div>
                <Button
                  onClick={handleDonateMoney}
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!donationAmount || Number(donationAmount) <= 0}
                >
                  <DollarSign className="h-5 w-5 mr-2" />
                  Donate Now
                </Button>
                <div className="text-center text-sm text-gray-600">
                  <p>Every dollar helps us fund:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Community garden projects</li>
                    <li>Eco-education workshops</li>
                    <li>Waste reduction programs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Donate Items Tab */}
          <TabsContent value="donate-items">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-6 w-6 text-blue-600" />
                  <span>Give Items a Second Life</span>
                </CardTitle>
                <CardDescription>
                  Donate gently used items to those in need and reduce waste.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="item-description">Item Description</Label>
                  <Textarea
                    id="item-description"
                    placeholder="e.g., Gently used bicycle, working laptop, children's books"
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="item-category">Category</Label>
                  <Input
                    id="item-category"
                    placeholder="e.g., Electronics, Clothing, Furniture, Books"
                    value={itemCategory}
                    onChange={(e) => setItemCategory(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleDonateItem}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!itemDescription || !itemCategory}
                >
                  <Gift className="h-5 w-5 mr-2" />
                  Offer Item for Donation
                </Button>
                <div className="text-center text-sm text-gray-600">
                  <p>We accept a wide range of items, including:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Electronics (working condition)</li>
                    <li>Clothing and accessories</li>
                    <li>Small furniture and home goods</li>
                    <li>Books and educational materials</li>
                  </ul>
                  <p className="mt-2">
                    Once submitted, we'll contact you to arrange pickup or
                    drop-off.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Swap Items Tab */}
          <TabsContent value="swap-items">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Handshake className="h-6 w-6 text-purple-600" />
                  <span>Exchange Goods with Neighbors</span>
                </CardTitle>
                <CardDescription>
                  Reduce consumption by swapping items you no longer need for
                  something new to you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="swap-offer">What are you offering?</Label>
                  <Input
                    id="swap-offer"
                    placeholder="e.g., My old guitar, a set of gardening tools"
                    value={swapItemOffer}
                    onChange={(e) => setSwapItemOffer(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="swap-request">
                    What are you looking for?
                  </Label>
                  <Input
                    id="swap-request"
                    placeholder="e.g., A standing desk, a portable speaker"
                    value={swapItemRequest}
                    onChange={(e) => setSwapItemRequest(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleSwapOffer}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={!swapItemOffer || !swapItemRequest}
                >
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Propose Swap
                </Button>
                <div className="text-center text-sm text-gray-600">
                  <p>How it works:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Submit your offer and request.</li>
                    <li>
                      We'll match you with potential swappers in your area.
                    </li>
                    <li>Arrange a safe and convenient exchange.</li>
                  </ul>
                  <p className="mt-2">
                    Join our community to find unique items and reduce your
                    environmental footprint!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Impact Section */}
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Your Impact Through Giving
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Recycle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Waste Diverted
                </h3>
                <p className="text-gray-600">
                  By donating and swapping, you help keep valuable items out of
                  landfills.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Handshake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Community Support
                </h3>
                <p className="text-gray-600">
                  Your generosity directly benefits individuals and families in
                  your community.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <HeartHandshake className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sustainable Living
                </h3>
                <p className="text-gray-600">
                  Promote a circular economy and inspire others to adopt
                  eco-friendly habits.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
