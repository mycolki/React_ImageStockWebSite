import { Image, LikeButton } from 'components';
import { vars } from 'style/vars';
import { GetPhoto } from 'types/photo';

function SearchedPhoto({
  photo: { id, urls, liked_by_user },
}: {
  photo: GetPhoto;
}) {
  return (
    <Image
      key={id}
      src={urls.small}
      width={vars.size.photoImage}
      height={vars.size.photoImage}
      // TODO: isLoggedUser
      topRightSlot={
        true ? (
          <LikeButton
            photoId={id}
            likedByUser={liked_by_user}
            onLikeChange={() => {}}
          />
        ) : undefined
      }
    />
  );
}
export default SearchedPhoto;
