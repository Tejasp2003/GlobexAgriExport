"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Leaf,
  ShieldCheck,
  Truck,
  Users,
  Apple,
  Wheat,
  Bean,
  Cherry,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const productCategories = [
  { icon: Apple, name: "Fresh Fruits & Vegetables 🍇 " },
  { icon: Wheat, name: "Grains & Cereals 🌾" },
  { icon: Bean, name: "Pulses & Legumes 🌱" },
  { icon: Leaf, name: "Spices & Herbs 🌿" },
  { icon: Cherry, name: "Dried Fruits & Nuts 🥜" },
];

const chooseUsReasons = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance 🏆",
    description: "Rigorous quality checks at every stage.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices 🌱",
    description: "Environmentally friendly sourcing and packaging.",
  },
  {
    icon: Truck,
    title: "Timely Delivery ⏰",
    description: "Efficient logistics to ensure on-time delivery.",
  },
  {
    icon: Users,
    title: "Customer Focused 🤝",
    description: "Customized solutions to meet your needs.",
  },
];

const regions = ["North America", "Europe", "Middle East", "Asia"];

export default function AboutPage() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-yellow-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6 text-green-800">
            Welcome to Globex Agri Export 🌍
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Globex Agri Export, we are dedicated to bringing the finest
            agricultural products from our fields to the global market 🌾. As a
            leading exporter of quality produce, we partner with farmers to
            deliver fresh, organic, and sustainably grown products to our
            clients worldwide 🌱.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-green-700 mb-4">
                Who We Are 🌿
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-gray-600">
                Founded on principles of quality 🏆, transparency 🔍, and
                commitment 🤝, Globex Agri Export has been serving international
                markets with top-notch agricultural goods. With our expertise in
                logistics and our commitment to fair trade, we ensure that each
                product meets international standards and exceeds customer
                expectations.
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700 transition-colors duration-300 mt-4"
                onClick={() => {
                  window.location.href = "mailto:globexagriexport@gmail.com";
                }}
              >
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-green-700 mb-4">
                Our Products 🌾
              </CardTitle>
              <CardDescription className="text-xl mb-6">
                Our extensive product range includes a variety of high-quality
                agricultural goods.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {productCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center p-6 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100 hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <category.icon className="h-16 w-16 text-green-600 mb-4" />
                    <span className="text-lg font-medium text-gray-700">
                      {category.name}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-xl text-gray-600">
                Every item we export is carefully sourced 🌱, processed 🏭, and
                packaged 📦 to retain its freshness and nutritional value. We
                work closely with trusted growers to maintain consistent quality
                and supply.
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700 transition-colors duration-300 mt-4"
                onClick={() => {
                    window.location.href = "/products";
                }}
              >
                Explore All Products
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-green-700 mb-4">
                Why Choose Us? 🌟
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {chooseUsReasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full p-6">
                      <CardContent className="flex flex-col items-center">
                        <reason.icon className="h-12 w-12 text-green-600 mb-4" />
                        <h3 className="text-2xl font-semibold mb-3 text-center">
                          {reason.title}
                        </h3>
                        <p className="text-center text-gray-600 text-lg">
                          {reason.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-green-700 flex items-center mb-4">
                <Globe className="mr-4 h-10 w-10" />
                Global Reach, Local Touch 🌎
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-gray-600 mb-8">
                With clients in North America 🇺🇸, Europe 🇪🇺, Middle East 🇦🇪, and
                Asia 🇯🇵, Globex Agri Export is a trusted name in agriculture
                exports. Our team is committed to connecting communities through
                high-quality food and fostering partnerships that grow together
                🤝.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {regions.map((region, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center bg-green-100 rounded-lg p-6 cursor-pointer transition-colors duration-300"
                    whileHover={{ scale: 1.05, backgroundColor: "#86efac" }}
                    onHoverStart={() => setHoveredRegion(region)}
                    onHoverEnd={() => setHoveredRegion(null)}
                  >
                    <span className="font-semibold text-green-700 text-xl">
                      {region}
                    </span>
                  </motion.div>
                ))}
              </div>
              {hoveredRegion && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 text-center text-green-600 text-xl"
                >
                  Serving quality products to {hoveredRegion} 🌿
                </motion.p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
