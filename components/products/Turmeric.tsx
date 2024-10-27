"use client";
import Image from "next/image";
import { Leaf, MapPin, CheckCircle, Share2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TurmericImage from "@/public/images/turmeric.jpg";
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

export default function TurmericExport() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Globex Agri Export - Premium Indian Turmeric Exporter";
  const shareDescription =
    "Discover the vibrant color and exceptional quality of Indian turmeric from Globex Agri Export. Request a quote today!";
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-800 flex items-center justify-center">
            <Leaf className="mr-2 h-8 w-8 md:h-12 md:w-12  text-orange-600" />
            Globex Agri Export
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Offering premium Indian turmeric, known for its vibrant color and
            exceptional quality, to discerning customers worldwide.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base md:text-lg"
              onClick={() =>
                (window.location.href = "mailto:Globex Agri Export@gmail.com")
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
                  src={TurmericImage}
                  alt="Indian Turmeric"
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
                Indian Turmeric Excellence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                India, the world's largest turmeric producer, yields 240,000 to
                260,000 Metric Tons annually. Our turmeric, often called "Indian
                Saffron," is prized for its:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Vibrant bright yellow color</li>
                <li>High curcumin content</li>
                <li>Diverse regional varieties</li>
                <li>Superior quality across grades</li>
                <li>
                  Wide-ranging applications in culinary, medicinal, and cosmetic
                  industries
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              name: "Alleppey Turmeric",
              origin: "Kerala",
              description:
                "Known for high curcumin content and deep yellow to orange-yellow hue.",
            },
            {
              name: "Rajapuri Turmeric",
              origin: "Maharashtra",
              description:
                "Distinctive variety with unique characteristics from Maharashtra.",
            },
            {
              name: "Salem Gattha Turmeric",
              origin: "Tamil Nadu",
              description:
                "Recognized for its distinct quality from Tamil Nadu's unique climate.",
            },
            {
              name: "Nizamabad Turmeric",
              origin: "Andhra Pradesh",
              description:
                "Cultivated in Andhra Pradesh, adding to India's rich turmeric tapestry.",
            },
          ].map((variety, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-orange-700 mb-2">
                  {variety.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2 flex items-center">
                  <MapPin className="mr-1 h-4 w-4" /> {variety.origin}
                </p>
                <p className="text-sm text-gray-600">{variety.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-orange-700 flex items-center">
              <CheckCircle className="mr-2 h-8 w-8" /> Why Choose
              Globex Agri Export for Indian Turmeric?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  🌟 Premium Quality
                </h3>
                <p className="text-gray-600">
                  Sourced from the finest turmeric-growing regions in India,
                  ensuring superior color and curcumin content.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  🌿 Variety Selection
                </h3>
                <p className="text-gray-600">
                  Offering a range of turmeric varieties to suit diverse
                  customer needs and applications.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  🔬 Quality Assurance
                </h3>
                <p className="text-gray-600">
                  Rigorous testing and quality control measures to meet
                  international standards.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  🌱 Sustainable Practices
                </h3>
                <p className="text-gray-600">
                  Committed to environmentally friendly farming and ethical
                  sourcing methods.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  🚚 Efficient Logistics
                </h3>
                <p className="text-gray-600">
                  Streamlined supply chain ensures timely delivery and maintains
                  product freshness.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  🌐 Global Reach
                </h3>
                <p className="text-gray-600">
                  Extensive network allows us to export our premium turmeric to
                  markets worldwide.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  📊 Market Insights
                </h3>
                <p className="text-gray-600">
                  Providing valuable information on turmeric market trends and
                  forecasts to our clients.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  🤝 Customer-Centric Approach
                </h3>
                <p className="text-gray-600">
                  Tailored solutions and responsive support to meet diverse
                  client needs.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
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
