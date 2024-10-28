"use client";
import Image from "next/image";
import { Leaf, Package, Truck, CheckCircle, Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SoyaBeanImage from "@/public/images/soyabean.jpg";
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

export default function SoyabeanExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Premium Soyabean Products";
  const shareDescription =
    "Your trusted source for premium quality soyabean products. We offer a wide range of soyabean varieties to meet diverse customer needs.";
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800 flex items-center justify-center">
            <Leaf className="mr-2 h-8 w-8 md:h-12 md:w-12  text-green-600" />
            Globex Agri Export
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Your trusted source for premium quality soyabean products. We offer
            a wide range of soyabean varieties to meet diverse customer needs.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base md:text-lg"
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
                  src={SoyaBeanImage}
                  alt="Soyabean"
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
                Premium Soyabean Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We offer high-quality soyabean products suitable for various
                industries and applications. Our soyabean is known for its:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Consistent quality</li>
                <li>High protein content</li>
                <li>Versatility in use</li>
                <li>Compliance with international standards</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Product Range
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Whole Soyabeans</li>
                <li>Soyabean Meal</li>
                <li>Soyabean Oil</li>
                <li>Soyabean Flour</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Quality Assurance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Rigorous quality control measures</li>
                <li>State-of-the-art processing facilities</li>
                <li>Compliance with international food safety standards</li>
                <li>Regular quality audits and inspections</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700 flex items-center">
                <Truck className="mr-2 h-6 w-6" /> Packaging & Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Flexible packaging options</li>
                <li>Bulk and retail packaging available</li>
                <li>Efficient logistics and shipping solutions</li>
                <li>On-time delivery commitment</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-green-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Why Choose Our Soyabean
              Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🌟 Premium Quality
                </h3>
                <p className="text-gray-600">
                  Carefully selected and processed to ensure the highest quality
                  standards.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🌿 Sustainability
                </h3>
                <p className="text-gray-600">
                  Commitment to sustainable farming and processing practices.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  📦 Versatility
                </h3>
                <p className="text-gray-600">
                  Wide range of soyabean products suitable for various
                  applications.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🌍 Global Reach
                </h3>
                <p className="text-gray-600">
                  Experienced in international trade, ensuring smooth and
                  reliable exports.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  💯 Customer Satisfaction
                </h3>
                <p className="text-gray-600">
                  Dedicated to meeting and exceeding customer expectations.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🔬 Innovation
                </h3>
                <p className="text-gray-600">
                  Continuous improvement in product quality and processing
                  techniques.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
