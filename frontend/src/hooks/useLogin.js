import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../lib/api";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  
  const { mutate, isPending, error } = useMutation({
    mutationFn: login,
    onSuccess: (userData) => {
      // Immediately set the user data in the cache
      queryClient.setQueryData(["authUser"], userData);
      
      // Force a refetch to ensure we have fresh data
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      
      // Navigate based on onboarding status
      if (userData?.isOnboarded) {
        navigate('/', { replace: true });
      } else {
        navigate('/onboarding', { replace: true });
      }
    },
    onError: (error) => {
      console.error("Login error:", error);
      // Clear any stale token if we get an auth error
      if (error?.response?.status === 401) {
        localStorage.removeItem('token');
      }
    }
  });

  return { error, isPending, loginMutation: mutate };
};

export default useLogin;