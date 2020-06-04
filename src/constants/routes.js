import React from 'react';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import RegionDetail from '../pages/RegionDetail';
import PlaceDetail from '../pages/PlaceDetail';
import Trips from '../pages/Trips';
import TripDetail from '../pages/TripDetail';

const routes = {
  default: {
    path: '/',
    component: <Home />,
    exact: true,
  },
  signup: {
    path: '/signup',
    component: <SignUp />,
  },
  signin: {
    path: '/signin',
    component: <SignIn />,
  },
  placeDetail: {
    path: '/region-detail/:regionId/:placeId',
    component: <PlaceDetail />,
  },
  regionDetail: {
    path: '/region-detail/:regionId',
    component: <RegionDetail />,
  },
  trips: {
    path: '/trips',
    component: <Trips />,
  },
  tripDetail: {
    path: '/trip/:tripId',
    component: <TripDetail />,
  },
};

export default routes;
