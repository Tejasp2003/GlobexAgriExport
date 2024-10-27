import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Leaf } from "lucide-react";
import { products, ProductCategory } from "../../data/products";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function CategoryPage(props: {
  params: Promise<{ category: string }>;
}) {
  const params = await props.params;

  const categoryKey = params?.category?.replace("-", "_") as ProductCategory;
  const category = products[categoryKey];

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-yellow-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-green-800 inline-flex items-center">
            <Leaf className="mr-2 h-12 w-12 text-green-600" />
            {category.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of {category.name.toLowerCase()}, sourced from nature's finest harvests.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.subcategories.map((product) => (
            <Card
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <CardHeader className="p-0">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6 bg-white">
                <CardTitle className="text-2xl font-bold mb-3 text-green-700 group-hover:text-green-600 transition-colors duration-300">
                  {product.name}
                </CardTitle>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-semibold">
                  {product.description}
                </p>
              
              </CardContent>
              <CardFooter className="p-6 bg-green-50">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Link
                    href={`/products/${categoryKey}/${product.name
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="flex items-center justify-center text-lg"
                  >
                    Explore {product.name} <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(products).map((category) => ({
    category: category.replace("_", "-"),
  }));
}