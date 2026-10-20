"use client";

import { useState } from "react";
import { useBooking } from "../../hooks/useBookings";
import { bookingService } from "../../services/bookingService";
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
  onCheckAvailability?: () => void | Promise<void>;
  isSubmitting?: boolean;
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
  onCheckAvailability,
  isSubmitting = false,
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
      <div id="booking" className="w-full bg-transparent p-6 md:px-12 rounded-md shadow-none text-white" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <div className="max-w-[800px] mx-auto">
          {selectedRoom && (
            <div className="mb-4 rounded-md border border-white/15 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/80">
                Selected room
              </p>
              <p className="mt-1 text-base font-semibold text-white">
                {selectedRoom}
              </p>
            </div>
          )}

          {/* Row 1: Check-in full width */}
          <div className="mb-4">
            <label className="text-xs text-white/80">Check-in</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={booking.checkIn ? booking.checkIn.toISOString().split("T")[0] : ""}
              onChange={(e) => booking.setCheckIn(e.target.value ? new Date(e.target.value) : null)}
              className="w-full border border-white/20 bg-white/5 p-3 rounded-md text-sm text-white placeholder:text-white/70"
            />
          </div>

          {/* Row 2: Check-out and Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-white/80">Check-out</label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={booking.checkOut ? booking.checkOut.toISOString().split("T")[0] : ""}
                onChange={(e) => booking.setCheckOut(e.target.value ? new Date(e.target.value) : null)}
                className="w-full border border-white/20 bg-white/5 p-3 rounded-md text-sm text-white placeholder:text-white/70"
              />
            </div>

            <div>
              <label className="text-xs text-white/80">Guests</label>
              <div className="w-full">
                <GuestSelector guests={booking.guests} setGuests={booking.setGuests} />
              </div>
            </div>
          </div>

          {/* Row 3: CTA */}
          <div className="text-right">
            <button
              type="button"
              onClick={onCheckAvailability}
              disabled={isSubmitting}
              className="bg-[#C46A2E] text-white px-6 py-3 rounded-sm hover:bg-[#a55524] font-semibold disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Check Availability"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="booking" className="w-full bg-transparent p-6 md:px-12 rounded-md shadow-none text-white" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center gap-4">
        {/* Check-in */}
        <div className="flex flex-col">
          <label className="text-xs text-white/80">Check-in</label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={booking.checkIn ? booking.checkIn.toISOString().split("T")[0] : ""}
            onChange={(e) => booking.setCheckIn(e.target.value ? new Date(e.target.value) : null)}
            className="border border-white/20 bg-white/5 p-2 rounded-md text-sm text-white"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col">
          <label className="text-xs text-white/80">Check-out</label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={booking.checkOut ? booking.checkOut.toISOString().split("T")[0] : ""}
            onChange={(e) => booking.setCheckOut(e.target.value ? new Date(e.target.value) : null)}
            className="border border-white/20 bg-white/5 p-2 rounded-md text-sm text-white"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col">
          <label className="text-xs text-white/80">Guests</label>
          <GuestSelector guests={booking.guests} setGuests={booking.setGuests} />
        </div>

        {/* Nights */}
        <div className="flex flex-col">
          <p className="text-xs text-white/80">Nights</p>
          <p className="font-semibold text-white">{booking.nights}</p>
        </div>

        {/* CTA */}
        <div className="ml-auto">
          <button
            type="button"
            onClick={onCheckAvailability}
            disabled={isSubmitting}
            className="bg-[#C46A2E] text-white px-5 py-2 rounded-sm hover:bg-[#a55524] font-semibold disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Check Availability"}
          </button>
        </div>
      </div>
    </div>
  );
};

export const BookingBarModal = ({ selectedRoom }: { selectedRoom?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const booking = useBooking();

  const handleCheckAvailability = async () => {
    if (!booking.checkIn || !booking.checkOut) {
      setErrorMessage("Please select both check-in and check-out dates.");
      return;
    }

    if (booking.checkOut <= booking.checkIn) {
      setErrorMessage("Check-out date must be after check-in date.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setStatusMessage("");

    try {
      const payload = {
        roomType: selectedRoom || "Standard Room",
        checkIn: booking.checkIn.toISOString().split("T")[0],
        checkOut: booking.checkOut.toISOString().split("T")[0],
        guests: booking.guests,
      };

      const result = await bookingService.createReservation(payload);
      setStatusMessage(result.message || "Reservation request submitted successfully.");
    } catch (error: any) {
      const message = error?.message || "Something went wrong while creating the reservation.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

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

            {errorMessage && (
              <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {errorMessage}
              </div>
            )}

            {statusMessage && (
              <div className="mb-4 rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
                {statusMessage}
              </div>
            )}

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
              onCheckAvailability={handleCheckAvailability}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BookingBar;
