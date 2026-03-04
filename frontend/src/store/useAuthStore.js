import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: { name: "John Doe", email: "john.doe@example.com" },
  isLoggedIn: false,
  isLoading: false,
  login: () => set({ isLoggedIn: true }),
}));
