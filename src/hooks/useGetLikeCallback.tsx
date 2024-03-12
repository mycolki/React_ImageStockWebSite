import { useContext } from 'react';
import { LikeCallbackStateContext } from 'contexts/LikeChangeCallbackContext';

function useGetLikeCallback() {
  const context = useContext(LikeCallbackStateContext);

  if (context === undefined) {
    throw new Error(
      'useGetLikeCallback must be used within a LikeCallbackProvider'
    );
  }

  return context;
}
export default useGetLikeCallback;
