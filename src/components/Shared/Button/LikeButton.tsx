import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Variant } from 'style/element';
import { Like, Unlike } from 'components/Shared/Icons';
import Button from './Button';
import { likePhoto, unlikePhoto } from 'handlers/photo';
import { useUser, useGetLikeCallback } from 'hooks';

function LikeButton({
  photoId,
  likedByUser,
  variant = 'ghost',
}: {
  photoId: string;
  likedByUser: boolean;
  variant?: Variant;
}) {
  const user = useUser();
  const handleLikeChange = useGetLikeCallback();

  const { mutate: likePhotoMutate, data: likedPhotoData } = useMutation({
    mutationFn: (id: string) => likePhoto(id, user?.access_token),
  });

  const { mutate: unlikePhotoMutate, data: unlikedPhotoData } = useMutation({
    mutationFn: (id: string) => unlikePhoto(id, user?.access_token),
  });

  useEffect(() => {
    if (likedPhotoData) {
      handleLikeChange(likedPhotoData.photo);
    }
  }, [likedPhotoData]);

  useEffect(() => {
    if (unlikedPhotoData) {
      handleLikeChange(unlikedPhotoData.photo);
    }
  }, [unlikedPhotoData]);

  return (
    <>
      {likedByUser ? (
        <Button
          variant={variant}
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            unlikePhotoMutate(photoId);
          }}
        >
          <Like size={20} />
        </Button>
      ) : (
        <Button
          variant={variant}
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            likePhotoMutate(photoId);
          }}
        >
          <Unlike size={20} />
        </Button>
      )}
    </>
  );
}
export default LikeButton;
