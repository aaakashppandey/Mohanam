import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export interface CheckAvailabilityPayload {
  checkIn: Date;
  checkOut: Date;
}

export interface CreateBookingPayload {
  roomId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
}

const apiClient = axios.create({
  baseURL: API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const bookingService = {
  // 🔍 Check available rooms
  async checkAvailability(data: CheckAvailabilityPayload) {
    try {
      const res = await apiClient.post("/booking/check-availability", data);
      return res.data;
    } catch (error: any) {
      console.error("Availability error:", error);
      throw error.response?.data || error;
    }
  },

  // 🛏️ Create booking
  async createBooking(data: CreateBookingPayload) {
    try {
      const res = await apiClient.post("/booking/create", data);
      return res.data;
    } catch (error: any) {
      console.error("Booking error:", error);
      throw error.response?.data || error;
    }
  },
};
