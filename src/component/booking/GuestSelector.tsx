"use client";

import { useState } from "react";

interface Props {
  guests: number;
  setGuests: (val: number) => void;
}

const GuestSelector = ({ guests, setGuests }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-white" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="border border-white/20 bg-white/5 p-2 rounded-md cursor-pointer text-sm flex items-center gap-2 text-white"
      >
        <span>👤</span>
        <span>
          {guests} Guest{guests > 1 && "s"}
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-12 left-0 bg-[#111111] border border-white/15 shadow-lg rounded-md p-3 w-48 z-50 text-sm text-white">
          <div className="flex justify-between items-center">
            <span className="font-medium text-white">Guests</span>
            <div className="flex gap-2 items-center text-white">
              <button
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="px-2 py-1 border border-white/15 rounded-md bg-white/5 hover:bg-white/10"
              >
                -
              </button>
              <span className="px-2 text-white">{guests}</span>
              <button
                onClick={() => setGuests(guests + 1)}
                className="px-2 py-1 border border-white/15 rounded-md bg-white/5 hover:bg-white/10"
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
