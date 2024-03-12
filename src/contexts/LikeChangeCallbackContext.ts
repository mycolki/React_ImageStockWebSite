import { createContext } from 'react';
import { GetPhoto } from 'types/photo';

export type Callback = (photo: GetPhoto) => void;

export const LikeCallbackStateContext = createContext<Callback>(() => {});

export const LikeCallbackDispatchContext = createContext<
  (callback: Callback) => void
>(() => {});
