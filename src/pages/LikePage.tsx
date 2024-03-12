import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { sleep } from 'utils';
import { getUserLikedPhotos } from 'handlers/photo';
import { useUser } from 'hooks';
import { PhotoList, PhotoListWrapper } from 'components/Photo';
import { mockGetUserLikedPhotos } from 'handlers/mock/mockHandlers';

const photoCountPerPage = 12;

function LikePage() {
  const navigate = useNavigate();
  const user = useUser();

  const { data, isLoading } = useQuery({
    queryKey: ['user_likes'],
    enabled: user !== undefined,
    queryFn: async () => {
      if (user) {
        const [response] = await Promise.all([
          // getUserLikedPhotos(user.username, user.access_token),
          mockGetUserLikedPhotos(user.username, user.access_token),
          sleep(1500),
        ]);
        return response;
      }
    },
  });

  // useEffect(() => {
  //   if (!user) {
  //     navigate('/');
  //   }
  // }, [user]);

  return (
    <PhotoListWrapper>
      <PhotoList
        list={data}
        isLoading={isLoading}
        photoCount={photoCountPerPage}
      />
    </PhotoListWrapper>
  );
}
export default LikePage;
