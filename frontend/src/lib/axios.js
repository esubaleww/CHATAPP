import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatapp-yg2h.onrender.com/api",
  withCredentials: true,
});
