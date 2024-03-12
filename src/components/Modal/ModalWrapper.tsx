import { ReactNode, useContext } from 'react';
import { css } from '@emotion/css';
import { vars } from 'style/vars';
import {
  ModalsDispatchContext,
  ModalsStateContext,
} from 'contexts/ModalContext';

interface ModalWrapperProps {
  children: ReactNode;
}

function ModalWrapper({ children }: ModalWrapperProps) {
  const isModalOpen = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          close();
        }
      }}
      className={css`
        z-index: 50;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.365);
        backdrop-filter: blur(5px);
        overflow: hidden;
      `}
    >
      <div
        className={css`
          width: 900px;
          min-height: 600px;
          padding: 12px 0;
          background-color: ${vars.color.white};
          border-radius: ${vars.borderRadius.default};
          overflow: hidden;
        `}
      >
        {children}
      </div>
    </div>
  );
}
export default ModalWrapper;
