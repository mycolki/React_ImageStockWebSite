import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { css } from '@emotion/css';
import { Size, sizes } from 'style/element';
import { vars } from 'style/vars';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Size;
  rightSlot?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = 'medium', rightSlot, style, ...rest },
  ref
) {
  return (
    <div
      className={css`
        display: flex;
        justify-content: ${rightSlot ? 'space-between' : 'center'};
        align-items: center;
        gap: 8px;
        width: 100%;
        height: ${sizes[size]};
        margin: auto;
        padding: 0px 8px;
        font-size: calc(${sizes[size]} / 2.4);
        border: 1px solid ${vars.color.grey300};
        border-radius: ${vars.borderRadius.default};
        background-color: ${vars.color.white};
      `}
      style={style}
    >
      <input
        {...rest}
        ref={ref}
        className={css`
          width: 100%;
          height: 100%;
          border: none;
          border-radius: inherit;
          padding: 8px 8px 8px 16px;
          :focus {
            outline: none;
          }
        `}
      />
      {rightSlot}
    </div>
  );
});
Input.displayName = 'Input';

export default Input;
