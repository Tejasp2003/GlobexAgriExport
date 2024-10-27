import Image from "next/image";
import { notFound } from "next/navigation";
import { products, ProductCategory, Subcategory } from "../../../data/products";
import Onion from "@/components/products/Onion";

import Ginger from "@/components/products/Ginger";
import CuminExport from "@/components/products/Cumin";
import TurmericExport from "@/components/products/Turmeric";
import CorianderSeedExport from "@/components/products/CorianderSeed";
import BlackPepperExport from "@/components/products/BlackPepper";
import FenugreekExport from "@/components/products/FenuGreek";
import FennelSeedExport from "@/components/products/FenelSeed";
import PeanutExport from "@/components/products/Peanut";
import SoyabeanExport from "@/components/products/Soyabean";
import SorghumExport from "@/components/products/Sorghum";
import GreenMilletExport from "@/components/products/GreenMillet";
import YellowMaizeExport from "@/components/products/YellowMaize";
import ChickpeasExport from "@/components/products/ChicPeas";
import RiceExport from "@/components/products/Rice";
import BarleyExport from "@/components/products/Barley";

export default async function ProductPage(props: {
  params: Promise<{ category: string; product: string }>;
}) {
  const params = await props.params;

  const category = params.category as ProductCategory;

  const productName = params.product.replace("-", " ");

  console.log("Product Name: ", productName);

  if (!products[category]) {
    notFound();
  }

  const product = products[category].subcategories.find(
    (sub) => sub.name.toLowerCase() === productName.toLowerCase()
  );

  if (!product) {
    notFound();
  }

  return (
    // <div className="h-screen mx-auto px-4 py-8  bg-gradient-to-r from-green-100 to-yellow-100">
    //   <h1 className="text-3xl font-bold mb-8 text-center">{product.name}</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //     <div>
    //       <Image
    //         src={product.image}
    //         alt={product.name}
    //         width={500}
    //         height={500}
    //         className="rounded-lg shadow-md"
    //       />
    //     </div>
    //     <div>
    //       <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
    //       <p className="text-gray-700 mb-4">{product.description}</p>
    //       <h3 className="text-xl font-semibold mb-2">Varieties:</h3>
    //       <ul className="list-disc list-inside text-gray-700 mb-4">
    //         {product.varieties.map((variety) => (
    //           <li key={variety}>{variety}</li>
    //         ))}
    //       </ul>
    //       <div className="mt-8">
    //         <h3 className="text-xl font-semibold mb-2">Request a Quote</h3>
    //         <p className="text-gray-700 mb-4">
    //           Interested in our {product.name}? Contact us for pricing and
    //           availability.
    //         </p>
    //         <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
    //           Contact Sales
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>{productName === "onion" && <Onion />}
    {productName === "ginger" && <Ginger/>}
    {productName === "cumin" && <CuminExport/>}
    {productName === "turmeric" && <TurmericExport/>}
    {productName === "coriander seeds" && <CorianderSeedExport/>}
    {productName === "black pepper" && <BlackPepperExport/>}
    {productName === "fenu greek" && <FenugreekExport/>}
    {productName === "fennel seeds" && <FennelSeedExport/>}
    {productName === "peanut" && <PeanutExport/>}
    {productName === "soyabean" && <SoyabeanExport/>}
    {productName === "sorghum" && <SorghumExport/>}
    {productName === "green millet" && <GreenMilletExport/>}
    {productName === "yellow maize" && <YellowMaizeExport/>}
    {productName === "chic peas" && <ChickpeasExport/>}
    {productName === "rice" && <RiceExport/>}
    {productName === "barley" && <BarleyExport/>}
    </>
  );
}
