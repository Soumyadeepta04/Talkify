import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { getAuthuser } from '../lib/api';

const useAuthuser = () => {
  const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthuser,
    retry: false,
  });

  return { isLoading: authUser.isLoading, authUser: authUser.data?.user}
}

export default useAuthuser