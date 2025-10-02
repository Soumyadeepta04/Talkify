import axios from "axios";

// Create an Axios instance
export const axiosInstance = axios.create({
  baseURL: "https://talkify-wheat.vercel.app/api", // Backend URL
  withCredentials: true, // Send cookies automatically
});

// Optional: request interceptor (if you want to log requests)
axiosInstance.interceptors.request.use(
  (config) => {
    // You no longer need to add Authorization headers manually
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: response interceptor (if you want to handle global responses)
axiosInstance.interceptors.response.use(
  (response) => {
    // You no longer need to store tokens in localStorage
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

