"use client"; 
import Image from "next/image"
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
import { useState } from "react";
import GingerImage from "@/public/images/ginger.jpg";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Ginger() {

  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Indian Fresh Ginger";
  const shareDescription =
    "Discover the premium quality of Indian fresh ginger from Globex Agri Export. Learn about its characteristics, culinary uses, health benefits, and why you should choose us as your ginger supplier.";
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-orange-800 inline-flex items-center">
            <Leaf className="mr-2 h-12 w-12 text-orange-600" />
            GlobexAgriExport
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Distinguished exporter of premium Indian fresh ginger, delivering exceptional quality and flavor to discerning customers worldwide.
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
                  src={GingerImage}
                  alt="Fresh Ginger"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-700">Indian Fresh Ginger</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our Indian fresh ginger is renowned for its exceptional quality, intense flavor, and aromatic fragrance. Harvested from the fertile regions of South India and northeastern states, it offers:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Distinctive pale golden-yellow hue</li>
                <li>Smooth, taut skin with fibrous flesh</li>
                <li>Plump and robust rhizomes with multiple fingers</li>
                <li>Harmonious blend of spicy heat and subtle sweetness</li>
                <li>Earthy, citrusy undertones in aroma</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Characteristics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-semibold">Origin:</span> South India (Kerala, Karnataka) and Northeast (Assam, Meghalaya)</li>
                <li><span className="font-semibold">Appearance:</span> Pale golden-yellow, smooth skin</li>
                <li><span className="font-semibold">Texture:</span> Fibrous flesh</li>
                <li><span className="font-semibold">Flavor:</span> Spicy heat with subtle sweetness</li>
                <li><span className="font-semibold">Aroma:</span> Earthy with citrusy undertones</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-700 flex items-center">
                <Package className="mr-2 h-6 w-6" /> Culinary Uses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Indian fresh ginger is prized for its culinary versatility:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Savory dishes: curries, stir-fries, chutneys</li>
                <li>Sweet treats: desserts, beverages</li>
                <li>Preparation methods: grated, sliced, minced, juiced</li>
                <li>Essential ingredient in countless Indian dishes</li>
                <li>Adds bold, invigorating kick to every bite</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-700 flex items-center">
                <Truck className="mr-2 h-6 w-6" /> Health Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Aids digestion</li>
                <li>Relieves nausea</li>
                <li>Reduces inflammation</li>
                <li>Boosts immunity</li>
                <li>Used in Ayurvedic medicine and traditional healing practices</li>
                <li>Incorporated into herbal remedies, teas, and tonics</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-orange-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Why Choose GlobexAgriExport for Indian Ginger?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">🌟 Premium Quality</h3>
                <p className="text-gray-600">Our ginger undergoes rigorous quality checks to ensure exceptional flavor and freshness.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">🌿 Authentic Source</h3>
                <p className="text-gray-600">Sourced directly from the finest ginger-growing regions in India for unparalleled authenticity.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">🔬 Advanced Processing</h3>
                <p className="text-gray-600">State-of-the-art facilities ensure optimal cleaning, sorting, and packaging of our ginger.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">🌱 Sustainable Practices</h3>
                <p className="text-gray-600">Committed to environmentally friendly farming and ethical sourcing methods.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">🚚 Efficient Logistics</h3>
                <p className="text-gray-600">Streamlined supply chain ensures timely delivery and maintains product freshness.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">🌐 Global Reach</h3>
                <p className="text-gray-600">Extensive network allows us to export our premium ginger to markets worldwide.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">📊 Market Insights</h3>
                <p className="text-gray-600">Provide valuable information on ginger market trends and forecasts to our clients.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">🤝 Customer-Centric Approach</h3>
                <p className="text-gray-600">Tailored solutions and responsive support to meet diverse client needs.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">💼 Expert Team</h3>
                <p className="text-gray-600">Our experienced professionals ensure smooth transactions and superior product knowledge.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}