"use client";
import Image from "next/image";
import { Leaf, Package, Truck, CheckCircle, Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ChicPeasImage from "@/public/images/chicpeas.jpg"
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

export default function ChickpeasExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Premium Quality Chickpeas";
  const shareDescription =
    "Globex Agri Export is a distinguished exporter of premium chickpeas, delivering superior quality produce to discerning customers worldwide.";
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-800 flex items-center justify-center">
            <Leaf className="mr-2 h-8 w-8 md:h-12 md:w-12  text-amber-600" />
            Globex Agri Export
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Your trusted partner in sourcing the finest quality chickpeas, also
            known as Kabuli Chana, straight from the heart of India.
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
                  src={ChicPeasImage}
                  alt="Chickpeas"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-amber-700">
                Premium Chickpeas / Kabuli Chana
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our chickpeas are meticulously sorted and cleaned to ensure:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Uniformity in size and appearance</li>
                <li>Adherence to international quality standards</li>
                <li>Purity and consistency in every batch</li>
                <li>Extended shelf life and freshness</li>
                <li>Versatility for various culinary applications</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-amber-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-semibold">Cleaning:</span> Sortex
                  Cleaned
                </li>
                <li>
                  <span className="font-semibold">Admixture:</span> 0.50% to 1%
                  Max
                </li>
                <li>
                  <span className="font-semibold">Broken Kernels:</span> 1-2%
                  Max
                </li>
                <li>
                  <span className="font-semibold">Moisture:</span> 12% Max
                </li>
                <li>
                  <span className="font-semibold">Damaged Kernels:</span> 1-3%
                  Max
                </li>
                <li>
                  <span className="font-semibold">Discolored Kernels:</span>{" "}
                  2-3% Max
                </li>
                <li>
                  <span className="font-semibold">Weevilled:</span> 0.3% Max
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-amber-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Available Counts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>40/42 (14 mm)</li>
                <li>42/44 (12 mm)</li>
                <li>44/46 (11 mm)</li>
                <li>48/50 (10 mm)</li>
                <li>58/60 (9 mm)</li>
                <li>62/64 (8 mm)</li>
                <li>75/80 (7 mm)</li>
                <li>90/100 (6 mm)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-amber-700 flex items-center">
                <Truck className="mr-2 h-6 w-6" /> Packaging & Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-semibold">Packaging:</span> PP Bag (25 /
                  50 KG)
                </li>
                <li>
                  <span className="font-semibold">Custom Packaging:</span>{" "}
                  Available on request
                </li>
                <li>
                  <span className="font-semibold">Container Capacity:</span> 20′
                  FT Container
                </li>
                <li>
                  <span className="font-semibold">Quantity per Container:</span>{" "}
                  23-24 Metric Tons
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-amber-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Why Choose Our Chickpeas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  🌟 Premium Quality
                </h3>
                <p className="text-gray-600">
                  Sourced from reputable farms and subjected to rigorous quality
                  checks to meet international standards.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  🍽️ Versatile Applications
                </h3>
                <p className="text-gray-600">
                  Perfect for traditional dishes and contemporary culinary
                  creations, enhancing texture, flavor, and nutritional value.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  💪 Nutrient-Rich
                </h3>
                <p className="text-gray-600">
                  Packed with protein, fiber, vitamins, and minerals, offering a
                  nutritious choice for health-conscious consumers.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  🕰️ Long Shelf Life
                </h3>
                <p className="text-gray-600">
                  Thoughtfully packaged to retain freshness and quality over an
                  extended period.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  🚚 Reliable Supply
                </h3>
                <p className="text-gray-600">
                  Efficient logistics and distribution network ensuring timely
                  delivery of orders.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  🌿 Sustainable Sourcing
                </h3>
                <p className="text-gray-600">
                  Committed to supporting sustainable farming practices and
                  local communities in India.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
