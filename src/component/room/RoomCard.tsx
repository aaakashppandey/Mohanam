const RoomCard = ({ room }: any) => {
  const imgSrc = room.image || "/Carousel/hotel-image1.avif";

  return (
    <div className="bg-white rounded-xl shadow-md border border-[#efe6dd] overflow-hidden flex flex-col md:flex-row items-center gap-4 p-4">
      {/* Image */}
      <div className="w-full md:w-40 h-36 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
        <img src={imgSrc} alt={room.name} className="w-full h-full object-cover" />
      </div>

      {/* Details */}
      <div className="flex-1 w-full">
        <h3 className="text-lg md:text-xl font-semibold text-[#6B4F3A]">{room.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{room.description || "Comfortable stay with modern amenities."}</p>

        <ul className="mt-3 text-sm text-[#6B4F3A] grid grid-cols-2 gap-1">
          {room.features?.map((f: string, i: number) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-[#C46A2E]">•</span>
              <span className="text-sm">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price & CTA */}
      <div className="w-full md:w-40 text-right flex flex-col items-end gap-3">
        <p className="text-2xl font-bold text-[#2D2424]">₹{room.price}</p>
        <button className="w-full md:w-auto bg-[#C46A2E] text-white px-5 py-2 rounded-md hover:bg-[#a55524] transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
