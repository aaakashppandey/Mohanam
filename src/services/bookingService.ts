import axios from "axios";
import type { BookingPayload, BookingResponse } from "@/src/types/booking";

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined. Please set it in the environment file.");
}

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const bookingService = {
  async createReservation(payload: BookingPayload): Promise<BookingResponse> {
    try {
      const response = await apiClient.post("/booking/create", payload);
      return response.data;
    } catch (error: any) {
      console.error("Create reservation error:", error);
      throw error?.response?.data || { success: false, message: "Reservation failed" };
    }
  },
};
