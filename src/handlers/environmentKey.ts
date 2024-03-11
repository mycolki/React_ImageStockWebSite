export const DOMAIN_URL = import.meta.env.VITE_DOMAIN_URL;

export const scope = 'public+read_user+write_likes';
export const BASE_URL = import.meta.env.VITE_UNSPLASH_BASE_URL;
export const AUTHORIZE_URL = `${
  import.meta.env.VITE_UNSPLASH_OATH_URL
}/authorize`;
export const TOKEN_URL = `${import.meta.env.VITE_UNSPLASH_OATH_URL}/token`;
export const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
export const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
