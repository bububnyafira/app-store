import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
}

interface ProductSectionProps {
  title?: string;
  products?: Product[];
  onAddToCart?: (id: string) => void;
}

const defaultProducts: Product[] = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    price: 299.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
  {
    id: "2",
    title: "Smart Fitness Watch",
    price: 199.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
  },
  {
    id: "3",
    title: "Wireless Earbuds",
    price: 159.99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80",
  },
  {
    id: "4",
    title: "Smart Speaker",
    price: 129.99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&q=80",
  },
];

const ProductSection = ({
  title = "Featured Products",
  products = defaultProducts,
  onAddToCart = () => {},
}: ProductSectionProps) => {
  return (
    <section className="w-full max-w-[1200px] mx-auto p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
