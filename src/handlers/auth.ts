import axios from 'axios';
import { User } from 'types/auth';
import {
  ACCESS_KEY,
  AUTHORIZE_URL,
  DOMAIN_URL,
  SECRET_KEY,
  TOKEN_URL,
  scope,
} from './environmentKey';

export function login() {
  window.location.href = `${AUTHORIZE_URL}?client_id=${ACCESS_KEY}&redirect_uri=${DOMAIN_URL}&response_type=code&scope=${scope}`;
}

export async function requestToken(code: string) {
  const result = await axios.post<User>(TOKEN_URL, undefined, {
    params: {
      client_id: ACCESS_KEY,
      redirect_uri: DOMAIN_URL,
      client_secret: SECRET_KEY,
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
