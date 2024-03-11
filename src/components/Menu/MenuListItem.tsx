import { css } from '@emotion/css';
import { Button } from 'components';
import { vars } from 'style/vars';

const MenuListItem = function HorizonListBar({
  menu: { path, name },
  onMenuListItemClick,
}: {
  menu: { path: string; name: string };
  onMenuListItemClick?: (menu: { path: string; name: string }) => void;
}) {
  const isCurrentPath = path === location.pathname;

  return (
    <div key={path}>
      <Button
        variant="ghost"
        size="small"
        onClick={() => {
          onMenuListItemClick?.({ path, name });
        }}
      >
        {name}
      </Button>
      {isCurrentPath && <PathDecoration />}
    </div>
  );
};
export default MenuListItem;

function PathDecoration() {
  return (
    <div
      className={css`
        height: 2px;
        background-color: ${vars.color.default};
      `}
    ></div>
  );
}
