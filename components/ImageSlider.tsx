"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import FirstImage from "@/public/images/firstss.jpg";
import SecondImage from "@/public/images/secondss.jpg";
import ThirdImage from "@/public/images/thirdss.jpg";
import FourthImage from "@/public/images/fourthss.jpg";

const images = [
  { src: FirstImage, alt: "Agricultural Landscape 1" },
  { src: SecondImage, alt: "Fresh Produce" },
  { src: ThirdImage, alt: "Export Facility" },
  { src: FourthImage, alt: "Fresh Produce 2" },
];

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Sow Seeds of Success
          </h1>
          <p className="text-xl text-white mb-8">
            Exporting Quality Agri-Commodities Worldwide
          </p>
          <Button
            variant="default"
            size="lg"
            onClick={() => router.push("/products")}
            className="bg-green-600 hover:bg-green-700"
          >
            Explore Our Products
          </Button>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={prevImage}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous image</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={nextImage}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next image</span>
      </Button>
    </div>
  );
}
