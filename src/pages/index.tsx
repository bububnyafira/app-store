import React from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import ProductSection from "@/components/ProductSection";

interface HomePageProps {
  onSearch?: (query: string) => void;
  onAddToCart?: (id: string) => void;
  cartItemCount?: number;
  userName?: string;
  isLoggedIn?: boolean;
}

const HomePage = ({
  onSearch = () => {},
  onAddToCart = () => {},
  cartItemCount = 3,
  userName = "John Doe",
  isLoggedIn = true,
}: HomePageProps) => {
  const recommendedProducts = [
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

  const trendingProducts = [
    {
      id: "5",
      title: "4K Ultra HD Smart TV",
      price: 899.99,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80",
    },
    {
      id: "6",
      title: "Gaming Laptop",
      price: 1299.99,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80",
    },
    {
      id: "7",
      title: "Smartphone Pro Max",
      price: 1099.99,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80",
    },
    {
      id: "8",
      title: "Tablet Air",
      price: 599.99,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemCount={cartItemCount}
        onSearch={onSearch}
        userName={userName}
        isLoggedIn={isLoggedIn}
      />

      <main className="flex flex-col items-center gap-8 pb-12">
        <HeroBanner />

        <div className="w-full max-w-[1200px] px-4">
          <CategoryGrid />
        </div>

        <div className="w-full max-w-[1200px] px-4">
          <ProductSection
            title="Recommended for You"
            products={recommendedProducts}
            onAddToCart={onAddToCart}
          />
        </div>

        <div className="w-full max-w-[1200px] px-4">
          <ProductSection
            title="Trending Products"
            products={trendingProducts}
            onAddToCart={onAddToCart}
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
