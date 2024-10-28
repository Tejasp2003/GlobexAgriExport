"use client";
import Image from "next/image";
import { Leaf, Package, Truck, CheckCircle, Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import YellowMaizeImage from "@/public/images/yellowmaize.jpg";
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

export default function YellowMaizeExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Premium Quality Yellow Maize";
  const shareDescription =
    "Globex Agri Export offers premium quality yellow maize, a versatile and nutritious cereal grain with significant importance in global agriculture and food production.";
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-yellow-800 inline-flex items-center">
            <Leaf className="mr-2 h-8 w-8 md:h-12 md:w-12  text-yellow-600" />
            Globex Agri Export
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Offering premium quality yellow maize, a versatile and nutritious
            cereal grain with significant importance in global agriculture and
            food production.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base md:text-lg"
              onClick={() =>
                (window.location.href = "mailto:globexagriexport@gmail.com")
              }
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
                  src={YellowMaizeImage}
                  alt="Yellow Maize"
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
                Premium Yellow Maize
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Rich in essential nutrients</li>
                <li>High carbohydrate content</li>
                <li>Good source of dietary fiber</li>
                <li>Contains antioxidants like carotenoids</li>
                <li>Versatile use in food and industry</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Moisture: 13% max</li>
                <li>Purity: 99%</li>
                <li>Foreign Matter: 1% max</li>
                <li>Broken: 2% max</li>
                <li>Damaged: 1% max</li>
                <li>Origin: India</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Packaging & Loading
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Packing: Used thick jute bags 50/100 kgs</li>
                <li>Loose bulk in container</li>
                <li>Break bulk</li>
                <li>Loading: 1x20ft container/24mt</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-700 flex items-center">
                <Truck className="mr-2 h-6 w-6" /> Uses & Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Human consumption</li>
                <li>Animal feed</li>
                <li>Ethanol production</li>
                <li>Industrial applications</li>
                <li>Food processing</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-yellow-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Benefits of Our Yellow
              Maize
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                  🍽️ Nutritional Powerhouse
                </h3>
                <p className="text-gray-600">
                  Rich in carbohydrates, dietary fiber, vitamins, and minerals,
                  providing essential nutrition.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                  🌿 Versatile Ingredient
                </h3>
                <p className="text-gray-600">
                  Used in various culinary applications, from whole corn to
                  processed products like cornmeal and corn syrup.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                  🐄 Animal Feed
                </h3>
                <p className="text-gray-600">
                  Valuable source of nutrition for livestock, poultry, and
                  aquaculture.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                  🏭 Industrial Applications
                </h3>
                <p className="text-gray-600">
                  Used in ethanol production, textiles, papermaking, and
                  pharmaceuticals.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                  🌍 Global Demand
                </h3>
                <p className="text-gray-600">
                  Significant commodity in international trade, with high demand
                  worldwide.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                  🇮🇳 Quality Assurance
                </h3>
                <p className="text-gray-600">
                  Sourced from India, adhering to strict quality standards and
                  specifications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
