import { axiosInstance } from "./axios";

export const signup = async (signupData) =>{
      const response = await axiosInstance.post("/auth/signup", signupData);
      return response.data;
    }

export const getAuthuser = async () =>{
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    };

