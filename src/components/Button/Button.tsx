import { ButtonHTMLAttributes, ReactNode } from 'react';
import { css as externalCss, SerializedStyles } from '@emotion/react';
import { css } from '@emotion/css';
import { Size, Variant, sizes } from 'style/element';
import { vars } from 'style/vars';

export interface ButtonStyle {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  rightSlot?: ReactNode;
}
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyle;

function Button({
  variant = 'primary',
  size = 'medium',
  children,
  rightSlot,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={buttonStyle(size, variant, rightSlot)}>
      {children}
      {rightSlot}
    </button>
  );
}
export default Button;

const primary = externalCss`
  background-color: ${vars.color.blue900};
  color: ${vars.color.white};
  border: 1px solid ${vars.color.blue900}
`;
const secondary = externalCss`
  background-color: ${vars.color.grey200};
  color: ${vars.color.default};
  border: 1px solid ${vars.color.grey300};  
`;
const outline = externalCss`
  background-color: ${vars.color.white};
  color: ${vars.color.default};
  border: 1px solid ${vars.color.grey400}
`;
const ghost = externalCss`
  background-color: transparent
`;
const variants: Record<Variant, SerializedStyles> = {
  primary,
  secondary,
  outline,
  ghost,
};

export const buttonStyle = (
  size: Size,
  variant: Variant,
  rightSlot: ReactNode
) => css`
  height: ${sizes[size]};
  font-size: calc(${sizes[size]} / 2.4);
  font-weight: ${vars.fontWeight[500]};
  display: flex;
  justify-content: ${rightSlot ? 'space-between' : 'center'};
  align-items: center;
  outline: none;
  gap: 2px;
  padding: 4px 10px;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: ${vars.borderRadius.default};
  white-space: nowrap;
  ${variants[variant]}
`;
