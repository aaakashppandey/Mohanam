"use client";

import { useBooking } from "../../hooks/useBookings";
import GuestSelector from "./GuestSelector";

type Layout = "inline" | "stacked";

const BookingBar = ({ layout = "inline" }: { layout?: Layout }) => {
  const {
    checkIn,
    checkOut,
    guests,
    nights,
    setCheckIn,
    setCheckOut,
    setGuests,
  } = useBooking();
  if (layout === "stacked") {
    return (
      <div id="booking" className="w-full bg-white p-6 md:px-12 rounded-md shadow-sm">
        <div className="max-w-[800px] mx-auto">
          {/* Row 1: Check-in full width */}
          <div className="mb-4">
            <label className="text-xs text-gray-500">Check-in</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setCheckIn(new Date(e.target.value))}
              className="w-full border border-gray-200 p-3 rounded-md text-sm"
            />
          </div>

          {/* Row 2: Check-out and Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-gray-500">Check-out</label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setCheckOut(new Date(e.target.value))}
                className="w-full border border-gray-200 p-3 rounded-md text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Guests</label>
              <div className="w-full">
                <GuestSelector guests={guests} setGuests={setGuests} />
              </div>
            </div>
          </div>

          {/* Row 3: CTA */}
          <div className="text-right">
            <button className="bg-[#C46A2E] text-white px-6 py-3 rounded-sm hover:bg-[#a55524] font-semibold">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="booking" className="w-full bg-white p-6 md:px-12 rounded-md shadow-sm">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center gap-4">
        {/* Check-in */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500">Check-in</label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setCheckIn(new Date(e.target.value))}
            className="border border-gray-200 p-2 rounded-md text-sm"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500">Check-out</label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setCheckOut(new Date(e.target.value))}
            className="border border-gray-200 p-2 rounded-md text-sm"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500">Guests</label>
          <GuestSelector guests={guests} setGuests={setGuests} />
        </div>

        {/* Nights */}
        <div className="flex flex-col">
          <p className="text-xs text-gray-500">Nights</p>
          <p className="font-semibold">{nights}</p>
        </div>

        {/* CTA */}
        <div className="ml-auto">
          <button className="bg-[#C46A2E] text-white px-5 py-2 rounded-sm hover:bg-[#a55524] font-semibold">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;
