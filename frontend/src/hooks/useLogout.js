// frontend/src/hooks/useLogout.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from "../lib/api";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: mutateLogout, isLoading, error } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // Clear cached authUser so App.jsx redirects correctly
      queryClient.setQueryData(["authUser"], null);
      queryClient.invalidateQueries({ queryKey: ["authUser"] });

      // Redirect to login page explicitly
      navigate("/login");
    },
  });

  // Wrap mutateLogout in a callable function
  const logoutMutation = () => mutateLogout();

  return { logoutMutation, isLoading, error };
};

export default useLogout;
