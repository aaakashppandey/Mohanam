const HotelInfo = ({ hotel }: any) => {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="text-gray-600">
        Experience luxury stay with premium amenities and comfort.
      </p>

      <h3 className="text-xl font-semibold">Amenities</h3>
      <div className="flex gap-4 text-gray-600">
        <span>📶 WiFi</span>
        <span>🏊 Pool</span>
        <span>🚗 Parking</span>
      </div>
    </div>
  );
};

export default HotelInfo;
