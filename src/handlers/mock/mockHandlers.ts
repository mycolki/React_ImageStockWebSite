import { GetPhoto, GetPhotoDetail, PhotoResponse } from 'types/photo';
import { isNil, sleep } from 'utils';
import { mockPhotos } from './data';
import { User } from 'types/auth';

let photos = [...mockPhotos];

export async function mockGetUser(_code: string): Promise<User> {
  const result = {
    access_token: '12345',
    username: 'HANY🐸',
  } as User;

  await sleep(1000);
  return result;
}

export async function mockSearchPhotos(): Promise<PhotoResponse<GetPhoto>> {
  const result = {
    results: photos,
    total: 4,
    total_pages: 10,
  };

  await sleep(1000);
  return result;
}

export async function mockGetPhoto({ photoId }: { photoId: string }) {
  const photo = mockPhotos.find((photo) => photo.id === photoId);

  if (photo === undefined) {
    console.error('MockLikePhoto photo없음');
    return;
  }

  const result: GetPhotoDetail = {
    ...photo,
    updated_at: '2016-07-10T11:00:01-05:00',
    width: 200,
    height: 200,
    description: 'mock description',
    likes: 10,
    downloads: 20,
    user: {
      id: 'ID',
      name: 'Colki',
    },
    tags: [{ title: '친구' }],
  };

  await sleep(1000);
  return result;
}

export async function mockLikePhoto(id: string, token?: string) {
  if (isNil(token)) {
    console.error('토큰이 존재하지 않습니다.');
    return;
  }

  photos = photos.map((photo) =>
    photo.id === id ? { ...photo, liked_by_user: true } : photo
  );

  const photo = photos.find((photo) => photo.id === id);

  if (photo === undefined) {
    console.error('사진이 존재하지 않습니다.');
    return;
  }

  const result = {
    photo,
    user: {
      id: 'ab',
      name: '12',
    },
  };
  console.log(result);

  await sleep(1000);
  return result;
}

export async function mockUnlikePhoto(id: string, token?: string) {
  if (isNil(token)) {
    console.error('토큰이 존재하지 않습니다.');
    return;
  }

  photos = photos.map((photo) =>
    photo.id === id ? { ...photo, liked_by_user: false } : photo
  );

  const photo = photos.find((photo) => photo.id === id);

  if (photo === undefined) {
    console.error('사진이 존재하지 않습니다.');
    return;
  }

  const result = {
    photo,
    user: {
      id: 'ab',
      name: '12',
    },
  };

  await sleep(1000);
  return result;
}

export async function mockGetUserLikedPhotos(
  username?: string,
  token?: string
) {
  if (isNil(username)) {
    console.error('사용자가 존재하지 않습니다.');
    return;
  }
  if (isNil(token)) {
    console.error('토큰이 존재하지 않습니다.');
    return;
  }

  await sleep(1000);
  return photos.filter((photo) => photo.liked_by_user);
}
