import ModalWrapper from 'components/Modal/ModalWrapper';
import {
  ModalsDispatchContext,
  ModalsStateContext,
} from 'contexts/ModalContext';
import { ReactNode, useMemo, useState } from 'react';

function ModalProvider({ children }: { children: ReactNode }) {
  const [openedModal, setOpenedModal] = useState(false);

  const open = () => {
    setOpenedModal(true);
  };

  const close = () => {
    setOpenedModal(false);
  };

  const dispatch = useMemo(
    () => ({
      open,
      close,
    }),
    []
  );

  return (
    <ModalsStateContext.Provider value={openedModal}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}
export default ModalProvider;
