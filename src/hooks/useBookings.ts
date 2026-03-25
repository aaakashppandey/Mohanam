"use client";

import { useState } from "react";

export const useBooking = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);

  const nights =
    checkIn && checkOut && checkOut > checkIn
      ? Math.ceil(
          (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24),
        )
      : 0;

  return {
    checkIn,
    checkOut,
    guests,
    nights,
    setCheckIn,
    setCheckOut,
    setGuests,
  };
};
