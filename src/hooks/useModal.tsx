import { ModalsDispatchContext } from 'contexts/ModalContext';
import { useContext } from 'react';

function useModals() {
  const context = useContext(ModalsDispatchContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  const { open, close } = context;

  return {
    openModal: open,
    closeModal: close,
  };
}
export default useModals;
