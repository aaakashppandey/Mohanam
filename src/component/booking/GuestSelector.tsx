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
        className="border border-gray-200 p-2 rounded-md cursor-pointer text-sm flex items-center gap-2"
      >
        <span>👤</span>
        <span>
          {guests} Guest{guests > 1 && "s"}
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-12 left-0 bg-white border border-gray-200 shadow-lg rounded-md p-3 w-48 z-50 text-sm">
          <div className="flex justify-between items-center">
            <span className="font-medium">Guests</span>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="px-2 py-1 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-2">{guests}</span>
              <button
                onClick={() => setGuests(guests + 1)}
                className="px-2 py-1 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100"
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
