import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://talkify-4g5lpjxpz-soumyadeepta-mannas-projects.vercel.app/api",
  withCredentials: true,
});

// Add a request interceptor to add the token to all requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token from login response
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);