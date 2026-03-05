import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.error("Auth check failed:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signup: async (form) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/register", form);
      set({ authUser: res.data });
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Signup failed. Please try again.",
      );
    } finally {
      set({ isSigningUp: false });
    }
  },
}));
