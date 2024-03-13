import { ButtonStyle, buttonStyle } from 'components/Shared/Button/Button';
import { Link, To, RelativeRoutingType } from 'react-router-dom';

type StyledLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> &
  ButtonStyle & {
    reloadDocument?: boolean;
    replace?: boolean;
    state?: any;
    preventScrollReset?: boolean;
    relative?: RelativeRoutingType;
    to: To;
    unstable_viewTransition?: boolean;
  };

function StyledLink({
  variant = 'primary',
  size = 'medium',
  children,
  rightSlot,
  to,
  ...rest
}: StyledLinkProps) {
  return (
    <Link {...rest} to={to} className={buttonStyle(size, variant, rightSlot)}>
      {children}
      {rightSlot}
    </Link>
  );
}
export default StyledLink;
