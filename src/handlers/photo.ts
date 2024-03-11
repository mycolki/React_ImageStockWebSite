import axios from 'axios';
import {
  GetPhoto,
  GetPhotoDetail,
  LikePhoto,
  PhotoResponse,
} from 'types/photo';
import { isNullish } from 'utils';
import ERROR from './errorMessages';
import { ACCESS_KEY, BASE_URL } from './environmentKey';

// https://unsplash.com/documentation#search-photos
export async function searhPhotos({
  page,
  perPage,
  query,
  token,
}: {
  page: number;
  perPage: number;
  query?: string;
  token?: string;
}) {
  const result = await axios.get<PhotoResponse<GetPhoto>>(
    `${BASE_URL}/search/photos`,
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : `Client-ID ${ACCESS_KEY}`,
      },
      params: {
        page,
        per_page: perPage,
        query,
      },
    }
  );

  return result.data;
}

// https://unsplash.com/documentation#get-a-photo
export async function getPhoto({
  photoId,
  token,
}: {
  photoId: string;
  token?: string;
}) {
  const result = await axios.get<GetPhotoDetail>(
    `${BASE_URL}/photos/${photoId}`,
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  return result.data;
}

// https://unsplash.com/documentation#list-a-users-liked-photosexport async function getPhoto({ photoId }: { photoId: string }) {
export async function getUserLikedPhotos(username?: string, token?: string) {
  if (isNullish(username)) {
    throw new Error(ERROR.UNAUTHENTICATED_USER);
  }
  if (isNullish(token)) {
    throw new Error(ERROR.UNAUTHENTICATED_TOKEN);
  }

  const result = await axios.get<GetPhoto[]>(
    `${BASE_URL}/users/${username}/likes`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        per_page: 30,
      },
    }
  );

  return result.data;
}

// https://unsplash.com/documentation#like-a-photo
export async function likePhoto(id: string, token?: string) {
  if (isNullish(token)) {
    throw new Error(ERROR.UNAUTHENTICATED_TOKEN);
  }

  const result = await axios.post<LikePhoto>(
    `${BASE_URL}/photos/${id}/like`,
    undefined,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return result.data;
}

// https://unsplash.com/documentation#unlike-a-photo
export async function unlikePhoto(id: string, token?: string) {
  if (isNullish(token)) {
    throw new Error(ERROR.UNAUTHENTICATED_TOKEN);
  }

  const result = await axios.delete<LikePhoto>(
    `${BASE_URL}/photos/${id}/like`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return result.data;
}
