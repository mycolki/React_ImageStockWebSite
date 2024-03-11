import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { cacheUser, requestToken } from 'handlers/auth';

function useUserByToken(code: string | null) {
  const queryClient = useQueryClient();
  const { data: user, isFetchedAfterMount } = useQuery({
    queryKey: ['token'],
    queryFn: () => (code ? requestToken(code) : undefined),
    enabled: code !== null,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  useEffect(() => {
    if (user && isFetchedAfterMount) {
      cacheUser(user);
      queryClient.invalidateQueries({ queryKey: ['user'], refetchType: 'all' });
      window.history.replaceState(null, '', '/');
    }
  }, [user]);

  return user;
}
export default useUserByToken;
