import { Routes as PageRoutes, Route, Navigate } from 'react-router-dom';
import SearchPage from './SearchPage';
import LikePage from './LikePage';
import { Container } from 'components/Layout';
import { LikePageMenuList, MainPageMenuList } from 'components/Menu';

function Routes() {
  return (
    <PageRoutes>
      <Route element={<Container />}>
        <Route element={<MainPageMenuList />}>
          <Route path="/" element={<SearchPage />} />
        </Route>
        <Route path="/user" element={<LikePageMenuList />}>
          <Route path="like" element={<LikePage />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </PageRoutes>
  );
}
export default Routes;
