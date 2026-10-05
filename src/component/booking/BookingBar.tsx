"use client";

import { useState } from "react";
import { useBooking } from "../../hooks/useBookings";
import GuestSelector from "./GuestSelector";

type Layout = "inline" | "stacked";

type BookingBarProps = {
  layout?: Layout;
  selectedRoom?: string;
  checkIn?: Date | null;
  checkOut?: Date | null;
  guests?: number;
  nights?: number;
  setCheckIn?: (value: Date | null) => void;
  setCheckOut?: (value: Date | null) => void;
  setGuests?: (value: number) => void;
};

const formatDate = (date: Date | null) => {
  if (!date) return "Not selected";
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const BookingBar = ({
  layout = "inline",
  selectedRoom,
  checkIn,
  checkOut,
  guests,
  nights,
  setCheckIn,
  setCheckOut,
  setGuests,
}: BookingBarProps) => {
  const localBooking = useBooking();
  const booking = {
    checkIn: checkIn ?? localBooking.checkIn,
    checkOut: checkOut ?? localBooking.checkOut,
    guests: guests ?? localBooking.guests,
    nights: nights ?? localBooking.nights,
    setCheckIn: setCheckIn ?? localBooking.setCheckIn,
    setCheckOut: setCheckOut ?? localBooking.setCheckOut,
    setGuests: setGuests ?? localBooking.setGuests,
  };

  if (layout === "stacked") {
    return (
      <div id="booking" className="w-full bg-white p-6 md:px-12 rounded-md shadow-sm">
        <div className="max-w-[800px] mx-auto">
          {selectedRoom && (
            <div className="mb-4 rounded-md border border-[#efe6dd] bg-[#fdf8f4] p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#6B4F3A]">
                Selected room
              </p>
              <p className="mt-1 text-base font-semibold text-[#2D2424]">
                {selectedRoom}
              </p>
            </div>
          )}

          {/* Row 1: Check-in full width */}
          <div className="mb-4">
            <label className="text-xs text-gray-500">Check-in</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={booking.checkIn ? booking.checkIn.toISOString().split("T")[0] : ""}
              onChange={(e) => booking.setCheckIn(e.target.value ? new Date(e.target.value) : null)}
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
                value={booking.checkOut ? booking.checkOut.toISOString().split("T")[0] : ""}
                onChange={(e) => booking.setCheckOut(e.target.value ? new Date(e.target.value) : null)}
                className="w-full border border-gray-200 p-3 rounded-md text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Guests</label>
              <div className="w-full">
                <GuestSelector guests={booking.guests} setGuests={booking.setGuests} />
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
            value={booking.checkIn ? booking.checkIn.toISOString().split("T")[0] : ""}
            onChange={(e) => booking.setCheckIn(e.target.value ? new Date(e.target.value) : null)}
            className="border border-gray-200 p-2 rounded-md text-sm"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500">Check-out</label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={booking.checkOut ? booking.checkOut.toISOString().split("T")[0] : ""}
            onChange={(e) => booking.setCheckOut(e.target.value ? new Date(e.target.value) : null)}
            className="border border-gray-200 p-2 rounded-md text-sm"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500">Guests</label>
          <GuestSelector guests={booking.guests} setGuests={booking.setGuests} />
        </div>

        {/* Nights */}
        <div className="flex flex-col">
          <p className="text-xs text-gray-500">Nights</p>
          <p className="font-semibold">{booking.nights}</p>
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

export const BookingBarModal = ({ selectedRoom }: { selectedRoom?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const booking = useBooking();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#C46A2E] px-5 py-3 text-sm font-semibold text-white rounded-sm shadow-sm transition hover:bg-[#a55524]"
      >
        Book Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl rounded-2xl bg-white p-5 shadow-2xl md:p-8">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-xl font-semibold text-gray-500 transition hover:text-gray-800"
              aria-label="Close booking modal"
            >
              ×
            </button>

            <div className="mb-6 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C46A2E]">
                Stay with us
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                Book Your Stay
              </h2>
            </div>

            <div className="mb-4 flex flex-col gap-2 rounded-md border border-[#efe6dd] bg-[#fdf8f4] p-4 text-sm text-[#2D2424] md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#6B4F3A]">
                  Room Type
                </p>
                <p className="mt-1 font-semibold">{selectedRoom || "Selected Room"}</p>
              </div>
              <div className="flex gap-4 text-sm">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#6B4F3A]">
                    Check-in
                  </p>
                  <p className="mt-1 font-semibold">{formatDate(booking.checkIn)}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#6B4F3A]">
                    Check-out
                  </p>
                  <p className="mt-1 font-semibold">{formatDate(booking.checkOut)}</p>
                </div>
              </div>
            </div>

            <BookingBar
              layout="stacked"
              selectedRoom={selectedRoom}
              checkIn={booking.checkIn}
              checkOut={booking.checkOut}
              guests={booking.guests}
              nights={booking.nights}
              setCheckIn={booking.setCheckIn}
              setCheckOut={booking.setCheckOut}
              setGuests={booking.setGuests}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BookingBar;
