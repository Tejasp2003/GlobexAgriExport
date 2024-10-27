"use client";
import Image from "next/image";
import BarleyImage from "@/public/images/barley.jpg";
import { Leaf, Package, Truck, CheckCircle, Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BarleyExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Premium Barley Supplier";
  const shareDescription =
    "Discover the premium quality barley from Globex Agri Export, a versatile cereal grain with diverse applications in food, beverages, and animal feed industries.";
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-yellow-800 inline-flex items-center">
            <Leaf className="mr-2 h-12 w-12 text-yellow-600" />
            Globex Agri Export
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offering premium quality barley (Hordeum vulgare), a versatile
            cereal grain with diverse applications in food, beverages, and
            animal feed industries.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base md:text-lg"
            onClick={() => window.location.href = "mailto:globexagriexport@gmail.com"}
            >
              Request a Quote
            </Button>
            <Popover open={isShareOpen} onOpenChange={setIsShareOpen}>
              <PopoverTrigger asChild>
                <Button
                  onClick={() => setIsShareOpen(true)}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base md:text-lg"
                >
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-2">
                <div className="grid grid-cols-3 gap-2">
                  <FacebookShareButton url={shareUrl} title={shareDescription}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={shareUrl} title={shareTitle}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <WhatsappShareButton url={shareUrl} title={shareTitle}>
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <LinkedinShareButton
                    url={shareUrl}
                    title={shareTitle}
                    summary={shareDescription}
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                  <EmailShareButton
                    url={shareUrl}
                    subject={shareTitle}
                    body={shareDescription}
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden rounded-2xl shadow-lg">
            <CardHeader className="p-0">
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src= {BarleyImage}
                  alt="Barley"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-700">
                Premium Barley
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our barley is carefully cultivated and processed to ensure:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>High nutritional value</li>
                <li>Consistent quality across batches</li>
                <li>Versatility for various applications</li>
                <li>Compliance with international food safety standards</li>
                <li>Optimal flavor and texture profiles</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Types of Barley
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-semibold">Hulled Barley:</span> Outer
                  husk removed, bran layer intact
                </li>
                <li>
                  <span className="font-semibold">Pearled Barley:</span> Outer
                  husk and bran layer removed
                </li>
                <li>
                  <span className="font-semibold">Barley Flakes:</span>{" "}
                  Processed for quick-cooking applications
                </li>
                <li>
                  <span className="font-semibold">Barley Flour:</span> Ground
                  barley for baking and cooking
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Food production (soups, stews, cereals)</li>
                <li>Brewing industry (beer and whiskey production)</li>
                <li>Animal feed for livestock and poultry</li>
                <li>Health food products</li>
                <li>Industrial uses (starch production)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-700 flex items-center">
                <Truck className="mr-2 h-6 w-6" /> Quality Assurance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Rigorous quality control measures</li>
                <li>Regular testing for purity and nutritional content</li>
                <li>Compliance with international food safety standards</li>
                <li>Proper storage and handling to maintain freshness</li>
                <li>Traceability from farm to consumer</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-yellow-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Benefits of Our Barley
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                  💪 Nutritional Powerhouse
                </h3>
                <p className="text-gray-600">
                  Rich in fiber, vitamins, and minerals, supporting overall
                  health and wellness.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                  ❤️ Heart Health
                </h3>
                <p className="text-gray-600">
                  May help reduce cholesterol levels and support cardiovascular
                  health.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                  🍺 Brewing Excellence
                </h3>
                <p className="text-gray-600">
                  Ideal for producing high-quality malt for the brewing and
                  distilling industries.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                  🐄 Animal Nutrition
                </h3>
                <p className="text-gray-600">
                  Excellent source of nutrition for livestock, supporting animal
                  health and growth.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                  🌾 Sustainable Crop
                </h3>
                <p className="text-gray-600">
                  Adaptable to various climates, contributing to sustainable
                  agriculture practices.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                  🍲 Culinary Versatility
                </h3>
                <p className="text-gray-600">
                  Can be used in a wide range of culinary applications, from
                  soups to baked goods.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
