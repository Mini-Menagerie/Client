import React from 'react'
import { Global } from '@emotion/core';
import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';

import routes from './Router.routes';
import LandingPage from '../pages/LandingPage/LandingPage';
import globalStyles from '../styles/Global';
import FindBreeds from '../pages/FindBreeds/FindBreeds';
import PetsDetail from '../pages/PetsDetail/PetsDetail';
import PetShop from '../pages/PetShop/PetShop';

const Router = () => (
  <BrowserRouter>
    <Global styles={globalStyles}
    />
    <Switch>
      <Route
        exact path={routes.HOME}
        component={LandingPage}
      />
      <Route
        exact path={routes.ALLPETS}
        component={LandingPage}
      />
      <Route
        exact path={routes.ALLBREEDS}
        component={FindBreeds}
      />
      <Route
        exact path={routes.PETSDETAIL}
        component={PetsDetail}
      />
      <Route
        exact path={routes.PETSHOP}
        component={PetShop}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
