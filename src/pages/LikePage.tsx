import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isNil } from 'utils';
import { PhotoList, PhotoListWrapper } from 'components/Photo';
import { useLikedPhoto, useUser } from 'hooks';

const photoCountPerPage = 12;

function LikePage() {
  const navigate = useNavigate();
  const user = useUser();
  const { data, isLoading } = useLikedPhoto({ user });

  useEffect(() => {
    if (isNil(user)) {
      navigate('/');
    }
  }, [user]);

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
