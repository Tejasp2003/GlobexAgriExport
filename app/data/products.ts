import PeanutImage from "@/public/images/peanuts.jpg";
import SoyabeanImage from "@/public/images/soyabean.jpg";
import CuminImage from "@/public/images/cumin.jpg";
import TurmericImage from "@/public/images/turmeric.jpg";
import CorianderImage from "@/public/images/corianderseeds.jpg";
import BlackPepperImage from "@/public/images/blackpepper.jpg";
import FenuGreekImage from "@/public/images/fenugrek.jpg";
import FennelImage from "@/public/images/fennelseeds.jpg";
import OnionImage from "@/public/images/onion.jpg";
import GingerImage from "@/public/images/ginger.jpg";
import SorghumImage from "@/public/images/sorghum.jpg";
import GreenMilletImage from "@/public/images/greenmillet.jpg";
import YellowMaizeImage from "@/public/images/yellowmaize.jpg";
import ChicPeasImage from "@/public/images/chicpeas.jpg";
import RiceImage from "@/public/images/rice.jpg";
import BarleyImage from "@/public/images/barley.jpg";


export const products = {
  oil_seeds: {
    name: "Oil Seeds",
    subcategories: [
      {
        name: "Peanut",
        varieties: ["Bold", "Java", "Red Natal"],
        description:
          "High-quality peanuts with various applications in food industry.",
        image: PeanutImage,
      },

      {
        name: "Soyabean",
        varieties: ["Yellow", "Black"],
        description: "Versatile soyabeans for food products and animal feed.",
        image: SoyabeanImage,
      },
    ],
  },
  spices: {
    name: "Spices",
    subcategories: [
      {
        name: "Cumin",
        varieties: ["Whole", "Ground"],
        description: "Aromatic cumin seeds essential in many cuisines.",
        image: CuminImage,
      },
      {
        name: "Turmeric",
        varieties: ["Finger", "Bulb"],
        description: "Vibrant turmeric with high curcumin content.",
        image: TurmericImage,
      },

      {
        name: "Coriander Seeds",
        varieties: ["Whole", "Ground"],
        description: "Coriander seeds with a citrusy and nutty flavor.",
        image: CorianderImage,
      },
      {
        name: "Black Pepper",
        varieties: ["Whole", "Ground"],
        description: "Bold and spicy black pepper for seasoning and cooking.",
        image: BlackPepperImage,
      },
      {
        name: "Fenu Greek",
        varieties: ["Whole", "Ground"],
        description: "Fenu Greek seeds with a sweet and nutty flavor.",
        image: FenuGreekImage
      },
      {
        name: "Fennel Seeds",
        varieties: ["Whole", "Ground"],
        description: "Fennel seeds with a sweet and licorice-like flavor.",
        image: FennelImage,
      },
    ],
  },
  fresh_produce: {
    name: "Fresh Produce",
    subcategories: [
      {
        name: "Onion",
        varieties: ["Red", "White", "Yellow"],
        description: "Fresh and aromatic onions for culinary use.",
        image: OnionImage,
      },
      {
        name: "Ginger",
        varieties: ["Fresh", "Dried"],
        description: "Spicy and aromatic ginger for cooking and medicinal use.",
        image: GingerImage,
      },
    ],
  },

  other_commodities: {
    name: "Other Commodities",
    subcategories: [
      {
        name: "Sorghum",
        description: "A versatile grain used for food, fodder, and biofuel.",
        varieties: ["Grain", "Syrup"],
        image: SorghumImage,
      },
      {
        name: "Green Millet",
        description: "A nutritious grain used in various culinary dishes.",
        varieties: ["Grain", "Flour"],
        image: GreenMilletImage,
      },
      {
        name: "Yellow Maize",
        description: "A staple grain used for food and animal feed.",
        varieties: ["Grain", "Flour"],
        image: YellowMaizeImage,
      },
      {
        name: "chick peas",
        description: "A legume used in various dishes like hummus and salads.",
        varieties: ["Dried", "Canned"],
        image: ChicPeasImage,
      },
      {
        name: "Rice",
        description: "A staple food grain consumed worldwide.",
        varieties: ["White", "Brown"],
        image: RiceImage,
      },
      {
        name: "Barley",
        description: "A versatile grain used in soups, stews, and brewing.",
        varieties: ["Grain", "Malt"],
        image: BarleyImage,
      },
    ],
  },
};

export type ProductCategory = keyof typeof products;
export type Subcategory =
  (typeof products)[ProductCategory]["subcategories"][number];
