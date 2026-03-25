"use client";

import { useState } from "react";

interface Props {
  guests: number;
  setGuests: (val: number) => void;
}

const GuestSelector = ({ guests, setGuests }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="border p-2 rounded cursor-pointer"
      >
        👤 {guests} Guest{guests > 1 && "s"}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg p-4 w-48 z-50">
          <div className="flex justify-between items-center">
            <span>Guests</span>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="px-2 border rounded"
              >
                -
              </button>
              <span>{guests}</span>
              <button
                onClick={() => setGuests(guests + 1)}
                className="px-2 border rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestSelector;
