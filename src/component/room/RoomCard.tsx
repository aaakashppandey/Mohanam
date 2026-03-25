const RoomCard = ({ room }: any) => {
  return (
    <div className="border p-4 rounded-xl flex justify-between items-center shadow-sm hover:shadow-md transition">
      <div>
        <h3 className="text-lg font-semibold">{room.name}</h3>
        <ul className="text-sm text-gray-500">
          {room.features.map((f: string, i: number) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </div>

      <div className="text-right">
        <p className="text-xl font-bold">₹{room.price}</p>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
