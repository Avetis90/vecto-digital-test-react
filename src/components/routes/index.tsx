import React, { Suspense } from 'react';
import Layout from "components/layout";
import { Route, Routes } from 'react-router-dom';
import routes from "config/routes.config";
import Loader from "../UI-lib/loader";
import NotFound from "../../pages/404";

const AllRoutes = () => {
  return (
    <Suspense fallback={<Loader loading={true} />}>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({key, path, component: Component}, index) => (
            <Route
              key={key + index}
              path={path}
              element={<Component />}
            />
          ))}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
