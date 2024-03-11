import { useQuery } from '@tanstack/react-query';
import { getUser } from 'handlers/auth';
import { User } from 'types/auth';

function useUser() {
  const { data } = useQuery<{ user: User | undefined }>({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return data?.user;
}
export default useUser;
