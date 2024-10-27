"use client";
import Image from "next/image";
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
import FenuGreekImage from "@/public/images/fenugrek.jpg";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FenugreekExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Premium Fenugreek Seeds";
  const shareDescription =
    "Discover the natural wonders of our premium Fenugreek Seeds, harvested fresh from the fields of India, offering versatility and numerous health benefits.";
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-green-800 inline-flex items-center">
            <Leaf className="mr-2 h-12 w-12 text-green-600" />
            GlobexAgriExport
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the natural wonders of our premium Fenugreek Seeds,
            harvested fresh from the fields of India, offering versatility and
            numerous health benefits.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base md:text-lg"
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
                  src={FenuGreekImage}
                  alt="Fenugreek Seeds"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700">
                Premium Fenugreek Seeds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our fenugreek seeds are carefully selected to ensure:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>High quality and purity</li>
                <li>Rich, nutty flavor</li>
                <li>Aromatic properties</li>
                <li>Consistent size and color</li>
                <li>Optimal nutritional content</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-semibold">Cleaning:</span> Machine
                  Cleaned / Sortex Cleaned
                </li>
                <li>
                  <span className="font-semibold">Moisture:</span> 7% Max
                </li>
                <li>
                  <span className="font-semibold">Acid Insoluble Ash:</span>{" "}
                  1.25% Max
                </li>
                <li>
                  <span className="font-semibold">Salmonella:</span> Absent/25
                  Gms
                </li>
                <li>
                  <span className="font-semibold">Origin:</span> India
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Packaging Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>PP Bags: 25/50 KG</li>
                <li>Paper Bags: 25 KG</li>
                <li>Customized packaging available</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700 flex items-center">
                <Truck className="mr-2 h-6 w-6" /> Container Capacity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>20′ FT Container: 22-23 Metric Tons</li>
                <li>40′ FT Container: 27 Metric Tons</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-green-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Benefits and Uses of Our
              Fenugreek Seeds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🍽️ Culinary Delight
                </h3>
                <p className="text-gray-600">
                  Enhances flavors in various dishes, from curries to breads and
                  pickles.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  💪 Health Booster
                </h3>
                <p className="text-gray-600">
                  Supports digestive health, boosts immunity, and aids in blood
                  glucose management.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  ❤️ Heart Health
                </h3>
                <p className="text-gray-600">
                  May help in regulating blood pressure and promoting
                  cardiovascular health.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🌿 Natural Alternative
                </h3>
                <p className="text-gray-600">
                  Offers a natural alternative to synthetic supplements for
                  various health concerns.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  👨‍🍳 Versatile Ingredient
                </h3>
                <p className="text-gray-600">
                  Used in whole seed form, ground as spice, or as sprouts in
                  various culinary applications.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🧴 Cosmetic Applications
                </h3>
                <p className="text-gray-600">
                  Utilized in natural cosmetics and hair care products for its
                  nourishing properties.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
