import { memo } from 'react';
import { css } from '@emotion/css';
import Button, { ButtonProps } from './Button';

const IconButton = memo(function IconButton({
  children,
  size = 'medium',
  onClick,
  disabled,
  variant = 'ghost',
}: ButtonProps) {
  return (
    <Button
      className={css`
        border-radius: 100%;
      `}
      size={size}
      style={{
        padding: '0',
        borderRadius: '50%',
        aspectRatio: '1 / 1',
      }}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
});
export default IconButton;
