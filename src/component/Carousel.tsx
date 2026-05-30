"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Plane } from "lucide-react";

interface CarouselProps {
  images?: string[];
  texts?: { quote: string; author: string }[];

  type?: "image" | "text"; // content type
  variant?: "hero" | "compact"; // layout style

  showArrows?: boolean;
  autoPlay?: boolean;
  interval?: number;
  height?: string;
}

export default function Carousel({
  images = [],
  texts = [],
  type = "image",
  showArrows = true,
  variant = "hero",
  autoPlay = false,
  interval = 3000,
  height,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const dataLength = type === "image" ? images.length : texts.length;
  const containerHeight =
    height ||
    (variant === "hero"
      ? "h-screen"
      : type === "text"
        ? "h-[300px] md:h-[350px]"
        : "h-[250px] md:h-[350px]");
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === dataLength - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, dataLength]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? dataLength - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === dataLength - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full bg-gray-100">
      {/* ================= IMAGE MODE ================= */}
      {type === "image" && (
        <div className={`relative w-full overflow-hidden ${containerHeight}`}>
          {images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="carousel"
              fill
              className={`object-cover absolute inset-0 transition-opacity duration-700 ${
                i === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>
      )}

      {/* ================= TEXT MODE ================= */}
      {type === "text" && (
        <div
          className={`relative flex flex-col items-center justify-center text-center ${containerHeight} px-6`}
        >
          {/* ✅ Plane (STATIC - always visible) */}
          <Plane className="absolute top-8 left-1/2 -translate-x-1/2 text-gray-500" />

          {/* Slides */}
          {texts.map((item, i) => (
            <div
              key={i}
              className={`absolute max-w-3xl px-6 transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Quote */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-12">
                “{item.quote}”
              </p>

              {/* Divider */}
              <div className="w-12 h-[1px] mx-auto my-6" />

              {/* Author */}
              <p className="text-sm text-gray-600 tracking-wide">
                {item.author}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute z-20 top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute z-20 top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
}
