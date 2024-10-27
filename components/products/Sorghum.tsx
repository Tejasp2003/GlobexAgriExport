"use client";
import Image from "next/image";
import { Leaf, Package, Truck, CheckCircle, Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SorghumImage from "@/public/images/sorghum.jpg";
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

export default function SorghumExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Premium Sorghum Seeds";
  const shareDescription =
    "Delivering premium quality sorghum seeds to global markets with a commitment to excellence and customer satisfaction.";
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-orange-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-800 flex items-center justify-center">
            <Leaf className="mr-2 h-8 w-8 md:h-12 md:w-12  text-orange-600" />
            Globex Agri Export
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Delivering premium quality sorghum seeds to global markets with a
            commitment to excellence and customer satisfaction.
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
                  src={SorghumImage}
                  alt="Sorghum Seeds"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-700">
                Premium Sorghum Seeds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Milky White Sorghum</li>
                <li>White Sorghum</li>
                <li>Yellow Sorghum</li>
                <li>Machine Cleaned / Sortex Cleaned</li>
                <li>Origin: India</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Moisture: 12% Max</li>
                <li>Protein: 10% Min</li>
                <li>Discolored: 1% Max</li>
                <li>Foreign Material: 1% Max</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Packaging Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>PP Bag</li>
                <li>Jute Bag</li>
                <li>As Per Customer Requirement</li>
                <li>Quantity: 25 / 50 KG in New PP or Jute Bag</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-700 flex items-center">
                <Truck className="mr-2 h-6 w-6" /> Container Capacity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Type of Container: 20′ FT Container</li>
                <li>Quantity: 23-24 Metric Tons</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-orange-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Why Choose Our Sorghum
              Seeds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  🌟 Premium Quality
                </h3>
                <p className="text-gray-600">
                  Meticulously cleaned and sorted using advanced machinery to
                  ensure superior quality and purity.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  🌿 Variety
                </h3>
                <p className="text-gray-600">
                  Diverse range of sorghum seeds including Milky White, White,
                  and Yellow varieties.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  🇮🇳 Origin Assurance
                </h3>
                <p className="text-gray-600">
                  Sourced from India, renowned for its fertile soils and
                  favorable climate.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  🔬 Stringent Quality Control
                </h3>
                <p className="text-gray-600">
                  Adherence to strict quality control measures at every stage of
                  production and packaging.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  📦 Flexible Packaging
                </h3>
                <p className="text-gray-600">
                  Accommodating your preferences with PP bags, Jute bags, or
                  custom packaging solutions.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  🚢 Efficient Shipping
                </h3>
                <p className="text-gray-600">
                  Optimized container capacity for prompt and cost-effective
                  delivery of your orders.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
