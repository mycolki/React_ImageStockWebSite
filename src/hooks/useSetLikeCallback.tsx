import { useContext } from 'react';
import { LikeCallbackDispatchContext } from 'contexts/LikeChangeCallbackContext';

function useGetLikeCallback() {
  const context = useContext(LikeCallbackDispatchContext);

  if (context === undefined) {
    throw new Error(
      'useGetLikeCallback must be used within a LikeCallbackProvider'
    );
  }

  return context;
}
export default useGetLikeCallback;
