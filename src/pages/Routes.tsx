import { Routes as PageRoutes, Route, Navigate } from 'react-router-dom';
import MainPage from './MainPage';
import LikePage from './LikePage';
import { Container } from 'components/Layout';

function Routes() {
  return (
    <PageRoutes>
      <Route element={<Container />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </PageRoutes>
  );
}
export default Routes;
