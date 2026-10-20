import HotelHeader from "../../component/hotel/HotelHeader";
import HotelGallery from "../../component/hotel/HotelGallery";
import HotelInfo from "../../component/hotel/HotelInfo";
import RoomCard from "../../component/room/RoomCard";
import CheckInCheckOut from "@/src/component/CheckInCheckOut";
import Carousel from "@/src/component/Carousel";
import BookingBar from "@/src/component/booking/BookingBar";
import AboutUs from "@/src/component/AboutUs";
import SplitCard from "@/src/component/SplitCard";
import Layout from "@/src/app/layout";

const hotel = {
  name: "Radisson Blu",
  location: "New Delhi",
  rating: 4.5,
  images: ["/hotel1.jpg", "/hotel2.jpg"],
  rooms: [
    {
      id: "room-1",
      name: "Deluxe Room",
      price: 5999,
      features: ["WiFi", "AC"],
    },
  ],
};

const images: string[] = [
  "/Carousel/deluxe.png",
  "/Carousel/banquet.png",
  "/Carousel/suite.png",
  "/Carousel/reception.png",
];
const testimonials = [
  {
    quote:
      "We believe guests want to stay in a place where the hotel does the thinking for them, where they get the simple things right, yet offer fantastic spaces for them to relax.",
    author: "The Economic Times",
  },
  {
    quote:
      "A beautiful blend of luxury and simplicity that redefines travel experience.",
    author: "Travel Magazine",
  },
];

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <div className="relative overflow-hidden">
          <Carousel
            images={images}
            variant="hero"
            autoPlay={true}
            showArrows={false}
          />
          <div className="absolute inset-0 bg-[#050505]/75" />
        </div>

        <div
          className="absolute inset-x-0 top-6 z-20 flex justify-center px-4 text-white"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          <div className="w-full max-w-[1200px] rounded-xl border border-white/15 bg-[#0d0d0d]/80 p-3 shadow-xl backdrop-blur-[2px] md:p-4">
            <BookingBar />
          </div>
        </div>
      </div>

      <AboutUs />
      <Carousel
        images={images}
        variant="compact"
        showArrows={true}
        autoPlay={true}
      />
      <div className="py-4">


        <Carousel

          type="text"
          variant="compact"
          texts={testimonials}
          autoPlay
          showArrows={false}
        />
      </div>
      <div className="py-4">
        <SplitCard
          title="THE SHREE MOHANAM SUNSHINE CLUB"
          description="The Shree Mohanam Sunshine Club is our way of making life at our hotels even better for returning guests..."
          image={images[0]}
          ctaText="Explore"
          ctaLink="/explore"
        />
      </div>
      <div className="py-4">

        <SplitCard
          title="LUXURY REDEFINED"
          description="Experience comfort and elegance like never before..."
          image={images[1]}
          reverse={true}
        />
      </div>
    </>
  );
}
