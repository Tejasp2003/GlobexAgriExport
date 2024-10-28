"use client";
import Image from "next/image"
import { Leaf, Package, Truck, CheckCircle, Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import PeanutImage from "@/public/images/peanuts.jpg";
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
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function PeanutExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Premium Groundnut Exporter";
  const shareDescription =
    "Your premier destination for top-quality groundnut products sourced from the heartlands of India. We offer a wide range of groundnut varieties to meet diverse customer needs.";


  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-yellow-800 inline-flex items-center">
            <Leaf className="mr-2 h-8 w-8 md:h-12 md:w-12  text-yellow-600" />
           Globex Agri Export
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Your premier destination for top-quality groundnut products sourced from the heartlands of India. We offer a wide range of groundnut varieties to meet diverse customer needs.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base md:text-lg"
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
                  src={PeanutImage}
                  alt="Peanuts"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-700">Premium Groundnut Varieties</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Bold or Runners</li>
                <li>Java or Spanish</li>
                <li>Red Natals</li>
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
              <h3 className="font-semibold mb-2">Indian HPS Groundnut Kernel – Bold:</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>Sizes: 38/42, 40/50, 50/55, 60/70</li>
                <li>Moisture content: 7% – 8%</li>
              </ul>
              <h3 className="font-semibold mb-2">Indian HPS Groundnut Kernel – Java:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Sizes: 50/60, 60/70, 70/80, 80/90</li>
                <li>Moisture content: 7% – 8%</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Packaging Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>P. P. Bag: 55.12 lb / 25 kg or 110.23 lb / 50 kg</li>
                <li>Jute Bag: 110.23 lb / 50 kg</li>
                <li>Vacuum Packaging: 25kg vacuum-sealed packs</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-700 flex items-center">
                <Truck className="mr-2 h-6 w-6" /> Product Offerings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>HPS Groundnut Kernels (Bold and Java)</li>
                <li>Groundnut in Shell (whole groundnuts)</li>
                <li>Custom packaging solutions available</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-yellow-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Why Choose Our Groundnuts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">🌟 Premium Quality</h3>
                <p className="text-gray-600">Carefully selected and processed to ensure the highest quality standards.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">🌿 Variety</h3>
                <p className="text-gray-600">Wide range of groundnut varieties to meet diverse customer needs.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">📦 Flexible Packaging</h3>
                <p className="text-gray-600">Multiple packaging options to suit different requirements and preferences.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">🌍 Global Export</h3>
                <p className="text-gray-600">Experienced in international trade, ensuring smooth and reliable exports.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">💯 Customer Satisfaction</h3>
                <p className="text-gray-600">Committed to delivering excellence and meeting customer expectations.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600 mb-2">🇮🇳 Indian Origin</h3>
                <p className="text-gray-600">Sourced from the heartlands of India, known for high-quality groundnuts.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}