import Image from "next/image";

const HotelGallery = ({ images }: any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {images.map((img: string, i: number) => (
        <div key={i} className="relative h-40">
          <Image
            src={img}
            alt="hotel"
            fill
            className="object-cover rounded-lg hover:scale-105 transition"
          />
        </div>
      ))}
    </div>
  );
};

export default HotelGallery;
