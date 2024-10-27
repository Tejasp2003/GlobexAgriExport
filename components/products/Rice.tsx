"use client";
import Image from "next/image"
import { Leaf, Package, Truck, CheckCircle, Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import RiceImage from "@/public/images/rice.jpg";
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

export default function RiceExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Premium Rice Varieties from India";
  const shareDescription = "Explore our premium Basmati and Non-Basmati rice varieties sourced from the fertile lands of India. Exporting to global markets.";
  return (

    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-green-800 inline-flex items-center">
            <Leaf className="mr-2 h-12 w-12 text-green-600" />
            Globex Agri Export
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offering premium quality Basmati and Non-Basmati rice varieties from the fertile lands of India to global markets.
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
                  src={RiceImage}
                  alt="Rice"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700">Premium Rice Varieties</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Basmati Rice:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Pusa Basmati</li>
                <li>1121 Basmati</li>
                <li>Traditional Basmati</li>
                <li>Other local and regional varieties</li>
              </ul>
              <h3 className="font-semibold mb-2">Non-Basmati Rice:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Sona Masoori</li>
                <li>Ponni</li>
                <li>Swarna</li>
                <li>IR64</li>
                <li>Kolam</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Basmati Rice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Grown in northern states of India</li>
                <li>Premium long-grain rice</li>
                <li>Aromatic and flavorful</li>
                <li>Carefully harvested and processed</li>
                <li>Exported to countries worldwide</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Non-Basmati Rice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Grown in southern, eastern, and central India</li>
                <li>Various grain lengths available</li>
                <li>Suitable for diverse culinary applications</li>
                <li>Cost-effective option</li>
                <li>Popular in domestic and international markets</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700 flex items-center">
                <Truck className="mr-2 h-6 w-6" /> Quality Assurance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Stringent quality control measures</li>
                <li>Compliance with international food safety standards</li>
                <li>Advanced processing and packaging facilities</li>
                <li>Regular quality audits and inspections</li>
                <li>Traceability from farm to consumer</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-green-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Why Choose Our Rice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">🌟 Premium  Quality</h3>
                <p className="text-gray-600">Sourced from the finest rice-growing regions of India, ensuring superior taste and aroma.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">🍚 Variety</h3>
                <p className="text-gray-600">Wide range of Basmati and Non-Basmati rice varieties to cater to diverse preferences.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">🌿 Sustainable Practices</h3>
                <p className="text-gray-600">Supporting environmentally friendly farming methods and local communities.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">🔬 Rigorous Quality Control</h3>
                <p className="text-gray-600">Adhering to strict quality standards throughout the production and export process.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">🌍 Global Export Experience</h3>
                <p className="text-gray-600">Extensive experience in international trade, ensuring smooth and reliable exports.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">💯 Customer Satisfaction</h3>
                <p className="text-gray-600">Committed to delivering excellence and meeting customer expectations consistently.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}