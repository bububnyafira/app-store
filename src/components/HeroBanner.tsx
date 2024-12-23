import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BannerItem {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

interface HeroBannerProps {
  banners?: BannerItem[];
  autoRotateInterval?: number;
  onBannerClick?: (banner: BannerItem) => void;
}

const defaultBanners: BannerItem[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop",
    title: "Summer Sale",
    description: "Up to 50% off on summer collection",
    link: "/summer-sale",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&h=400&fit=crop",
    title: "New Arrivals",
    description: "Check out our latest products",
    link: "/new-arrivals",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200&h=400&fit=crop",
    title: "Special Offers",
    description: "Limited time deals on premium items",
    link: "/special-offers",
  },
];

const HeroBanner = ({
  banners = defaultBanners,
  autoRotateInterval = 5000,
  onBannerClick = () => {},
}: HeroBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [banners.length, autoRotateInterval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[400px] bg-white">
      <Card className="w-full h-full overflow-hidden">
        <div
          className="relative w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="absolute top-0 left-0 w-full h-full flex">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className="min-w-full h-full relative"
                onClick={() => onBannerClick(banner)}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <h2 className="text-4xl font-bold mb-2">{banner.title}</h2>
                  <p className="text-xl">{banner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HeroBanner;
