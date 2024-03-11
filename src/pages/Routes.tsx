import { Routes as PageRoutes, Route, Navigate } from 'react-router-dom';
import MainPage from './MainPage';
import LikePage from './LikePage';

function Routes() {
  return (
    <PageRoutes>
      {/* <Route element={<Layout />}> */}
      <Route path="/" element={<MainPage />} />
      <Route path="/like" element={<LikePage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
      {/* </Route> */}
    </PageRoutes>
  );
}
export default Routes;
