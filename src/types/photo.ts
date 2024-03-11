export interface PhotoResponse<T> {
  results: T[];
  total: number;
  total_pages: number;
}

export interface GetPhoto {
  id: string;
  liked_by_user: boolean;
  urls: {
    small: string;
  };
}

export interface GetPhotoDetail {
  id: string;
  updated_at: string;
  width: number;
  height: number;
  description: string;
  likes: number;
  liked_by_user: boolean;
  downloads: number;
  user: {
    id: string;
    name: string;
  };
  urls: {
    small: string;
  };
  tags: { title: string }[];
}

export interface LikePhoto {
  photo: GetPhoto;
  user: {
    id: string;
    name: string;
  };
}
