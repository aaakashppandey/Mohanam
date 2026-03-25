"use client";

import { useBooking } from "../../hooks/useBookings";
import GuestSelector from "./GuestSelector";

const BookingBar = () => {
  const {
    checkIn,
    checkOut,
    guests,
    nights,
    setCheckIn,
    setCheckOut,
    setGuests,
  } = useBooking();

  return (
    <div className="border p-4 rounded-2xl shadow-md flex flex-wrap gap-4 items-center bg-white">
      {/* Check-in */}
      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setCheckIn(new Date(e.target.value))}
        className="border p-2 rounded"
      />

      {/* Check-out */}
      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setCheckOut(new Date(e.target.value))}
        className="border p-2 rounded"
      />

      {/* Guests */}
      <GuestSelector guests={guests} setGuests={setGuests} />

      {/* Nights */}
      <div>
        <p className="text-xs text-gray-500">Nights</p>
        <p className="font-bold">{nights}</p>
      </div>

      {/* CTA */}
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
        Check Availability
      </button>
    </div>
  );
};

export default BookingBar;
