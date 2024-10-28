"use client";
import Image from "next/image";
import { Leaf, Package, Truck, CheckCircle, Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FennelImage from "@/public/images/fennelseeds.jpg"
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

export default function FennelSeedExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Premium Fennel Seeds";
  const shareDescription =
    "Discover our premium fennel seeds, derived from select varieties of the fennel plant, celebrated for their sweet and robust flavor profile.";
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800 flex items-center justify-center">
            <Leaf className="mr-2 h-8 w-8 md:h-12 md:w-12  text-green-600" />
            Globex Agri Export
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover our premium fennel seeds, derived from select varieties of
            the fennel plant, celebrated for their sweet and robust flavor
            profile.
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
                  src={FennelImage}
                  alt="Fennel Seeds"
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
                Premium Fennel Seeds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our fennel seeds are carefully selected to ensure:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Sweet and robust flavor profile</li>
                <li>Pale green to greenish brown color</li>
                <li>Minimal discoloration</li>
                <li>GMO-free status</li>
                <li>18-month shelf life from production date</li>
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
                  <span className="font-semibold">Country of Origin:</span>{" "}
                  India
                </li>
                <li>
                  <span className="font-semibold">Harvest Period:</span> Rabi
                  Crop (Feb/Mar)
                </li>
                <li>
                  <span className="font-semibold">Color:</span> Pale green to
                  greenish brown
                </li>
                <li>
                  <span className="font-semibold">GMO Status:</span> GMO Free
                </li>
                <li>
                  <span className="font-semibold">Shelf Life:</span> 18 Months
                  from Production Date
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
                <li>10 KG Multiwall Paper Bags</li>
                <li>22.68 KG Multiwall Paper Bags</li>
                <li>25 KG Multiwall Paper Bags</li>
                <li>1 MT Tote bags</li>
                <li>Customized private labeling available</li>
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
                <li>20′ FT Container: 13 Metric Tons</li>
                <li>40′ FT Container: 26 Metric Tons</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-green-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Benefits and Uses of Our
              Fennel Seeds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🍽️ Mouth Freshener
                </h3>
                <p className="text-gray-600">
                  Natural mouth freshener with a distinctive minty flavor and
                  chewy texture.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  💪 Digestive Aid
                </h3>
                <p className="text-gray-600">
                  Acts as a catalyst for digestion, easing discomfort and
                  promoting gastrointestinal wellness.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🍲 Culinary Delight
                </h3>
                <p className="text-gray-600">
                  Enhances flavors in various dishes, from curries to breads and
                  pickles.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🌿 Versatile Ingredient
                </h3>
                <p className="text-gray-600">
                  Used raw, roasted, or infused with additional flavors in
                  various culinary applications.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🍵 Herbal Tea
                </h3>
                <p className="text-gray-600">
                  Can be brewed into a soothing and aromatic herbal tea.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🏺 Cultural Icon
                </h3>
                <p className="text-gray-600">
                  Holds significant cultural importance in India, symbolizing
                  hospitality and tradition.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
