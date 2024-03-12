import { SkeletonImages } from 'components';
import { vars } from 'style/vars';
import { GetPhoto } from 'types/photo';
import SearchedPhoto from './SearchedPhoto';

interface SearchedPhotoListProps {
  list?: GetPhoto[];
  isLoading: boolean;
  photoCount: number;
}

function SearchedPhotoList({
  photoCount,
  list,
  isLoading,
}: SearchedPhotoListProps) {
  return (
    <>
      {isLoading ? (
        <SkeletonImages
          count={photoCount}
          width={vars.size.photoImage}
          height={vars.size.photoImage}
        />
      ) : (
        list?.map((photo) => <SearchedPhoto photo={photo} />)
      )}
    </>
  );
}
export default SearchedPhotoList;
