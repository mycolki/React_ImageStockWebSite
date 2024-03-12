import { GetPhoto } from 'types/photo';
import { Like, Unlike } from 'components/Icons';
import Button from './Button';
import { Variant } from 'style/element';

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
  return (
    <>
      {likedByUser ? (
        <Button
          variant={variant}
          size="small"
          onClick={(e) => {
            e.stopPropagation();
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
          }}
        >
          <Unlike size={20} />
        </Button>
      )}
    </>
  );
}
export default LikeButton;
