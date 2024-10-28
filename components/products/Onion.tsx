"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Package, Truck, CheckCircle, Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import OnionImage from "@/public/images/onion.jpg";
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

export default function OnionExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Premium Quality Onions";
  const shareDescription =
    "Globex Agri Export is a distinguished exporter of fresh onions, delivering superior quality produce to discerning customers worldwide.";
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800 flex items-center justify-center">
            <Leaf className="mr-2 h-8 w-8 md:h-12 md:w-12  text-green-600" />
            Globex Agri Export
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Distinguished exporter of fresh onions, delivering superior quality
            produce to discerning customers worldwide.
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
                  src={OnionImage}
                  alt="Fresh Onions"
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
                Variety of Onions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We take pride in offering a wide selection of onion varieties,
                including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Esteemed Gujarat Onion</li>
                <li>Renowned Nashik Onion</li>
                <li>Other premium options</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Our advanced packing, grading, and sorting facility ensure that
                each onion meets stringent quality standards, resulting in a
                perfect size and impeccable quality.
              </p>
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
                  <span className="font-semibold">Colour:</span> Red, White,
                  Yellow
                </li>
                <li>
                  <span className="font-semibold">Style:</span> Fresh
                </li>
                <li>
                  <span className="font-semibold">Shape:</span> Round
                </li>
                <li>
                  <span className="font-semibold">Size:</span> Available in
                  40mm+ and 55mm+
                </li>
                <li>
                  <span className="font-semibold">Origin:</span> Proudly sourced
                  from India
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
              <p className="text-gray-600 mb-4">
                To accommodate diverse customer preferences, our onions are
                meticulously packed in:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>10kg mesh bags</li>
                <li>20kg mesh bags</li>
                <li>25kg mesh bags</li>
                <li>50kg mesh bags</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Our packaging is designed to preserve freshness and extend shelf
                life, ensuring that our onions reach their destination in
                optimal condition.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700 flex items-center">
                <Truck className="mr-2 h-6 w-6" /> Loading and Transportation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>Utilize 40ft reefer high containers for loading</li>
                <li>Load capacity of 29 metric tons</li>
                <li>Efficiently packed to maximize space</li>
                <li>Minimize transit time</li>
                <li>Maintain freshness of produce</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-green-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Why Choose
              Globex Agri Export?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🌟 Premium Quality
                </h3>
                <p className="text-gray-600">
                  Our onions undergo rigorous quality checks to meet
                  international standards, ensuring superior taste and
                  freshness.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  ⏰ Reliability
                </h3>
                <p className="text-gray-600">
                  With a proven track record of on-time delivery and
                  consistency, we are your trusted partner in fresh onion
                  exports.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🎁 Customization
                </h3>
                <p className="text-gray-600">
                  We offer flexible packaging options and personalized services
                  to cater to the unique requirements of each customer.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🌱 Sustainability Commitment
                </h3>
                <p className="text-gray-600">
                  Our dedication to sustainable farming practices and ethical
                  sourcing prioritizes environmental conservation and social
                  responsibility.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🌐 Global Reach
                </h3>
                <p className="text-gray-600">
                  With established networks in major markets worldwide, we
                  ensure smooth international transactions and timely
                  deliveries.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🔬 Advanced Technology
                </h3>
                <p className="text-gray-600">
                  We employ cutting-edge sorting and grading technologies to
                  maintain consistent quality across all our shipments.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🚚 Efficient Logistics
                </h3>
                <p className="text-gray-600">
                  Our streamlined supply chain and strategic partnerships ensure
                  quick turnaround times and cost-effective shipping solutions.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  📊 Market Insights
                </h3>
                <p className="text-gray-600">
                  We provide our clients with valuable market intelligence and
                  trend forecasts to help inform their purchasing decisions.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  💼 Professional Team
                </h3>
                <p className="text-gray-600">
                  Our experienced staff brings decades of combined expertise in
                  agriculture, trade, and customer service to every transaction.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
