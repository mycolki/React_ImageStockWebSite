import { Outlet } from 'react-router-dom';
import { MenuList } from '.';

function MainPageMenuList() {
  return (
    <>
      <MenuList menus={menus} />
      <Outlet />
    </>
  );
}
export default MainPageMenuList;

const menus = [
  { path: '/', name: '보도/편집 전용' },
  { path: '/plus', name: 'Unsplash+' },
  { path: '/wallpapers', name: '배경화면' },
  { path: '/nature', name: '자연' },
  { path: '/3d', name: '3D렌더링' },
  { path: '/travel', name: '여행하다' },
  { path: '/architecture-interior', name: '건축 및 인테리어' },
  { path: '/textures-patterns', name: '텍스처 및 패턴' },
  { path: '/street-photography', name: '거리사진' },
  { path: '/film', name: '필름' },
  { path: '/archival', name: '기록의' },
  { path: '/experimental', name: '실험적인' },
];
