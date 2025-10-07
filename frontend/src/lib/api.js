import { axiosInstance } from "./axios";

// --- AUTHENTICATION ---

export const signup = async (signupData) => {
  try {
    const response = await axiosInstance.post("/auth/signup", signupData);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const login = async (loginData) => {
  try {
    const response = await axiosInstance.post("/auth/login", loginData);
    // If the login response itself contains the user, return it
    if (response.data.user) {
      return response.data.user;
    }
    // Otherwise, fetch the user profile separately
    const userResponse = await axiosInstance.get("/auth/me");
    return userResponse.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

export const getAuthUser = async () => {
  try {
    const response = await axiosInstance.get("/auth/me");
    return response.data;
  } catch (error) {
    console.error("Could not fetch authenticated user:", error);
    // Return null if there's no authenticated user (e.g., 401 error)
    return null;
  }
};

export const completeOnboarding = async (userData) => {
  try {
    const response = await axiosInstance.post("/auth/onboarding", userData);
    return response.data;
  } catch (error) {
    console.error("Onboarding error:", error);
    throw error;
  }
};

// --- USERS & FRIENDS ---

export const getRecommendedUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching recommended users:", error);
    throw error;
  }
};

export const getUserFriends = async () => {
  try {
    const response = await axiosInstance.get("/users/friends");
    return response.data;
  } catch (error) {
    console.error("Error fetching user friends:", error);
    throw error;
  }
};

// --- FRIEND REQUESTS ---

export const getFriendRequests = async () => {
  try {
    const response = await axiosInstance.get("/users/friend-requests");
    return response.data;
  } catch (error) {
    console.error("Error fetching friend requests:", error);
    throw error;
  }
};

export const getOutgoingFriendReqs = async () => {
  try {
    const response = await axiosInstance.get("/users/outgoing-friend-requests");
    return response.data;
  } catch (error) {
    console.error("Error fetching outgoing friend requests:", error);
    throw error;
  }
};

export const sendFriendRequest = async (userId) => {
  try {
    const response = await axiosInstance.post(`/users/friend-request/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error sending friend request:", error);
    throw error;
  }
};

export const acceptFriendRequest = async (requestId) => {
  try {
    const response = await axiosInstance.put(`/users/friend-request/${requestId}/accept`);
    return response.data;
  } catch (error) {
    console.error("Error accepting friend request:", error);
    throw error;
  }
};

/**
 * NEWLY ADDED FUNCTION
 * This function handles rejecting a friend request.
 */
export const rejectFriendRequest = async (requestId) => {
  try {
    const response = await axiosInstance.delete(`/users/friend-request/${requestId}/reject`);
    return response.data;
  } catch (error) {
    console.error("Error rejecting friend request:", error);
    throw error;
  }
};

// --- CHAT ---

export const getStreamToken = async () => {
  try {
    const response = await axiosInstance.get("/chat/token");
    return response.data;
  } catch (error) {
    console.error("Error fetching stream token:", error);
    throw error;
  }
};