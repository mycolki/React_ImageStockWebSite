import axios from 'axios';
import { User } from 'types/auth';

const scope = 'public+read_user+write_likes';
const AUTHORIZE_URL = `${import.meta.env.VITE_UNSPLASH_OATH_URL}/authorize`;
const TOKEN_URL = `${import.meta.env.VITE_UNSPLASH_OATH_URL}/token`;

export function login() {
  window.location.href = `${AUTHORIZE_URL}?client_id=${
    import.meta.env.VITE_ACCESS_KEY
  }&redirect_uri=${
    import.meta.env.VITE_DOMAIN_URL
  }&response_type=code&scope=${scope}`;
}

export async function requestToken(code: string) {
  const result = await axios.post<User>(TOKEN_URL, undefined, {
    params: {
      client_id: import.meta.env.VITE_ACCESS_KEY,
      redirect_uri: import.meta.env.VITE_DOMAIN_URL,
      client_secret: import.meta.env.VITE_SECRET_KEY,
      code,
      grant_type: 'authorization_code',
    },
  });
  return result.data;
}

let cachedUser: User | undefined;

export function cacheUser(user: User) {
  cachedUser = user;
}

export async function getUser() {
  return { user: cachedUser };
}
