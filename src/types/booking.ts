export interface BookingPayload {
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  data?: any;
}
