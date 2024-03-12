import { Outlet } from 'react-router-dom';
import { MenuList } from '.';

function LikePageMenuList() {
  return (
    <>
      <MenuList menus={menus} />
      <Outlet />
    </>
  );
}
export default LikePageMenuList;

const menus = [
  { path: '/user/photo', name: '사진' },
  { path: '/user/like', name: '좋아요' },
  { path: '/user/collection', name: '컬렉션' },
  { path: '/user/statics', name: '통계' },
];
