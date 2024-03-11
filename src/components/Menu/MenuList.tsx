import { css } from '@emotion/css';
import { vars } from 'style/vars';
import MenuListItem from './MenuListItem';

const MenuList = function HorizonListBar({
  menus,
}: {
  menus: { path: string; name: string }[];
  onMenuListItemClick?: (menu: { path: string; name: string }) => void;
}) {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        margin: 0;
        padding: 4px 24px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
        list-style: none;
        font-size: ${vars.fontSize.sm};
      `}
    >
      {menus.map((menu) => (
        <MenuListItem menu={menu} onMenuListItemClick={onMenuListItemClick} />
      ))}
    </div>
  );
};
export default MenuList;
