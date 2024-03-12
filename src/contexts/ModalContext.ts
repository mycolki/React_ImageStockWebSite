import { createContext } from 'react';

export const ModalsStateContext = createContext<boolean>(false);

export const ModalsDispatchContext = createContext<{
  open: () => void;
  close: () => void;
}>({
  open: () => {},
  close: () => {},
});
