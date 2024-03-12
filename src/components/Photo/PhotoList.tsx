import { SkeletonImages } from 'components';
import { vars } from 'style/vars';
import { GetPhoto } from 'types/photo';
import Photo from './Photo';

interface PhotoListProps {
  list?: GetPhoto[];
  isLoading: boolean;
  photoCount: number;
}

function PhotoList({ photoCount, list, isLoading }: PhotoListProps) {
  return (
    <>
      {isLoading ? (
        <SkeletonImages
          count={photoCount}
          width={vars.size.photoImage}
          height={vars.size.photoImage}
        />
      ) : (
        list?.map((photo) => <Photo key={photo.id} photo={photo} />)
      )}
    </>
  );
}
export default PhotoList;
