import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import('./pages/Home'));
const Work = React.lazy(() => import('./pages/Work'));
const NewHouses = React.lazy(() => import('./pages/NewHouses'));
const Alterations = React.lazy(() => import('./pages/Alterations'));
const Commercial = React.lazy(() => import('./pages/Commercial'));
const Educational = React.lazy(() => import('./pages/Educational'));
const Small = React.lazy(() => import('./pages/Small'));
const RiverHouse = React.lazy(() => import('./pages/new-house-pages/river-house'));
const PezulaHills = React.lazy(() => import('./pages/new-house-pages/pezula-hills'));
const PezulaFynbos = React.lazy(() => import('./pages/new-house-pages/pezula-fynbos'));
const Gradient = React.lazy(() => import('./pages/new-house-pages/gradient'));
const KennetStreet = React.lazy(() => import('./pages/new-house-pages/kennet-street'));
const SomersetHouse = React.lazy(() => import('./pages/new-house-pages/somerset-house'));
const Swartvlei = React.lazy(() => import('./pages/new-house-pages/swartvlei'));
const Townsend = React.lazy(() => import('./pages/new-house-pages/townsend'));
const WesternHead = React.lazy(() => import('./pages/new-house-pages/western-head'));
const Router = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/our-work' Component={Work}></Route>
        <Route path='/new-houses' Component={NewHouses}></Route>
        <Route path='/alterations' Component={Alterations}></Route>
        <Route path='/commercial' Component={Commercial}></Route>
        <Route path='/eductional' Component={Educational}></Route>
        <Route path='/small' Component={Small}></Route>
        <Route path='/new-houses/river-house' Component={RiverHouse}></Route>
        <Route path='/new-houses/pezula-hills' Component={PezulaHills}></Route>
        <Route path='/new-houses/pezula-fynbos' Component={PezulaFynbos}></Route>
        <Route path='/new-houses/gradient' Component={Gradient}></Route>
        <Route path='/new-houses/kennet-street' Component={KennetStreet}></Route>
        <Route path='/new-houses/somerset-house' Component={SomersetHouse}></Route>
        <Route path='/new-houses/swartvlei' Component={Swartvlei}></Route>
        <Route path='/new-houses/townsend' Component={Townsend}></Route>
        <Route path='/new-houses/western-head' Component={WesternHead}></Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
