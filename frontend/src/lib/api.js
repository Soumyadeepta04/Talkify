import { axiosInstance } from "./axios";

export const signup = async (signupData) =>{
      const response = await axiosInstance.post("/auth/signup", signupData);
      return response.data;
    }

export const login = async (loginData) => {
  try {
    const response = await axiosInstance.post("/auth/login", loginData);
    // Token is automatically stored by the axios interceptor
    if (response.data.user) {
      return response.data.user;
    }
    // If no user in response, fetch it
    const userResponse = await axiosInstance.get("/auth/me");
    return userResponse.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.log("Error in getAuthUser:", error);
    return null;
  }
};

export const completeOnboarding = async (userdata) =>{
  const response = await axiosInstance.post("/auth/onboarding", userdata);
  return response.data;
}

