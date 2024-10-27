"use client";
import Image from "next/image";
import { Leaf, Package, Truck, CheckCircle, Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CuminImage from "@/public/images/cumin.jpg"
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

export default function CuminExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Cumin Seeds";
  const shareDescription =
    "Discover the finest quality cumin seeds from Globex Agri Export, meticulously sourced to ensure superior flavor, aroma, and nutritional value.";
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-800 flex items-center justify-center">
            <Leaf className="mr-2 h-8 w-8 md:h-12 md:w-12  text-amber-600" />
            GlobexAgriExport
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Bringing you the finest quality cumin seeds, a prized spice revered
            in cuisines worldwide. Our cumin seeds are meticulously sourced to
            ensure superior flavor, aroma, and nutritional value.
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
                  src={CuminImage}
                  alt="Cumin Seeds"
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
                Cumin Seeds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Derived from the dried seeds of the Cuminum cyminum plant, our
                cumin seeds offer:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Small, elongated shape with earthy brown hue</li>
                <li>Pungent aroma and warm, slightly bitter taste</li>
                <li>Rich in nutrients like iron, magnesium, and calcium</li>
                <li>Staple in Indian, Middle Eastern, and Mexican cuisines</li>
                <li>
                  Potential health benefits, including aiding digestion and
                  reducing inflammation
                </li>
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
                  <span className="font-semibold">Appearance:</span> Oval seeds
                  with ridges
                </li>
                <li>
                  <span className="font-semibold">Color:</span> Natural
                </li>
                <li>
                  <span className="font-semibold">Purity:</span> 98% / 99% /
                  99.5%
                </li>
                <li>
                  <span className="font-semibold">Foreign Matter:</span> 2% / 1%
                  / 0.5% Max
                </li>
                <li>
                  <span className="font-semibold">Moisture:</span> 7-8% max
                </li>
                <li>
                  <span className="font-semibold">Flavor:</span> Warm and
                  aromatic
                </li>
                <li>
                  <span className="font-semibold">Origin:</span> India
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-amber-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Uses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Versatile and aromatic, cumin seeds are used in:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Curry powders</li>
                <li>Breads and cakes</li>
                <li>Cheese production</li>
                <li>Perfumery (cumin seed oil)</li>
                <li>Flavoring liqueurs and cordials</li>
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
                  <span className="font-semibold">Packaging:</span> 25kg/50kg
                  Poly Propylene (PP) bags
                </li>
                <li>
                  <span className="font-semibold">Best Buying Time:</span>{" "}
                  March-June
                </li>
                <li>
                  <span className="font-semibold">HS Code:</span> 09093129
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-amber-700 flex items-center">
              <Leaf className="mr-2 h-6 w-6" /> IPM Cumin Seeds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Our Integrated Pest Management (IPM) approach ensures sustainable
              pest management while preserving environmental health. We employ
              techniques such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Crop rotation</li>
              <li>Biological control</li>
              <li>Cultural practices</li>
              <li>Judicious chemical use</li>
            </ul>
            <p className="text-gray-600 mt-4">
              This approach effectively manages pests like aphids, thrips,
              whiteflies, and powdery mildew while safeguarding crop quality and
              sustainability.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-amber-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Why Choose
              GlobexAgriExport for Cumin Seeds?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  🌟 Premium Quality
                </h3>
                <p className="text-gray-600">
                  Meticulously sourced and processed to ensure superior flavor
                  and aroma.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  🌿 Sustainable Practices
                </h3>
                <p className="text-gray-600">
                  Our IPM approach ensures environmentally friendly and
                  sustainable production.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  🔬 Rigorous Quality Control
                </h3>
                <p className="text-gray-600">
                  Strict quality checks ensure our cumin seeds meet
                  international standards.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  🌱 Authentic Source
                </h3>
                <p className="text-gray-600">
                  Sourced directly from the finest cumin-growing regions in
                  India.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  🚚 Efficient Logistics
                </h3>
                <p className="text-gray-600">
                  Streamlined supply chain ensures timely delivery and product
                  freshness.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  🌐 Global Reach
                </h3>
                <p className="text-gray-600">
                  Extensive network allows us to export our premium cumin seeds
                  worldwide.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  📊 Market Insights
                </h3>
                <p className="text-gray-600">
                  Provide valuable information on cumin market trends and
                  forecasts.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  🤝 Customer-Centric Approach
                </h3>
                <p className="text-gray-600">
                  Tailored solutions and responsive support to meet diverse
                  client needs.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  💼 Expert Team
                </h3>
                <p className="text-gray-600">
                  Our experienced professionals ensure smooth transactions and
                  superior product knowledge.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
