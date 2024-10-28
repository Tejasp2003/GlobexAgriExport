"use client";

import { useState } from "react";
import Image from "next/image";
import { Leaf, Package, Truck, CheckCircle, Share2 } from "lucide-react";
import BlackPepperImage from "@/public/images/blackpepper.jpg"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useRouter } from "next/navigation";

export default function BlackPepperExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const router = useRouter();

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Premium Black Pepper";
  const shareDescription =
    "Discover our premium quality black pepper, known as the 'King of Spices,' sourced directly from the finest pepper-growing regions of India.";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 flex items-center justify-center">
            <Leaf className="mr-2 h-8 w-8 md:h-12 md:w-12 text-gray-600" />
            Globex Agri Export
          </h1>
          <p className="text-lg  md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Offering premium quality black pepper, known as the "King of
            Spices," sourced directly from the finest pepper-growing regions of
            India.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
          <Button
  className="w-full sm:w-auto bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base md:text-lg"
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

        {/* Rest of the component remains the same */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden rounded-2xl shadow-lg">
            <CardHeader className="p-0">
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src={BlackPepperImage}
                  alt="Black Pepper"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-700">
                Premium Black Pepper
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our black pepper is carefully cultivated and processed to
                ensure:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Rich, pungent aroma</li>
                <li>Strong, spicy flavor</li>
                <li>High piperine content</li>
                <li>Consistent quality across batches</li>
                <li>Versatility in culinary applications</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Varieties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Malabar Black Pepper</li>
                <li>Tellicherry Black Pepper</li>
                <li>Organic Black Pepper</li>
                <li>Ground Black Pepper</li>
                <li>Black Pepper Oleoresin</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Quality Assurance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>ASTA Cleanliness Specifications</li>
                <li>Steam Sterilized</li>
                <li>Sortex Cleaned</li>
                <li>Free from artificial colors and preservatives</li>
                <li>Compliant with international food safety standards</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-700 flex items-center">
                <Truck className="mr-2 h-6 w-6" /> Packaging & Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Available in various pack sizes</li>
                <li>Vacuum-packed options for extended shelf life</li>
                <li>Bulk packaging for industrial use</li>
                <li>Custom packaging solutions available</li>
                <li>Efficient global shipping network</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Benefits and Uses of Our
              Black Pepper
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  🍽️ Culinary Staple
                </h3>
                <p className="text-gray-600">
                  Essential spice in cuisines worldwide, enhancing flavors in
                  various dishes.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  💊 Health Benefits
                </h3>
                <p className="text-gray-600">
                  Rich in antioxidants and may aid in digestion and nutrient
                  absorption.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  🏭 Industrial Applications
                </h3>
                <p className="text-gray-600">
                  Used in food processing, pharmaceuticals, and personal care
                  products.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  🌿 Natural Preservative
                </h3>
                <p className="text-gray-600">
                  Acts as a natural food preservative due to its antimicrobial
                  properties.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  👨‍🍳 Culinary Versatility
                </h3>
                <p className="text-gray-600">
                  Used in various forms: whole, cracked, ground, and as an
                  extract.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  🌍 Global Demand
                </h3>
                <p className="text-gray-600">
                  High demand in international markets for its quality and
                  flavor profile.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
