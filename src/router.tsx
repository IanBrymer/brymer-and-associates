import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import('./pages/Home'));
const Work = React.lazy(() => import('./pages/Work'));
const NewHouses = React.lazy(() => import('./pages/NewHouses'));
const Alterations = React.lazy(() => import('./pages/Alterations'));
const Commercial = React.lazy(() => import('./pages/Commercial'));
const Router = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/our-work' Component={Work}></Route>
        <Route path='/new-houses' Component={NewHouses}></Route>
        <Route path='/alterations' Component={Alterations}></Route>
        <Route path='/commercial' Component={Commercial}></Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
