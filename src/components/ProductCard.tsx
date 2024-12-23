import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProductCardProps {
  id?: string;
  title?: string;
  price?: number;
  rating?: number;
  image?: string;
  onAddToCart?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  title = "Premium Wireless Headphones",
  price = 299.99,
  rating = 4.5,
  image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  onAddToCart = () => {},
}: ProductCardProps) => {
  return (
    <Card className="w-[280px] h-[420px] bg-white hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
          <Badge
            className="absolute top-2 right-2 bg-green-500 text-white"
            variant="secondary"
          >
            <Star className="w-4 h-4 mr-1" />
            {rating}
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2 mb-2">{title}</h3>
          <p className="text-2xl font-bold text-green-600">
            ${price.toFixed(2)}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="w-full bg-green-500 hover:bg-green-600"
                onClick={() => onAddToCart(id)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add {title} to your cart</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
