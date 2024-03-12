import { ReactNode, useState } from 'react';
import {
  Callback,
  LikeCallbackDispatchContext,
  LikeCallbackStateContext,
} from 'contexts/LikeChangeCallbackContext';

function LikeCallbackProvider({ children }: { children: ReactNode }) {
  const [callback, setCallback] = useState<Callback>(() => {
    return () => {};
  });

  return (
    <LikeCallbackStateContext.Provider value={callback}>
      <LikeCallbackDispatchContext.Provider value={setCallback}>
        {children}
      </LikeCallbackDispatchContext.Provider>
    </LikeCallbackStateContext.Provider>
  );
}
export default LikeCallbackProvider;
