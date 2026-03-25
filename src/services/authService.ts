import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: any;
}

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authService = {
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const response = await apiClient.post("/auth/register", data);
      return response.data;
    } catch (error: any) {
      console.error("Register error:", error);
      throw error.response?.data || error;
    }
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    try {
      const response = await apiClient.post("/auth/login", {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      console.error("Login error:", error);
      throw error.response?.data || error;
    }
  },
};
