import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { GetPhoto } from 'types/photo';
import { Variant } from 'style/element';
import { Like, Unlike } from 'components/Icons';
import Button from './Button';
import { likePhoto, unlikePhoto } from 'handlers/photo';
import { useUser } from 'hooks';
import { mockLikePhoto, mockUnlikePhoto } from 'handlers/mock/mockHandlers';

function LikeButton({
  photoId,
  likedByUser,
  variant = 'ghost',
  onLikeChange,
}: {
  photoId: string;
  likedByUser: boolean;
  variant?: Variant;
  onLikeChange: (photo: GetPhoto) => void;
}) {
  const user = useUser();

  const { mutate: likePhotoMutate, data: likedPhotoData } = useMutation({
    // mutationFn: (id: string) => likePhoto(id, user?.access_token),
    mutationFn: (id: string) => mockLikePhoto(id, user?.access_token),
  });

  const { mutate: unlikePhotoMutate, data: unlikedPhotoData } = useMutation({
    // mutationFn: (id: string) => unlikePhoto(id, user?.access_token),
    mutationFn: (id: string) => mockUnlikePhoto(id, user?.access_token),
  });

  useEffect(() => {
    if (likedPhotoData) {
      onLikeChange(likedPhotoData.photo);
    }
  }, [likedPhotoData]);

  useEffect(() => {
    if (unlikedPhotoData) {
      onLikeChange(unlikedPhotoData.photo);
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
