import { ReactNode } from 'react';
import { css } from '@emotion/css';
import { vars } from 'style/vars';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function ModalWrapper({ isOpen, onClose, children }: ModalWrapperProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
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
