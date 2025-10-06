import { useQuery } from '@tanstack/react-query';
import { getAuthUser } from '../lib/api';

const useAuthuser = () => {
  const authUserQuery = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false,
  });

  return { 
    isLoading: authUserQuery.isLoading, 
    authUser: authUserQuery.data?.user ?? null,
    query: authUserQuery // optional: expose for advanced use
  }
}

export default useAuthuser;
