const HotelHeader = ({ hotel }: any) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{hotel.name}</h1>
      <p className="text-gray-500">{hotel.location}</p>
      <p className="text-yellow-500">⭐ {hotel.rating}</p>
    </div>
  );
};

export default HotelHeader;
