import { Image, LikeButton } from 'components';
import { vars } from 'style/vars';
import { GetPhoto } from 'types/photo';
import useModals from 'hooks/useModal';
import { ModalWrapper, PhotoDetailModal } from 'components/Modal';
import { useUser } from 'hooks';

function SearchedPhoto({
  photo: { id, urls, liked_by_user },
}: {
  photo: GetPhoto;
}) {
  const { openModal } = useModals();
  const user = useUser();

  return (
    <>
      <Image
        key={id}
        src={urls.small}
        width={vars.size.photoImage}
        height={vars.size.photoImage}
        onClick={openModal}
        topRightSlot={
          user ? (
            <LikeButton
              photoId={id}
              likedByUser={liked_by_user}
              onLikeChange={() => {}}
            />
          ) : undefined
        }
      />
      <ModalWrapper>
        <PhotoDetailModal photoId={id} />
      </ModalWrapper>
    </>
  );
}
export default SearchedPhoto;
