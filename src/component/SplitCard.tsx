"use client";

import Image from "next/image";
import Link from "next/link";

interface SplitCardProps {
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  reverse?: boolean; // 👈 controls left/right layout
}

export default function SplitCard({
  title,
  description,
  image,
  ctaText = "Explore",
  ctaLink = "#",
  reverse = false,
}: SplitCardProps) {
  return (
    <section className="w-full">
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT SECTION */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-16 md:px-16">
          <div className="max-w-md">
            <h2 className="text-xl md:text-2xl tracking-wide text-gray-800 mb-4">
              {title}
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
              {description}
            </p>

            <Link
              href={ctaLink}
              className="text-sm tracking-wide text-gray-800 underline underline-offset-4 hover:text-indigo-600 transition"
            >
              {ctaText.toUpperCase()}
            </Link>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
