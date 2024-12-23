import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Laptop,
  Smartphone,
  Headphones,
  Camera,
  Watch,
  Gamepad,
  Shirt,
  Home,
  Gift,
  Coffee,
} from "lucide-react";

interface CategoryItem {
  icon: React.ReactNode;
  name: string;
  color: string;
}

interface CategoryGridProps {
  categories?: CategoryItem[];
}

const defaultCategories: CategoryItem[] = [
  {
    icon: <Laptop className="w-8 h-8" />,
    name: "Electronics",
    color: "bg-blue-100",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    name: "Phones",
    color: "bg-purple-100",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    name: "Audio",
    color: "bg-red-100",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    name: "Cameras",
    color: "bg-yellow-100",
  },
  {
    icon: <Watch className="w-8 h-8" />,
    name: "Watches",
    color: "bg-green-100",
  },
  {
    icon: <Gamepad className="w-8 h-8" />,
    name: "Gaming",
    color: "bg-pink-100",
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    name: "Fashion",
    color: "bg-orange-100",
  },
  { icon: <Home className="w-8 h-8" />, name: "Home", color: "bg-teal-100" },
  { icon: <Gift className="w-8 h-8" />, name: "Gifts", color: "bg-indigo-100" },
  {
    icon: <Coffee className="w-8 h-8" />,
    name: "Others",
    color: "bg-gray-100",
  },
];

const CategoryGrid = ({
  categories = defaultCategories,
}: CategoryGridProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
          >
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div
                className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-3`}
              >
                {category.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                {category.name}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
