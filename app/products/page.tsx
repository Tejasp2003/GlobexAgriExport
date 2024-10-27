"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { products, ProductCategory, Subcategory } from "../data/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<
    [string, { name: string; subcategories: Subcategory[] }][]
  >(Object.entries(products));

  useEffect(() => {
    const results = Object.entries(products)
      .map(([key, category]) => {
        const filteredSubcategories = category.subcategories.filter(
          (subcategory) =>
            subcategory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            subcategory.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        );
        return [key, { ...category, subcategories: filteredSubcategories }];
      })
      .filter(([_, category]) => {
        if (typeof category === 'object' && 'subcategories' in category) {
          return category.subcategories.length > 0;
        }
        return false;
      });

    setFilteredProducts(
      results as [string, { name: string; subcategories: Subcategory[] }][]
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center text-green-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Products
        </motion.h1>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-2xl border-2 border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition duration-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>

        <AnimatePresence>
          {filteredProducts.length === 0 ? (
            <motion.div
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-gray-600 mt-12"
            >
              No products found. Try a different search term.
            </motion.div>
          ) : (
            filteredProducts.map(([key, category], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-3xl text-center font-semibold mb-6 text-green-700">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.subcategories.map((subcategory) => (
                    <motion.div
                      key={subcategory.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/products/${key}/${subcategory.name
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                      >
                        <Image
                          src={subcategory.image}
                          alt={subcategory.name}
                          width={300}
                          height={300}
                          className="w-full h-60 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-semibold mb-2 text-green-600">
                            {subcategory.name}
                          </h3>
                          <p className="text-gray-600 text-sm font-bold">
                            {subcategory.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            <Link href="/contact">Contact Us for Custom Orders</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
