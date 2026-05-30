"use client";

import { Clock, Coffee, Utensils } from "lucide-react";

export default function AboutUs() {
  return (
    <section className=" py-20 px-6 text-center">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl tracking-wide font-medium text-gray-800 mb-6">
        WELCOME TO THE SHREE MOHANAM
      </h2>

      {/* Description */}
      <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base">
        The Shree Mohanam is a collection of intimate luxury hotels hidden in
        holiday destinations across India and the world. Our hotels recall an
        era when holidays were sun-kissed and still, where the days were spent
        idling and flipping through old magazines against the backdrop of
        charming, quiet neighbourhoods. In that spirit, The Shree Mohanam
        combines luxury with simplicity, helping you retreat to a life you’ve
        always wanted - simple, un-hurried and filled with rich, little
        discoveries.
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-5xl mx-auto">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center border border-gray-400 rounded-full mb-4">
            <Clock className="w-6 h-6 text-gray-700" />
          </div>
          <p className="text-sm font-medium text-gray-800 tracking-wide">
            CHECK-IN & CHECK-OUT ANYTIME
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center border border-gray-400 rounded-full mb-4">
            <Coffee className="w-6 h-6 text-gray-700" />
          </div>
          <p className="text-sm font-medium text-gray-800 tracking-wide">
            BREAKFAST ANYTIME
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center border border-gray-400 rounded-full mb-4">
            <Utensils className="w-6 h-6 text-gray-700" />
          </div>
          <p className="text-sm font-medium text-gray-800 tracking-wide">
            AUTHENTIC REGIONAL CUISINE
          </p>
        </div>
      </div>
    </section>
  );
}
