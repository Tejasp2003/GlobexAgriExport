'use client'

import { useEffect, useState, useRef } from "react"
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Leaf,
  Package,
  Globe,
  ChevronRight,
  ChevronLeft,
  MapPin,
} from "lucide-react"
import ImageSlider from "@/components/ImageSlider"
import { Button } from "@/components/ui/button"
import WorldMapImage from "@/public/images/worldmap.webp"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"
import PeanutImage from "@/public/images/peanuts.jpg"
import TurmericImage from "@/public/images/turmeric.jpg"
import OnionImage from "@/public/images/onion.jpg"
import YellowMaizeImage from "@/public/images/yellowmaize.jpg"


const categories = [
  {
    name: "Oil Seeds",
    image: PeanutImage,
  },
  {
    name: "Spices",
    image: TurmericImage,
  },
  {
    name: "Fresh Produce",
    image: OnionImage,
  },
  {
    name: "Other Commodities",
    image: YellowMaizeImage,
  },
]

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4)
  const [repeatedCategories, setRepeatedCategories] = useState(categories)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      let newCardsPerView
      if (screenWidth >= 1024) newCardsPerView = 4
      else if (screenWidth >= 768) newCardsPerView = 3
      else if (screenWidth >= 640) newCardsPerView = 2
      else newCardsPerView = 1

      setCardsPerView(newCardsPerView)

      const repeatCount = Math.ceil(12 / categories.length)
      const newRepeatedCategories = Array(repeatCount).fill(categories).flat().slice(0, Math.max(12, categories.length))
      setRepeatedCategories(newRepeatedCategories)

      setCurrentCategory(prevIndex => Math.min(prevIndex, newRepeatedCategories.length - newCardsPerView))
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextCategory()
    }, 3000)
    return () => clearInterval(timer)
  }, [cardsPerView, repeatedCategories.length])

  const nextCategory = () => {
    setCurrentCategory(prev => (prev + 1) % (repeatedCategories.length - cardsPerView + 1))
  }

  const prevCategory = () => {
    setCurrentCategory(prev => (prev - 1 + repeatedCategories.length) % repeatedCategories.length)
  }

  const isNextDisabled = currentCategory === repeatedCategories.length - cardsPerView
  const isPrevDisabled = currentCategory === 0

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ImageSlider />

        <AnimatedSection>
          <section className="py-16 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-green-800">
                Our Product Categories
              </h2>
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentCategory * (100 / cardsPerView)}%)`,
                    }}
                  >
                    {repeatedCategories.map((category, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 px-4 ${
                          cardsPerView === 4 ? 'w-1/4' :
                          cardsPerView === 3 ? 'w-1/3' :
                          cardsPerView === 2 ? 'w-1/2' : 'w-full'
                        }`}
                      >
                        <Card className="hover:shadow-lg transition duration-300 h-full bg-gradient-to-r from-green-100 to-yellow-100">
                          <CardHeader>
                            <Image
                              src={category.image}
                              alt={category.name}
                              width={300}
                              height={300}
                              className="mx-auto mb-4 rounded-lg object-cover"
                            />
                            <CardTitle className="text-2xl font-semibold text-center text-green-700">
                              {category.name}
                            </CardTitle>
                          </CardHeader>
                          <CardFooter className="justify-center">
                            <Button variant="outline" asChild>
                              <Link
                                href={`/products/${category.name.toLowerCase().replace(" ", "-")}`}
                                className="flex items-center"
                              >
                                Explore <ChevronRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2"
                  onClick={prevCategory}
                  disabled={isPrevDisabled}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2"
                  onClick={nextCategory}
                  disabled={isNextDisabled}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-16 bg-gradient-to-b from-white to-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-green-800">
                Our Global Reach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src={WorldMapImage}
                    alt="World Map"
                    width={400}
                    height={400}
                    className="mx-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">
                    Exporting to 50+ Countries
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our high-quality agricultural products reach customers
                    across the globe, ensuring freshness and quality in every
                    shipment.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {["North America", "Europe", "Asia", "Middle East"].map(
                      (region, index) => (
                        <div key={index} className="flex items-center">
                          <MapPin className="h-6 w-6 text-green-600 mr-2" />
                          <span>{region}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-16 bg-green-600 text-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">
                Our Impact in Numbers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: 50, label: "Countries Served" },
                  { value: 1000, label: "Happy Clients" },
                  { value: 25000, label: "Tons Exported" },
                  { value: 15, label: "Years of Excellence" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <CountUp
                      end={item.value}
                      duration={2.5}
                      className="text-5xl font-bold"
                    />
                    <p className="mt-2 text-lg">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose GlobexAgriExport?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Package,
                    title: "Quality Assurance",
                    description:
                      "We ensure the highest quality standards for all our products.",
                  },
                  {
                    icon: Globe,
                    title: "Global Reach",
                    description:
                      "Our products are exported to countries worldwide.",
                  },
                  {
                    icon: Leaf,
                    title: "Sustainable Practices",
                    description:
                      "We're committed to environmentally friendly farming methods.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <item.icon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 text-green-800">
                Ready to Export with Us?
              </h2>
              <p className="text-center text-gray-600 mb-8 text-lg">
                Discover our wide range of high-quality agricultural products
                and start your export journey today.
              </p>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Link href="/products">Explore Our Products</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">About Us</h4>
              <p className="text-gray-300">
                Globex Agri Export is a leading exporter of quality agricultural
                products, committed to delivering the best to our global
                customers.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
               
                <li>
                  <Link
                    href="/products"
                    className="text-gray-300 hover:text-green-400 transition duration-200"
                  >
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-green-400 transition duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">
                Contact Information
              </h4>
              
              <p className="text-gray-300">Email: globexagriexport@gmail.com</p>
              <p className="text-gray-300">Phone: +91 9104214645</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2024 Globex Agri Export. All rights reserved.</p>
          </div>
        </div>
      </footer>
    
    </div>
  )
}