import { Button } from 'components';
import PathDecoration from './PathDecoration';

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
