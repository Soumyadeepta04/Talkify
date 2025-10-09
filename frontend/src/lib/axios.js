import axios from "axios";

// Create an Axios instance
export const axiosInstance = axios.create({
  baseURL: "https://talkify-wheat.vercel.app/api",
  // baseURL: "http://localhost:5000/api", // Backend URL
  withCredentials: true, // Send cookies automatically
});

// Optional: request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
